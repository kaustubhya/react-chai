# REACT_APP_APPWRITE_URL = "test environment"
# REACT_APP_APPWRITE_URL = test-environment
# This method of writing is also correct.
# These were the steps when you made the app using create react app

# For Vite:
VITE_APPWRITE_URL = "enter url from appwrite website"

VITE_APPWRITE_PROJECT_ID = "enter key from appwrite website"

VITE_APPWRITE_DATABASE_ID="enter key from appwrite website"

VITE_APPWRITE_COLLECTION_ID="enter key from appwrite website"

VITE_APPWRITE_BUCKET_ID="enter key from appwrite website"

# While it is not important to write all this in capital but we can easily spot them so, please do write them in uppercase
# Now go to Appwrite -> Login -> Create new project -> Once it is created, go to settings of that project (on bottom LHS) -> Copy the API endpoint -> paste inside appwrite url (removed "test environment")
# Copy project Id from Appwrite too and paste it here

# Now go to Auth -> Settings -> See if all auth methods are enabled or not

# Now go to Databases -> Create a Database -> Copy the database ID (on top beside the name of db) and paste it here

# Now as inside db there are collections (tables), similarly in our blog website there will be articles inside blogs
# So we will make collections now (inside our db) -> Copy that collection id and paste it here

# 🛑🛑 Now inside collections, go to settings ->  Permissions -> All users -> Check all boxes of Create, Read, Update, Delete -> Click Update button

#  Now inside collections, go to documents (Now there are many ways to create documents, here we will use GUI method, for that we will add values to already created structures).

#  Now inside collections, go to attributes -> Create Attribute -> Fill the following:

# Attribute key (fill: "Title"), Attribute Type -> String, Size -> 255 (we can give any other size too). Check the required box and click "create".
# Repeat this step and make the following keys: 
# 2. Content
# 3. Featured-Image
# 4. Status
# 5. User-ID

# Now on same collections, we will make Indexing to enable filtering, for that, go to collections -> Indexing -> Create Index -> name it as Index key: "status" -> Index type (key) -> Attribute (Status) -> Order (ASC i.e. Ascending)

# Finally for Bucket ID, Go to Storage (on LHS) -> Create Bucket -> Name it "Images" -> Copy the bucket ID and paste it above

# Now go to Bucket Settings -> Permissions -> Choose All Users from drop down -> Select Create, Read, Update, Delete and Click Update

# Donot ship this file to github, hence we push this file to git-ignore.

# Go to fork github commit icon on LHS, there on LHS, choose the .env file. Right click -> Add to .gitignore

# We see its color is also changed a bit.

# For the sake of students, sir has made a ".env.sample" file for us and pushed it to github. 
# It is exactly the same content as the .env file, for us to use it if we are noobs. But we here need not make that file. 

# 3. Go to App.jsx 