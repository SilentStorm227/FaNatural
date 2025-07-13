import React, {useState, useEffect} from "react";

const Images = [
    pic1.jpeg,
    pic2.jpeg
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
            src = {Images[index]}
            alt = {'Slide ${index + 1}'} />
        </div>
    )
};

export default Slideshow;