# [React](https://react.dev/) + [Vite](https://vitejs.dev/) Project Setup Guide

![React logo](https://i.makeagif.com/media/11-21-2022/imisbt.gif)

------

## Folder Structure for React + REST API
```
| [ROOT]
  | node_modules			[DO NOT MODIFY – managed by npm]

  | fonts				[store fonts here]

  | public				[served as root directory on node server run]
    | img				[folder added for image media]

  | rest				[REST API STUFF (in php)]
    | v1				[REST API version]
      | controllers			[folder for storing controllers per DB tablemodel]
        | Home			        [folder for storing API files for Home page (connected to Home.php model)]
          | active.php			{table row active status update}
          | create.php		        {table row insert/create}
          | delete.php			{table row delete}
          | read.php			{table retrieve}
          | search.php		        {table row search}
          | update.php		        {table row update}
          | home.php			{connects to other db table transactions in the same folder}

      | core			        [folder for storing common DB stuff]
        | Database.php		        {stores connection info for DB (dbms credentials and db name stored here)}
        | Encryption.php		{reusable encryption functions}
        | functions.php		        {reusable db functions in php for REST}
        | header.php			{php header for api access}
        | Response.php		        {handles returning http code responses}
        | upload-photo.php		{handles php image file upload to public/img}

      | jwt				[folder for storing JWT (JSON Web Token) stuff]

      | models			        [folder for storing DB table models (per table or view being utilized)]
        | Home.php			{stores SQL queries and is used by corresponding controller}

      | notification			[folder for notification email mailer (i.e. PHPMailer) and corresponding templates]

      | .htaccess			{add stuff for rewriting page links here}

  | src				        [included with vite-react – required for react js]
    | App.jsx			        {modify this to add routes to connect react pages}
    | index.css			        {css and Tailwind imports here}
    | main.jsx			        [DO NOT MODIFY - default vite-react]

    | components			[for storing react js components, partials & pages]
      | helpers			        [folder added for global values]
        | functions-general.jsx		{global values here}
        | Form-Input.jsx		{reusable inputs here here}
        | queryData.jsx		        {helper for converting db data entries to json format}

    | custom-hook			[for storing custom-hook files]
        | useQueryData.jsx		{connects with queryData and tanstack/react-query to retrieve db table rows}
        | useSystemLogin.jsx		{for handling logins and creating login tokens on local storage (requires localstorage function to be at functions-general)}
        | useUploadPhoto.jsx		{connects to upload-photo.php}

      | pages			        [folder added to store pages]
        | Home			        [folder for Home page]
          | Home.jsx			{Home page jsx}
          | data.js			{placeholder primitive db using json format array}
        | Menu			        [folder for Menu page]
          | Menu.jsx			{Menu page jsx}

      | partials			[folder store partials of pages]
        | modals			[for reused modals]
        | spiners			[for reused spinners]
        | svg			        [for reused svg files (saved as jsx but contains svg element)]
        | Header.jsx			{header partial}
        | Footer.jsx			{footer partial}

    | store		                [for storing react store context (necessary to connect all 3 files together)]
      | StoreAction.jsx		        {exports setters for variables in StoreContext (accessed through dispatch)}
      | StoreContext.jsx		{contains StoreContext, StoreProvider wrapper, and store variables (accessed through store)}
      | StoreReducer.jsx		{contains switch condition to set state of store variables}

```


# Setup Instructions

## Setup React + Vite
```
npm create vite@latest .
```

1. Select Framework: **React**
2. Select Variant: **JavaScript**

## Setup React + Vite (One line version)
```
npm create vite@latest . -- --template react
```

## Install and Initialize TailwindCSS

###### *Note 1: "npm install" and "npm i" are the same*
###### *Note 2: multiple npm packages can be installed at the same time like the example below*
```
npm install -D tailwindcss postcss autoprefixer
```

```
npx tailwindcss init -p
```
## Install React Router DOM

```
npm install react-router-dom
```

## Configure TailwindCSS
- Remove predefined CSS inside src/index.css and add the following:

```
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base{
}
@layer components{
}
@layer utilities{
}
```

- Alternatively, use the following command (for linux and git bash)
```
cat > ./src/index.css << EOF
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base{
}
@layer components{
}
@layer utilities{
}
EOF

```

## Modify Tailwind Config Content Value

```
// tailwind.config.cjs
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Edit PostCSS Config
```
// postcss.config.cjs
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

## Cleanup Vite Defaults
- Delete the default Vite assets like assets folder {./src/assets} & app.css.
- Add empty App.jsx contents:

```
// src/App.jsx
function App() {
  return (
    <>
    </>
  );
}
export default App;
```

## Sample of App.jsx using React Router
```
// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* Page Example **/}
        <Route path="/home" element={<Home />} />
        {/* Not Found Page Uses **/}
        <Route path="*" element={<h2>Not Found</h2>} />
      </Routes>
    </Router>
  );
}
export default App;
```
## Run the Project
```
npm run dev
```
## Additional Notes
### ES7+ React/Redux/React-Native snippets (VSCode)
- Install the ES7+ React/Redux/React-Native snippets extension by dsznajder.
- Use shorthand rafce for creating a React functional component.

```
// Example of 'rafce' snippet output
import React from 'react';

const Home = () => {
  return (
    <div>Home</div> {/* Insert HTML elements inside the div */}
  );
}
export default Home;
```

## Using React Router DOM
- Router, Routes, Route
```
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<h2>About</h2>} />
        <Route path="/services" element={<h2>Services</h2>} />
      </Routes>
    </Router>
  );
}
export default App;
```
- Link
```
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
    </nav>
  );
}
export default NavBar;
```

## functions-general.jsx
```
// src/helpers/functions-general.jsx
export const baseImgUrl = "http://localhost/react_intro/public/img/"; // Hardcoded to localhost
export const baseImgUrl = "../../img"; // Relative path to img folder
```

------

## Dynamic Page Titles [(Reference)](https://www.youtube.com/watch?v=M-Cckbc0hKA)
### ADD THE CODE BELOW TO functions-general.jsx:
````
// for page title
export const PageTitle = (newTitle) => {
  return (document.title = newTitle);
};
````

### CALL IT PER PAGE LIKE BELOW:
````
PageTitle("Blog - Blogee Website");
````


------

# Other Node js npm packages
## List of Packages
- Here are some additional Node js packages that might be useful

### [React Icons](https://www.npmjs.com/package/react-icons) (for importing various icon libraries)
```
npm install react-icons --save
```

### [Formik](https://www.npmjs.com/package/formik) (for Forms)
```
npm install formik
```

### [Yup](https://www.npmjs.com/package/yup) (for Form validation)
```
npm install yup
```

### [Tanstack React Query](https://tanstack.com/query/v3/docs/framework/react/overview) (for db query)
```
npm install @tanstack/react-query
```

### [React Markdown](https://www.npmjs.com/package/react-markdown) (for converting markdown to html-jsx elements)
```
npm install react-markdown
```
> Reference for Markdown [Markdownguide.org](https://www.markdownguide.org/cheat-sheet/)

### [React Slick](https://react-slick.neostack.com/docs/get-started) (Slick Slider)
```
npm install react-slick slick-carousel --save
```
> [Original Slick Slider website with demos & documentation](https://kenwheeler.github.io/slick/)

### [React pdfobject](https://www.npmjs.com/package/react-pdfobject) (for PDF Modal)
````
npm install react-pdfobject
````

### [React Modal Image](https://www.npmjs.com/package/react-modal-image) (for Image Modal lighter than Lightbox)
````
npm install react-modal-image
````

-----

# Bulk Install and Maintenance npm commands

## Bulk Install commands
### Want to Install all of the packages mentioned above?
Command:
> npm i -D tailwindcss postcss autoprefixer react-router-dom react-icons formik yup @tanstack/react-query react-slick slick-carousel react-pdfobject react-modal-image react-markdown

### Install Node packages used until react portfolio project
Command:
> npm i -D tailwindcss postcss autoprefixer react-router-dom react-icons formik yup @tanstack/react-query --save

## npm outdated & update
### Check outdated Node packages
Command:
> npm outdated

### Update Node packages
Command:
> npm update

-----

# Setup React + Vite with packages for Router, Tailwind CSS, React icons, Formik, Yup, React-query
Command: 
> npm create vite@latest . -- --template react && npm i -D tailwindcss postcss autoprefixer react-router-dom react-icons formik yup @tanstack/react-query --save

-----

# Final Notes
- This README provides an example structured approach to setting up a React project with Vite, TailwindCSS, and React Router DOM.
- Follow the instructions carefully to ensure proper setup and configuration.
- Refer to the folder structure to understand where to place your files and components.


- You can save this content as `README.md` in the root directory of your GitHub repository. This guide provides a clear and comprehensive setup process for a React project using Vite.


- Alternatively clone this repository and use the [`"react-tailwind-boilerplate"`](https://github.com/FBS-OJT-031/React-Install.github/main/react-tailwind-boilerplate) folder as your starting point