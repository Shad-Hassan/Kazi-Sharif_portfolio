import { MdOutlineMail } from "react-icons/md";
import { PiWebhooksLogoThin } from "react-icons/pi";
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
const linkedIn = "https://www.linkedin.com/in/kazishaharairsharif/"
const Jubair = "/Jubair.PNG"


const ContactMe = ({ stroke }) => {
    const linkedInProfile = () => {
        window.open(linkedIn, "_blank")
    }
    const [contactMeRef, contactMeInView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });
    return (
        <>
            <motion.div className="w-full h-[100svh] rounded-xl flex flex-col text-moon-white"
                ref={contactMeRef}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={
                    contactMeInView ?
                        {
                            opacity: 1,
                            scale: 1,
                            transition: { type: "spring", stiffness: 260, damping: 20, duration: 1, ease: "easeInOut" }
                        }
                        : {}
                }>
                
                <div className="flex-none">
                    {/* Contact Header */}
                    <div className="h-[8rem] sm:h-[10rem] md: lg:h-[12rem] xl:h-[15rem] 2xl:h-[18rem] 
                flex flex-col gap-2 sm:gap-4 items-center justify-end pt-2
                ">
                        <h1 className="text-2xl sm:text-3xl md:text-3xl xl:text-5xl 2xl:9xl font-extrabold mt-[0.5rem] sm:mt-[0.75rem] md:mt-[1.5rem]" style={stroke}>
                            Contact Me
                        </h1>
                        <div className="flex items-center justify-center gap-2 my-1 text-sm md:text-md lg:text-lg 2xl:text-xl">
                            <MdOutlineMail />
                            <p className="cursor-pointer"><a href="mailto:Sharif.kazi@outlook.com">Sharif.kazi@outlook.com</a></p>


                        </div>

                        <div className="flex items-center justify-center my-1 gap-2 text-sm md:text-md lg:text-lg 2xl:text-xl">
                            <PiWebhooksLogoThin />
                            <p onClick={linkedInProfile} className="cursor-pointer">linkedin.com/in/kazishaharairsharif/</p>


                        </div>


                    </div>

                </div>

                {/* remaining section */}
                <div className="flex-1 w-full flex items-center justify-center flex-col lg:flex-row">

                    <div className="w-5/6 lg:w-1/3 h-1/2 lg:h-full 
                rounded-xl flex items-center justify-center text-justify font-montserratAlt">

                        <h2 className="text-sm md:text-lg lg:text-xl text-pretty">
                            I earned my Bachelor of Science in Computer Science and Information Systems from <span className="text-[#FFA500]">Oklahoma State University</span>, graduating in July 2021.
                            <br /><br />Passionate about software development, I stay updated with emerging technologies.I actively contribute to ongoing research on Micro Services and Machine Learning.
                        </h2>

                    </div>
                    <div className="w-full lg:w-1/2 h-1/2 lg:h-full 
                rounded-xl flex items-center justify-center text-center font-montserratAlt">

                    <img src={Jubair} className="w-1/2 md:w-2/5 lg:w-1/2 lg:ml-[10svw] 2xl:ml-[12.5svw] rounded-3xl shadow-xl ring-2 ring-lime-400"/>
                    
                    </div>

                   



                </div>


            </motion.div>
        </>
    );
};

export default ContactMe;