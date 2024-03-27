import Header from "./Header/Header";
import Footer from "./Footer/Footer";

// making some more imports and exports
import Container from "./container/Container";
import Logo from "./Logo";
import LogoutBtn from "./Header/LogoutBtn"
import Button from "./Button";
import Input from "./Input";
import RTE from "./RTE";
import Select from "./Select";
import Signup from "./SignUp";
import Login from './Login'
import PostForm from './post-form/PostForm'
import PostCards from './PostCards.jsx'

import AuthLayout from './AuthLayout.jsx'
// We can call it either AuthLayout or protected, whatever we want. Both are same.


// Export them together as an object

export {
    Header,
    Footer,
    Container, 
    Logo,
    LogoutBtn,
    // 18. Going back to Header.js

    // Adding this for Login.jsx
    Input,
    Button,
    // after adding and importing RTE
    RTE,
    Select,

    // In pages building
    Signup,
    Login,
    PostForm,
    PostCards,
    AuthLayout
}

// 10. Now go to App.jsx
