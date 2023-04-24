import aboutImage from "../assets/images/about-image.png";
import Button from "react";
import { Link } from "react-router-dom";

export const About = () => {
    const handleClick = () => {
        window.open('https://ashishyportfolio.netlify.app/', '_blank');
      };
    

    return (
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium">About me</h2>
                    <p className="text-lg">
                   Hello my self ashish yadav.

I am a final year B.E CSE student studying in VTU with excellent academic records. I am proficient in JAVA, Databases, Testing,React. I am working in Krititma Iq Solutions As a Frontend developer . This website is made by Ashish Yadav (Myself) by using React js and TailwindCSS. Please click  on the link below to get the link to my portfolio.

                    </p>
    
                    <button onClick={handleClick} className="bg-yellow-400 hover:bg-yellow-500 text-bold 2xl mt-5 w-40 h-10 flex items-center justify-center text-lg">Live portfolio</button>
                    
                   
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="" className="w-[400px] h-[400px] object-cover" />
                </div>
            </div>
        </div>
    )
}