import React, {useState, useEffect} from "react";
import pic1 from "../images/pic1.jpeg";
import pic2 from "../images/pic2.jpeg";
import "../style/slideshow.css"

const Images = [
    pic1,pic2
];

const Slideshow = ()=>{
    const [index, setIndex] = useState(0);
    
    useEffect(()=>{
        const interval = setInterval(()=>{
            setIndex(prev => (prev +1) % Images.length)
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return(
        <div>
            <img  
            className="slideshow"
            src = {Images[index]}
            alt = {`Slide ${index + 1}`} />
        </div>
    )
};

export default Slideshow;