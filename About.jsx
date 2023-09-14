import React from "react";
import Navbar from "./Navbar";
import Text from "./Text";
import Dummy from "./Dummy";
import Team from "./Team";
import Subscribe from "./Subscribe"
import Filter from "./Filter";
 import image from "../image/Rectangle 16.png" 
 import image1 from "../image/Rectangle 17.png"
 import image2 from "../image/Vector 3.png"
 import image3 from "../image/Rectangle 18.png"
 import image4 from "../image/Rectangle 19.png"

function Photos(){

    return(
        <div>
             <Navbar/>
            <div className="bg-white   w-[900px] ml-96 pt-2 pb-">
               <div className=""> <div className="flex">
                    <img  className="w-32 h-32 mt-36 ml-14 "src={image}/>
                    <img className="w-36 h-52 mt-16 ml-10  " src={image1}/>
                 <div className="ml-16 mt-28 ">  <p className="font-semibold mt- text-blue-500">About Us</p>
                    <h1 className="text-2xl font-bold text-black">Lorem Ipsum is simply <br/> dummy text of the printing. </h1>
                    <p>Lorem Ipsum is simply dummy text of the printing <br/>and typesetting industry. Lorem Ipsum has been <br/> the industry's</p></div>
                    <img  className="relative left-[61px] bottom-28"src={image2}/> 
                </div>
                <div className="flex pb-10">
                    <img  className="w-60 ml-28 h-52" src={image3}/>
                    <img    className="w-64 ml-14 h-52" src={image4}/>
                </div>  </div>
            </div>
           
            <Text/>
            <Dummy/>
            <Team/>
            <Subscribe/>
            <Filter/>
        </div>
    )
}

export default Photos