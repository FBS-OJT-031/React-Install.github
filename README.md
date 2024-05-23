# React + Vite Project Setup

## Folder Structure

<pre>
| [ROOT]
| node_modules [DO NOT MODIFY – managed by npm]
| public [served as root directory on node server run]
| img {folder added for image media}
| src [included with vite-react – required for react js]
|   | App.jsx [modify this to add routes to connect react pages]
|   | index.css [css and Tailwind imports here]
|   | main.jsx [DO NOT MODIFY - default vite-react]
|   | components {added to store react js components, partials & pages}
|   | helpers {folder added for global values}
|   |   | functions-general.jsx {global values here}
|   | pages {folder added to store pages}
|       | Home
|       |   | Home.jsx
|       | data.js {sample data to retrieve data from | see sample below}
|       | Menu
|       |   | Menu.jsx
|   | partials {folder store partials of pages}
|       | Header.jsx {header partial}
|       | Footer.jsx {footer partial}
</pre>


# Setup Instructions

## Setup React
```
npm create vite@latest .
```

1. Select Framework: **React**
2. Select Variant: **JavaScript**

## Install and Initialize TailwindCSS

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
```

- Alternatively, use the following command (for linux and git bash)
```
printf "@tailwind base;\n@tailwind components;\n@tailwind utilities;" > ./src/index.css
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
- Delete the default Vite assets like assets folder & app.css.
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
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<h2>About</h2>} />
        <Route path="/services" element={<h2>Services</h2>} />
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
## Final Notes
- This README provides a structured approach to setting up a React project with Vite, TailwindCSS, and React Router DOM.
- Follow the instructions carefully to ensure proper setup and configuration.
- Refer to the folder structure to understand where to place your files and components.

### Other npm

- [React Icons](https://www.npmjs.com/package/react-icons)
```
npm install react-icons --save
```

- [Formik](https://www.npmjs.com/package/formik)
```
npm install formik
```

- [Yup](https://www.npmjs.com/package/yup)
```
npm install yup
```

- [Tanstack React Query](https://tanstack.com/query/v3/docs/framework/react/overview)
```
npm install @tanstack/react-query
```

- [React Markdown](https://www.npmjs.com/package/react-markdown)
```
npm install react-markdown
```

- [React Slick](https://react-slick.neostack.com/docs/get-started)
```
npm install react-slick slick-carousel --save
```

https://www.markdownguide.org/cheat-sheet/


> 
You can save this content as `README.md` in the root directory of your GitHub repository. This guide provides a clear and comprehensive setup process for a React project using Vite.














































