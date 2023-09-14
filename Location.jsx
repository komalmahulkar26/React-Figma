import React from "react";
import Image from "../image/Vtr 1.png"
import image from "../image/Ellipse 3.png"
import image1 from "../image/Activity.png"
import image2 from "../image/Webside.png"
import image3 from "../image/Ellipse 4.png"
import image4 from "../image/focus.png"



function Location (){
    return(
        <div>
            <div className=" bg-white ml-96 h-[350px] w-[900px]  ">
<img  className=" " src={Image}/>
      <div className="flex">
       <div> <img  className="ml-5"src={image} /></div>
        <div className="w-[550px]">
          <h3 className="ml-8">Lorem Ipsum is simply dummy text</h3>
          <p  className="ml-8">Lorem Ipsum is simply dummy text</p>
          
          <h1 className="font-bold text-2xl mt-5 text-black"> <span className="text-sky-700">Loream lpsum</span> is simply dummy text of printing.</h1>
          <p className="mt-5"> KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android & IOS.</p>
        </div>
    
        <div className="">
          <img src={image1} />
        </div>
      </div>

      <div className="flex mt-32">

        <div className="">
          <img   src={image2} />
        </div>
        <div className=""> <img  className="ml-5" src={image3} /></div>
      <div>
          <h3 className="ml-8">Lorem Ipsum is simply dummy text</h3>
          <p className="ml-8">Lorem Ipsum is simply dummy text</p>

          <h1 className="font-bold text-2xl mt-5 text-black"> <span className="text-sky-700">Loream lpsum</span> is simply dummy <br />text of printing.</h1>
          <p className="mt-5"> KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile<br /> and web
            applications and website builders measuring dozens of<br /> completed
            projects. We build and develop mobile applications for several<br /> top
            platforms, including Android & IOS.</p>
        </div>

      </div>
      
        <div className="flex mt-40 ml-5">
        <div className=""> <img  className="ml-5"src={image} /></div>
          <div className="">
            <h3 className="ml-8">Lorem Ipsum is simply dummy text</h3>
            <p className="ml-8">Lorem Ipsum is simply dummy text</p>
          
      
        <div className="w-[450px]">
        
          <h1 className="font-bold text-2xl mt-5 text-black"> <span className="text-sky-700">Loream lpsum</span> is simply dummy text of printing.</h1>
          < p className="mt-5"> KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android & IOS.</p></div></div>

        <div className="">
          <img className="w-[500]" src={image4} />
        
        </div>
        
      </div>
    
    </div>
  
        </div>
    )
}
export default Location