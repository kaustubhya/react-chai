import React from 'react'

import { useState, useEffect } from 'react'

import service from '../appwrite/configuration'

import { Container, PostCards } from '../components'

function Home() {

    // Asking first if the home page has posts in it

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        service.getPosts().then((posts) => {
            // We are giving no query here, hence we donot write like this: ([])
            if(posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if(posts.length === 0) {
        // if there are no posts then return a container saying no posts found

        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <h1 className='text-2xl font-bold hover:text-gray-500'>
                            Login to read Posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    // else if posts are there, then 
    
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCards {...post} />
                            {/* To display one post, we write <PostCards post={post} />, to display all posts, we write <PostCards {...post} /> */}
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )

    // To show posts data, we looped through using map(), like looping through DB values
  
}

export default Home

// 34. 🛑 Go to Post.jsx