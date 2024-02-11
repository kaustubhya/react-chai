const config = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    // Here this is production based techniques. 
    // We write this in the form of Object: Key-Value pairs
    // Also we make sure that the env variables are in the form of string (typecasted here). Because in the older way, sometimes they might not be treated as string if there were no letters, so here we specifically typecasted it into String form.

    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),

    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),

    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),

    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),

}

export default config
// Now we will make a folder called Appwrite where we do all the work regarding Appwrite
// 5. Go to Appwrite folder for this and go to auth_service.js
