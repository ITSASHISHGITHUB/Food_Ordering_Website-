


export const Footer = () => {
    
    return (
        <footer class="bg-gray-800">
            <div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Contact Me</h2>
                    <ul class="text-gray-300">
                        <li class="mb-4">
                            <a href="#" className=" hover:underline">Mail Id <br/> (Itsashishyadav677@gmail.com)</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" className="hover:underline">Phone-Number <br/> (+91-6360431631)</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Contact Me</h2>
                    <ul class="text-gray-300">
                        <li class="mb-4">
                            <a href="https://www.linkedin.com/in/ashishyadav677/" className="hover:underline/">Linkedin <br/>
                            </a>
                        </li>
                        <li class="mb-4">
                            <a href="https://www.facebook.com/Itsyadu" className="hover:underline">Facebook</a>
                        </li>
                        <li class="mb-4">
                            <a href="https://www.instagram.com/ashish_ydvv21/" className="hover:underline">Instagram</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between">  


                <marquee Text="white" behavior="scroll" direction="right">This Website is made by Ashish Yadav with ❤️</marquee>

                
         
                
            </div>
        </footer>
    )
}