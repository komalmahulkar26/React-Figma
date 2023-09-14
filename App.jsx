import React from "react";
import "./index.css";
import Home from "./Components/Home"
import About from "./About us/About";
import Service from "./Servicess/Service";
import Blog from "./Blogss/Blog"
import Contact from "./Contact us/Contact"
import { Route,Router,  Routes } from "react-router-dom";

function App(){
 return(
<div className="bg-neutral-400  pt-5 w-full h-full">
  
 
 <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        
      </Routes>
</div>
  )
}

export default App