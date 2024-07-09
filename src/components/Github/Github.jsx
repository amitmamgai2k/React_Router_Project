import React, { useEffect, useState } from "react";

function Github(){
    const [data,setdata] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/amitmamgai2k').then(res=>res.json()).then(data=>{
              setdata(data)
              console.log(data);
        })
    },[])
    return(
     <div className="text-center   bg-gradient-to-r from-gray-500 ... text-black text-3xl p-4"> Github Followers:{data.followers}
     <div className="grid grid-flow-col gap-10 w-auto justify-center item-center ">
     <img src={data.avatar_url} alt="Git Picture" width="200px" className="text-center  mx-4  rounded-full"/>
     <p className="text-black font-mono text-lg mt-20">  {data.bio}</p>
     </div>
     </div>
    )
}
export default Github;