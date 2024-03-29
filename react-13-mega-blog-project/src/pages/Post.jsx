import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import service from '../appwrite/configuration'
import { Container, Button } from '../components'
import parse from "html-react-parser"
import { UseSelector, useSelector } from 'react-redux'

const Post = () => {

    const [post, setPost] = useState(null);
    const {slug} = useParams();
    const navigate = useNavigate();
    
    const userData = useSelector((state) => state.auth.userData);


    // Now here we have the concept of Author i.e. the owner of the blog site
    const isAuthor = post && userData ? post.userId === userData.$id : false;
    // for an user to be an author, they should have post and userdata and also the id of post should match the id of the userData for it to be an author

    // If it is an author, we will give it an edit and delete button for post

    useEffect(() => {
      if(slug) {
        service.getPost(slug).then((post) => {
          if(post) {
            setPost(post);
          }

          else {
            navigate('/');
          }
        });
      }

      else {
        navigate('/');
      }
    }, [slug, navigate]);

    const deletePost = () => {
      service.deletePost(post.$id).then((status) => {
        if(status) {
          service.deleteFile(post.featuredImage);
          navigate('/');
        }
      });
    };


  return post ? (
    <div className='py-8'>
      <Container>
        <div className='w-full flex justify-center mb-4 relative border rounded-xl p-2'>
          <img
            src={service.getFilePreview(post.featuredImage)}
            alt={post.title}
            className='rounded-xl'
          />

          {isAuthor && (
            <div className='absolute right-6 top-6'>
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor='bg-green-500' className='mr-3'>
                  Edit
                </Button>
              </Link>
              <Button bgColor='bg-red-500' onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>


        <div className='w-full mb-6'>
          <h1 className='text-2xl font-bold'>
            {post.title}
          </h1>            
        </div>

        <div className='browser-css'>
          {parse(post.content)}
        </div>
      </Container>
    </div>
  ) : null;
}

export default Post

// 35. 🛑 Now we add routing, for that, go to src/main.jsx