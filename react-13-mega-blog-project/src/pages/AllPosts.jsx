import { React, useState, useEffect} from 'react'
// We will not get all these posts directly, we need to query them. For that we will need useState and useEffect.

// We will also need container and postcard
import {Container, PostCards} from '../components'

// We also need the service from appwrite's configuration.js file
import service from '../appwrite/configuration'

function AllPosts() {

    const [posts, setPosts] = useState([]);
    useEffect(() => {}, [])

    service.getPosts([]).then((posts) => {
    // If we go to config and look at the getPosts method, we will see that it will return a lists of all posts
    // Here if we get the return result, we want to store it all in an empty []

    // Also we've called the result posts and if we get the result back, we used the posts callback function and then store all those posts' documents (i.e. the individual posts) in setPosts

        if(posts) {
            setPosts(posts.documents);

            // this posts.documents is initially stored in posts (of useState)
        }
    });



  return (
    <div className='w-full py-8'>
      <Container>
        {/* Now to display all the posts, we will iterate through them, just like iterating through each data of the database  */}
        <div className='flex flex-wrap'>
            {posts.map((post) => (
                <div key={post.$id} className='p-2 w-1/4'>
                    <PostCards post={post} />
                </div>
            ))}
        </div>
        
      </Container>
    </div>
  )
}

export default AllPosts

// 32. 🛑 Go to EditPost.jsx