import { useState } from "react"

// id ,size,x,y,opacity , animationDuration

export const StarBackground = () =>{
    const [stars,setStars] = useState([]);

    const generateStars = ()=>{
        const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);
        const newStars = [];

        for(let i=0;i<numberOfStars;i++){
            newStars.push({
                id:i,
                size:Math.random()*3+1,
                x:Math.random()*100,
                y:Math.random()*100,
                opacity:Math.random()*0.5+0.5
            })
        }
    }
    return <div></div>
}