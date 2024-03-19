import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {Button, Input, RTE, Select} from "../index"
import service from "../../appwrite/configuration";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PostForm = ({post}) => {

    // first we need some information from use form
    const {register, handleSubmit, watch, setValue, control, getValues} = useForm(

    // watch -> This is used to continously monitor any field
    // setValue -> This is used to set any value in a form
    // control -> This is used to take control of any form. 🛑 We will pass this control in RTE
    // getValues -> This is used to grab all the values from a form


    {
        // passing an object to give default values

        defaultValues: {
            // Now to get info or to pass info to these default values, we will make the user give us these values.
            // For that we used "post" as props in PostForm function above

            // Also we have used conditional rendering, to fetch info from post
            // Here we have 2 cases, 
            // 1. User is making a new blog post from scratch
            // 2. User is Editing an already made blog post

            title: post?.title || '',
            // if post has some value then get title from post (post.title) as default value else default value is ''
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active',
            // same explaination for these rest
        },

    }
    )

    const navigate = useNavigate()
    const userData = useSelector((state) => state.auth.userData);
    // taking userData from state using useSelector

  
    // if user has submitted the form, then he might have had passed the data

    const submit = async (data) => {
        // if he already has some value in post
        if(post) {

            // We are doing file handling and uploading as first part of updation
            // here we uploaded the featured image file if the post is already there
            const file = data.image[0] ? await service.uploadFile(data.image[0]) : null;
            // if image is present with us then we uploaded the first image available


            // now we have a new image file uploaded. Now we delete the old image file when and only when we have a new image file
            if (file) {
                service.deleteFile(post.featuredImage);
                // post.featuredImage is the fileID to be deleted (we named it featuredImage in the DB)
            }


            // updating the post now and giving it the data information
            // this is the syntax and info parameters from appwrite configuration service:
            // updatePost( slug, {title, content, featuredImage, status}) 
            const dbPost = await service.updatePost(post.$id, {
                // spreading the data for ease
                ...data,
                // we got all values here

                // just one thing, we will override the image data as we uploaded a new file
                featuredImage: file ? file.$id : undefined
                // if image file exists then change image file id to the one we have uploaded it with, else if image file not updated, use undefined
            })

            // Now after making updations, we will navigate the user there to the updated post's id

            if(dbPost) {
                navigate(`/post/${dbPost.$id}`)
            }
        } 

        else {
            // creating a new file (form)
            // using same conditional rendering as before
            const file = data.image[0] ? await service.uploadFile(data.image[0]) : null;

            if(file) {
                const fileId = file.$id
                // $id => Appwrite Syntax🛑🛑 
                // _id => MongoDB syntax
                data.featuredImage = fileId 
                // updating image uploaded
                const dbPost = await service.createPost({
                    // syntax: createPost({title, slug, content, featuredImage, status, userId})
                    ...data,
                    userId: userData.$id
                    // we got userData from store
                })

                // redirect
                if(dbPost) {
                    navigate(`/post/${dbPost.$id}`)
                }
            }

        }


    }


    // 🛑🛑 INTERVIEW CONCEPT
    
    // SLUG TRANSFORM

    // We have 2 input fields here, title and slug, we need to watch the title and generate values inside the slug
    // If there is a 'space' given by the user then we use RegEx to convert the 'space' to 'dash' i.e. ' ' to '-'

    const slugTransform = useCallback((value) => {
        if(value && typeof value === 'string') {
            // const slug = value.toLowerCase().replace(/ /g, '-')
            // setValue('slug', slug)
            // return slug

            // Let us see an alternative
            return value
            .trim()
            .toLowerCase()
            .replace(/^[a-zA-Z\d]+/g, '-')

            /*
            Alternative of this Regex:   
            .replace(/^[a-zA-Z\d\s]+/g, '-')
            .replace(/\s/g, '-') 
            
            Here we dealt with spaces separately
            */

            // '//g' means we are matching global
            // '/[]/g' means matching the whole combination of a pattern
            // ^ => NOT
            // /^[a-zA-Z\d]+/g means convert everything else to '-' except a-z, A-Z, all digits (\d). 
            // Others like spaces ' ', special chars etc. are converted to '-'. Hence we used '+' for others. 
        }

        return ''
        // if no value found, return ''

    }, [])
 
    useEffect( () => {
        const subscription = watch( (value, {name}) => {
            if(name === 'title') {
                // we got title from ...register in react hook form
                setValue('slug', slugTransform(value.title, {shouldValidate : true}))
                // giving/filling slugTransform(value.title) value in 'slug' field
                // value is an object here
            }
        })
        // as we have this watch from react hook form, we have a callback inside of it

        // INTERVIEW QUESTION 🛑 : HOW to Optimize this subscription method?
        // Ans:
        return () => {
            subscription.unsubscribe()
            // this is used for memory management and optimization
        }

    }, [watch, slugTransform, setValue])


  return (
    <form onSubmit={handleSubmit(submit)} className='flex flex-wrap'>
        {/* We are splitting the form into left and right halves left half takes 2/3 space, right half takes 1/3 space */}

        {/* Left Side of form */}
        <div className='w-2/3 px-2'>
            <Input
                label= "Title :"
                placeholder= "Title"
                className="mb-4"
                {...register("title", {required: true})}
            />

            <Input
                label="Slug :"
                placeholder="Slug"
                className="mb-4"
                {...register("slug", {required:true})}
                onInput={(e) => {
                    setValue("slug", slugTransform(e.currentTarget.value), {shouldValidate: true});
                }}
            />

            <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
        </div>

        {/* Right Side of form */}
        <div className='w-1/3 px-2'>
            <Input 
                label="Featured Image :"
                type="file"
                className="mb-4"
                accept="image/png, image/jpg, image/jpeg, image/gif"
                {...register("image", {required: !post})}
            />
            {/* accept => Accepted Image Formats like jpeg, png, jpg and gif */}
            {post && (
                <div className='w-full mb-4'>
                    <img
                        src={service.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className='rounded-lg'
                    />
                </div>
            )}


            <Select
                options={["active", "inactive"]}
                label="Status"
                className="mb-4"
                {...register("status", {required: true})}

            />

            <Button 
                type='submit'
                bgColor={post ? 'bg-green-500' : undefined}
                className='w-full'
            >
            {post ? "Update" : "Submit"}
            </Button>
        </div>
    </form>
  );
}

export default PostForm
