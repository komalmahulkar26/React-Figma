import React from "react";
import Navbar from "../About us/Navbar";
import Dummy2 from "./Dummy2"
import Here from "./Here"
import Here1 from "./Here1";
import Subscribe from "../About us/Subscribe";
import Filter from "../About us/Filter"

function News (){
    return(
        <div>
            <Navbar/>
<div className="bg-white   w-[900px] ml-96 pt-2 pb-16">
    <h1 className="text-2xl font-bold text-black mt-10 ml-[350px]">Lastest   News</h1>
    <h1  className="text-2xl font-bold ml-[380px] text-sky-600">Updates</h1>
    <p className="ml-72 mt-3">Lorem Ipsum is simply dummy text of the </p>
    <p className="ml-96"> printing .</p>
    <input placeholder=" 🔍  search" className="w-60 h-8 ml-80 mt-5 rounded- bg-slate-200 text-black "/>

    <div className=" flex justify-between w-[800px] ml-10 mt-10">
        <input className="rounded-full  text-black pl-5 w-32 h-10 bg-slate-200" placeholder="loream lpsum"/>
        <input  className="rounded-full  text-black pl-5 w-32 h-10 bg-slate-200"  placeholder="loream lpsum" />
        <input   className="rounded-full  text-black pl-5 w-32 h-10 bg-slate-200" placeholder="loream lpsum"/>
        <input className="rounded-full  text-black pl-5 w-32 h-10 bg-slate-200"   placeholder="loream lpsum"/>
        <input className="rounded-full  text-black pl-5 w-32 h-10 bg-sky-600"   placeholder="loream lpsum"/>
    </div>
</div>
<Dummy2/>
<Here/>
<Here1/>
<Subscribe/>
<Filter/>
        </div>
    )
}
export default News