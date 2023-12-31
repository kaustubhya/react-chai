What is a Bundler?
A Bundler is a program which combines several JS files and compiles them into one single file. (eg Vite)

React is the main library and it has the following sub-libraries:
1. React-dom (Use with react to create web applications)
2. React-native (Use with react to create mobile applications)

npx - node package executor (this is an executor)

create-react-app: This is a utility (software)

Traditional way to create a react app (*"npx create-react-app (app-name)"*)

Navigating through a boiler-plate react project:

1. Go to package.json file, this file is the entry point to start navigating through our react project

(see video 2 from (15.30) to see about each line in package.json file)

[link](https://www.youtube.com/watch?v=k3KqQvywToE&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&index=2)

'ls' in mac and linux
'dir' in windows

Do *"npm run start"* to run your react app.

For production purposes, use *"npm build start"*

Here we will get a build folder which gets shipped out when we send out our app for production purposes.

Alternate way to create our react projects: "using vite"
"create-react-app" method is too bulky, hence some people use vite. 

do: *"npm create vite@latest"*

and fill the following fields out:
- project name
- select a framework (select react, use arrow keys to navigate and then press enter)
- select a variant (choose javascript)

Rest most of it is same (for running also)

The vite method does not have "node modules" folder.

See (22.37) for this method's package.json file's discussion 
[link](https://www.youtube.com/watch?v=k3KqQvywToE&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&index=2)

Before running this vite method, install the node modules folder:
do "npm i" or "npm install"
i -> install

now do: " npm run dev"

ReactDOM is like a prestructure (like main tree at the top and the smaller trees below that and so on)

"React-scripts" file in package.json helps us in loading the html code in index.jsx/main.jsx onto the browser.

In vite form (see the index.html page) there they have loaded the react scripts file in the traditional way.

Use *.jsx* to name files while working in vite. 

Also start the function and file name with an *uppercase* letter.
(if you get an error, reload the window, go to command palette and press reload)(in both react and vite) 

To return multiple html tags and react components, enclose it under <> and </>, which are called *fragments*.

If there is an html code being returned with the javascript, use ".jsx", otherwise for just normal plain javascript return, use ".js".