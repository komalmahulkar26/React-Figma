import React from "react";
// import image1 from "../image/Group 73.png"
import image2 from "../image/map.png"
import Navbar from "../About us/Navbar";
import Form from "./Form";
import About from "../About us/Filter";
// import Navbar from "../Components1/Navbar";


function Map(){
    return(
        <div>
            <Navbar/>
            <div className="bg-white   w-[900px] ml-96 pt-2 pb-10">
            <div className="flex">   <div className="ml-28 mt-20"> <h1 className="font-bold text-2xl">Let's collaborate</h1>
                <p>loream lpsum is simply text of the <br/>printing.</p></div>

             <div>   <img src={image2} className="w-80 h-52 ml-28 mt-5"/></div></div>
                <div className="flex">
<div className="ml-28 mt-14"> <h1>Follow us</h1>
<div className="flex">
<div className="bg-white w-7  mr-2 h-8 rounded-full  shadow "> <i className="fa-brands fa-facebook pl-2 pt-2"></i></div>
                   <div className="bg-white w-7 shadow  mr-2 h-8 rounded-full ">  <i className="fa-brands fa-twitter pl-2 pt-2"></i></div>
                   <div className="bg-white w-7   mr-2 h-8 rounded-full  shadow ">   <i className="fa-brands fa-instagram pl-2 pt-2"></i></div>
                   <div className="bg-white w-7   mr-2 h-8 rounded-full shadow  ">   <i className="fa-brands fa-linkedin pl-2 pt-2"></i></div>
                   </div></div>

                   <div className="w-[1px] bg-gray-500 h-14 mt-14 ml-12"></div>
                   <div className="ml-16 mt-20">

                    94345765432
                   </div>

                   <div className="w-[1px] bg-gray-500 h-14 mt-14 ml-12"></div>
                   <div className="ml-16 mt-14"><p>but also the leap into electronic <br/>typesetting.</p></div>
                </div>
            </div>
            <Form/>
            <About/>
        </div>
    )
}
export default Map