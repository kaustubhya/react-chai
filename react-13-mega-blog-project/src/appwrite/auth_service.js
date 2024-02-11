import config from '../config/config'

// Now if you look at the image of auth service from images folder, we will use the same code but with a few adjustments, this is to adjust the continous injection of UI and business logic together in our website.

import {Client, Account, ID} from "appwrite"

export class AuthService {

    // we will make client here

    // Our basic need is: When the object authServiceObj is made, this new Client will be made and then the account should be called (to utilize the resources efficiently)
    client = new Client();
    account;

    // When the object is called, then a constructor here is called automatically (we used the new keyword in the object to make and call the constructor, inside it we put all the methods)

    constructor() {
        // giving client reference
        this.client
            // now we use the setEndpoint and setEndProject methods
            .setEndpoint(config.appwriteUrl) // copied from config.js
            .setProject(config.appwriteProjectId);
            // now we have gotten values inside this.client

        // now adding account reference and passing client inside it

        this.account = new Account(this.client); 

        // refer the docs image, we did the same thing but with some modifications (we did it inside classes whenever a new object of it is created).
    }

        // Now let us create an account:
        // To create an account, follow this: 
        // const promise = account.create('[USER_ID]', 'email@example.com', '');

        // But we donot want dependencies with this. Whenever we want to change say to some other cloud, we don't want the above method

        // So we will create another method, and call all the appwrite services, this will make a wrapper and this will make us use any other backend as a service too, be it appwrite, firebase or any other.

        // We can either use promises or async here, we will use async here
        async createAccount({email, password, name}) {
            // we are using async to wait for the account to fetch client info
        // Now this is our own custom service, if we enter values inside it, it will make our account. We have thus made ourselves free from using a particular service. We can now use, any other service too other than appwrite.

            // Now this method here can fail, hence we use a try catch
            try {
                const userAccount = await this.account.create(ID.unique(), email, password, name);
                // We referred to this step from documentation:
                // const promise = account.create('[USER_ID]', 'email@example.com', '');
                
                // We used the create method here, also if you see the order of putting in attributes: '[USER_ID]', 'email@example.com', '' (this is password and other values you want to add), it is fixed, so to get "unique user ID".
                // So on the top, we have imported ID from appwrite, so use it with the unique() method to get unique user ID 

                if(userAccount) {
                    // call another method, say login, because we have email and password here also
                    return this.login({email, password});
                }

                else {
                    return userAccount;
                }

            } catch (error) {
                throw error;
            }
        } 

        // If we are asked to change to any other service (like FireBase), we will change the above constructor, keep the main async method and arguments inside it same, and alter the inner workings of this method according to that particular cloud's documentation.

        async login({email, password}) {
            try {
                const loginVar = await this.account.createEmailSession(email, password);
                // const promise = account.createEmailSession('email@example.com', 'password');
                // from docs
                // we can either put it in a variable and return or return it directly
                return loginVar;
            }
            catch(error) {
                throw error;
            }
        }

        // So here we defined the functionality as, if the userAccount exists, i.e. the user has already signed up, then go to login page directly
        
        // 2 functionalities (Sign-Up and Log-In done)

        // 2 more left (If we login, we have to tell which userName we have logged in as, and another functionality is logout)

        async getCurrentUser() {
            // no need to pass any arguments here, just ask account (line 13)
            // In docs (Account API -> Get Account) https://appwrite.io/docs/references/cloud/client-web/account
            // Use this method: const promise = account.get();
            // When we use this a promise is created and we will know if our account is made or not in the session, as it makes a session by default

            // Using try catch again

            try {
                return await this.account.get();

            }

            catch (error) {
                // throw error; 
                // instead of this throw error, we can do a custom error:
                console.log("Appwrite service :: getCurrentUser :: error", error);
                // Here error is inside getCurrentUser which is inside Appwrite service
                // This is the case when we were unable to connect to appwrite
            }

            // now what if the userAccount does not exist, then either we can do an if-else in the try block and return a promise and null, or return null outside saying userAccount is not found
            return null;
        }

        // Now logout aka delete session functionality

        // Docs line method: const promise = account.deleteSession('[SESSION_ID]');

        async logout() {

            try {
                // await this.account.deleteSession('current')
                // deleting this current session (1)

                // but we will use:
                await this.account.deleteSessions();
                // Deletes all sessions from everywhere
            }

            catch (error) {
                console.log("Appwrite service :: logout :: error", error);

            }
        }
    

}


// Now since we have made this class, and we have exported it, the ones who have imported this class will have to make objects from it and then only he will be able to use all the methods

// So a better approch is for us to make an object (having all the methods) and export it, this will make the job of the person importing this object much easier as it will already have all the methods inside that object

const authServiceObj = new AuthService();

// now that we have made this object, we will make client and account now (as all the methods are inside the client only) so make these 2 properties (see inside AuthService ⬆️)

// Now we have made the object and included all functionalities in it, just now use .login, .logout, .getCurrentUser etc. when you import this class object
// Also in future if we change our backend service, say firebase we will see changes in this file only and will not have to make changes everywhere else

export default AuthService

// 🛑🛑🛑 THIS FILE CODE IS THE FULL AUTH SERVICE FOR APPWRITE, SAVE FOR FUTURE