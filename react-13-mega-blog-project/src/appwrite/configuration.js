import config from "../config/config";
import {Client, ID, Databases, Storage, Query} from "appwrite";

export class Service{
    // Coming from bottom of the page (follow the up mark 🆙)
    // declaring variables here, like we did in auth_service.js
    client = new Client();

    // bringing in more properties
    databases;
    bucket;
    // bucket == storage here

    


    // now we have made all the variables, now the account should be made inside these variables when the constructor is called
    // Calling constructor
    constructor() {
        // now using client just like we did in auth_service.js
        this.client
        .setEndpoint(config.appwriteUrl)
        .setEndpoint(config.appwriteProjectId);
        // this is just like how we created account from client in auth_service.js

        // See this basic line from docs: const databases = new Databases(client);
        // Docs link: https://appwrite.io/docs/references/cloud/client-web/databases
        // now filling in the variables we declared above
        this.databases = new Databases(this.client); // see the code line from docs ↑
        
        // doing the same for bucket(aka storage)
        // docs: https://appwrite.io/docs/references/cloud/client-web/storage
        // const storage = new Storage(client);
        this.bucket = new Storage(this.client);

        // To make a blog post, we need the following things:
        // 🛑 Code: (const promise = databases.createDocument('[DATABASE_ID]', '[COLLECTION_ID]', '[DOCUMENT_ID]', {}))
        // We will use async-await for promises. We have Database ID, Collection ID, Document ID (we can use id.unique() but we will do something different here) and {} means our content from the blog
        // Refer: https://appwrite.io/docs/references/cloud/client-web/databases
        // Go to Create document section of this docs page to see the code above
    }

    // Functionalities

    // 1. Create Post

        // using async so that we donot have to change things under the hood whenever we switch from appwrite to other services like firebase, mongodb etc.
        async createPost({title, slug, content, featuredImage, status, userId}) {
            // We take in all parameters mentioned above from the user
            try {
                // creating the post and returning it via await (see code in 🛑 from docs)
                return await this.databases.createDocument(
                    // database ID
                    config.appwriteDatabaseId,

                    // collection ID
                    config.appwriteCollectionId,

                    // document ID (whatever slug values we pass into it we are taking that as ID. We can take id.unique() as document ID too)
                    slug,

                    // Object {} => Passing all the other necessary info needed here

                    {
                        title,
                        content,
                        featuredImage, 
                        status,
                        userId,
                        
                    }
                    // So when we use say MongoDB, we will keep the async line same, just change the inner code contents according to the mongoDB documentation.

                )
            }

            catch(error) {
                console.log("Appwrite Service :: createPost :: error", error);
            }
        }

        // 2. Update Post
        // See the update document section in the docs: https://appwrite.io/docs/references/cloud/client-web/databases

        async updatePost( slug, {title, content, featuredImage, status}) {
        
            // 🛑 Main code line: const promise = databases.updateDocument('[DATABASE_ID]', '[COLLECTION_ID]', '[DOCUMENT_ID]');
            // 🛑 Now a thing to note here is, for updating the document, please do take the ID of the document here separately. If we take it in with the others, like we did in createPost, we would have to pick it out one by one

           /* So, async updatePost({title, slug, content, featuredImage, status, userId}) { ❌
                async updatePost(slug, {title, content, featuredImage, status}) { ✅ 
                This will help us uniquely identify the document
                Also we are not including userId here because we donot want to change or update the userId while updating the document.
                We are giving edit document option to only that user who has created the document (this is our choice of designing the functionality)
            */

                try {
                    return await this.databases.updateDocument(
                        config.appwriteDatabaseId,
                        config.appwriteCollectionId,
                        slug, // document ID
                        {
                            // Update the following
                            title,
                            content,
                            featuredImage,
                            status,
                        }
                    )
                }

                catch (error) {
                    console.log("Appwrite Service :: updatePost :: error", error);
                }


        }

        // 3. Delete Post
        // For deleting, we just need to give the document id
        // Go to delete document section of the docs: const promise = databases.deleteDocument('[DATABASE_ID]', '[COLLECTION_ID]', '[DOCUMENT_ID]');

        async deletePost(slug) {

            try {
               await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
               ) 

               // now here we donot want to return the whole document details when it is deleted, we can just return a bool value (true or false) specifying if it is deleted or not
               return true;
            }

            catch (error) {
                console.log("Appwrite Service :: deletePost :: error", error)

                // if we get an error, we return false
                return false;

                // this true and false, we will manage in the front-end component
            }

        }

        // 4. Getting a single post in return when we ask for it
        // look at the docs, in the "Get Document" section (https://appwrite.io/docs/references/cloud/client-web/databases)
        // Code: const promise = databases.getDocument('[DATABASE_ID]', '[COLLECTION_ID]', '[DOCUMENT_ID]');

        async getPost(slug) {

            try {
                return await this.databases.getDocument(
                    config.appwriteDatabaseId,
                    config.appwriteCollectionId,
                    slug

                    // Here we are returning the post if we get back that 1 post and return false in catch, if we get an error
                )
            }

            catch (error) {
                console.log("Appwrite Service :: getPost :: error", error)
                return false;
            }

        }

        // 5. Getting back all posts
        // Now if we want to get back all the posts from the database collection, we can simply go for "List Documents" but here we donot want that.
        // Here we want to return all those documents which pass a certain filter (say their status is acive or not)
        // So normal "List Documents" will not work here.
        // We will use querries here with getPosts (here we want only those posts whose status is active)
        // Querries docs: https://appwrite.io/docs/products/databases/queries
        
        async getPosts(myQuerries = [Query.equal("Status", "active")]) {
            // getPosts() - Here we are giving no arguments here as we want to get all posts initially here

            // Now this "Status" is a key, in appwrite inside db -> db collection -> Indexes, we have made the key "Status" for our project, so we insert it here
            // To use querries, you must always give keys and also make indexes in appwrite website, like we did it here.
            // Key link: https://cloud.appwrite.io/console/project-65c49a83e12193fb6bd4/databases/database-65c49d0b690b10db3b8a/collection-65c49de8980088f65ec6/indexes

            // getPosts(myQuerries = [Query.equal("Status", "active")]) - This means, get all documents and use a query filter and then only allow those documents to pass, whose status is active here. Finally, we will return those documents if all goes well, without any errors.


            try {
                // Standard template of code: 
                /* databases.listDocuments(
                        '[DATABASE_ID]',
                        '[COLLECTION_ID]',
                        [
                            Query.equal('title', ['Avatar', 'Lord of the Rings']),
                            Query.greaterThan('year', 1999)
                        ]
                    ); 

                    link: https://appwrite.io/docs/products/databases/queries
                */

                return await this.databases.listDocuments(
                    config.appwriteDatabaseId,
                    config.appwriteCollectionId,
                    // we could have written the querry statement here also instead of writing it at the top, 
                    /* like this:  [
                            Query.equal('title', ['Avatar', 'Lord of the Rings']),
                            Query.greaterThan('year', 1999)
                        ] */
                    // But since we wrote it on the top, we will just pass the variable here
                    myQuerries,

                    // Also we can add things like pagination and other stuff here
                )   
            }
            
            catch (error) {
                console.log("Appwrite Service :: getPostsQuery :: error", error)
                return false;
            }

        }

        // Making some more services / functionalities

        // 6. File Upload Service

        async uploadFile(file) {
            try {
                //  Docs: Storage -> Journeys -> Upload and DownLoad -> Create File
                // Link: https://appwrite.io/docs/products/storage/upload-download

                /* Sample code: 
                const promise = storage.createFile(
                    '[BUCKET_ID]',
                    ID.unique(),
                    document.getElementById('uploader').files[0]
                );
                */

                return await this.bucket.createFile(
                    config.appwriteBucketId,
                    // Now here we will use unique ID, for databases, we used slug values as unique ID but here, we will use ID.unique() as unique ID
                    // Notice at the top of the file, we imported ID from appwrite, so we will use it here
                    ID.unique(),
                    file, // we passed this argument in the uploadFile function, notice above

                )
            }
            catch (error) {
                console.log("Appwrite Service :: uploadFile :: error", error)
                return false;
            }

        }


        // 7. Delete File Functionality 
        // Docs: https://appwrite.io/docs/references/cloud/client-web/storage
        // Code:  const promise = storage.deleteFile('[BUCKET_ID]', '[FILE_ID]');

        async deleteFile(fileId) {
            // 🛑 Now when we upload a file, we will get a fileId (from file). We will pass this fileId to the featuredImage attribute when we upload the file and when we want to delete a file, we will use this same fileId to search and delete a file.
            
            try{

                await this.bucket.deleteFile(
                    config.appwriteBucketId,
                    fileId,
                )

                // donot return the file specifics when deleting the file, just return true if file is deleted.

                return true;
            }

            catch (error) {
                console.log("Appwrite Service :: deleteFile :: error", error)
                return false;
            }
        }

        // 8. getting file preview
        // docs: https://appwrite.io/docs/references/cloud/client-web/storage
        // code: const result = storage.getFilePreview('[BUCKET_ID]', '[FILE_ID]');

        // 🛑🛑 Now this method does not include promises as it is very fast, so we can skip the async-await and try-catch 

        getFilePreview(fileId) {
            return this.bucket.getFilePreview(
                config.appwriteBucketId,
                fileId
            )
        }     
}

// export default Service (Instead of doing this, do like below, i.e. make objects)
// Now exporting directly Service does not make much sense, we need to export it by taking out its object out of it. By this we can use all the methods that we have made in the objects when we export it.

const service = new Service()

export default service

// now since we made the service using "new" then make the constructor here too (it is mandatory here)
// Go to export class Service{} now (top ↑ 🆙)

// 7. After this is done, go to store / store.js
