import React, {useState, useEffect} from "react";
import pic1 from "../images/pic1.jpeg";
import pic2 from "../images/pic3.jpg";
import pic3 from "../images/pic3.jpg";
import pic4 from "../images/pic4.jpeg";
import pic5 from "../images/pic5.jpeg";
import pic6 from "../images/pic16.jpg";
import pic7 from "../images/pic13.jpeg";
import "../style/slideshow.css"

const Images = [
    pic1,pic2,
    pic3,pic7,
    pic5,pic6,pic4
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