Configuring Tailwind for vite:

Go to Tailwindcss.com > Get Started > Installation > Framework Guides > Vite

Follow from step 2

- npm install -D tailwindcss postcss autoprefixer
(-D is for Dependencies and DevDependencies in package.json file)
- npx tailwindcss init -p

Go to the newly created tailwind.config.js file,
inside content[], paste this code:
content["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",]
This array searches the content inside index.html file and src folder   

Now add these commands on the top of index.css file:

@tailwind base;
@tailwind components;
@tailwind utilities;

DO 'npm run dev' now

To confirm tailwindcss is running, alter the app.jsx file

Props:
Props make the react component reusable.

In react separate the files based on what they are doing, not on the basis pf how they look (like we did earlier in HTML, CSS, JS where we separated the 3 files of HTML, CSS, JS of a single project).

We can call a component multiple times.

Use PROPS to pass values from one component to another.
PROPS means PROPERTIES

