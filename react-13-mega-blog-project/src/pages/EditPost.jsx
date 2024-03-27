import React from "react";
import { useState, useEffect } from "react";

import { Container, PostForm } from "../components";

import service from "../appwrite/configuration"

import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {

    const [post, setPost] = useState([]);
    // we can also do: useState(null)

    // 🛑 Now we need a slug. What we want to achieve is that when the user clicks on edit post, they will be redirected to another url.

    // 🛑 We have the value in a url, to extract values from this url slig, we use useParams() from react-router-dom

    const {slug} = useParams;

    const navigate = useNavigate();

    // We get all our data values from the slug. If there is any change in the slug value, get the data value and use useEffect for this.

    useEffect(() => {

        // if slug is having some value (if slug is true)
        if(slug) {
            service.getPost(slug).then((post) => {
                // getting only a singular post here
                if(post) {
                    setPost(post)
                }
            })
        }

        else {
            navigate('/');
        }
    }, [slug, navigate])

    // if slug or navigate value changes, run useEffect again.

    // Using conditional rendering for return, i.e. if post is there or not. 
    // If yes then return all inside (), if not then return null.
  return post ? (
    <div className="py-8">
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost

// 33. 🛑 Go to Home.jsx