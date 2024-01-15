import { MdOutlineMail } from "react-icons/md";
import { PiWebhooksLogoThin } from "react-icons/pi";
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import MailForm from "./MailForm";
const linkedIn = "https://www.linkedin.com/in/kazishaharairsharif/"
const ContactMe = ({ stroke }) => {
    const linkedInProfile = () => {
        window.open(linkedIn, "_blank")
    }
    const [mailMeRef, mailMeInView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });
    return (
        <>
            <div className="w-full h-[100svh] flex flex-col lg:flex-row rounded-xl text-white font-montserratAlt">

               
               
               
                {/* Info div */}
                <div className="w-full lg:w-[50svw] h-[25svh] lg:h-[100svh] rounded-xl
                flex items-center justify-center">


                    <div className="my-4 xl:my-8 2xl:my-16 lg:mt-[2em] md:px-4 xl:px-6 2xl:px-12">
                        <h1 className="text-2xl sm:text-3xl md:text-3xl xl:text-5xl 2xl:9xl font-extrabold text-center" style={stroke}>
                            Contact Me
                        </h1>

                        <div className="flex items-center justify-center gap-2 my-2 text-xs sm:text-sm md:text-md lg:text-lg 2xl:text-xl xl:my-4 2xl:my-8">
                            <MdOutlineMail />
                            <p>Sharif.kazi@outlook.com</p>


                        </div>

                        <div className="flex items-center justify-center gap-2 my-2 text-xs sm:text-sm md:text-md lg:text-lg 2xl:text-xl xl:my-4 2xl:my-8">
                            <PiWebhooksLogoThin />
                            <p onClick={linkedInProfile} className="cursor-pointer">linkedin.com/in/kazishaharairsharif/</p>


                        </div>



                    </div>


                </div>




                {/* Form div */}
                <div className="w-full lg:w-[50svw] h-[75svh] lg:h-[100svh] rounded-xl border border-yellow-500">
                    <motion.div className="w-full"
                        ref={mailMeRef}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={
                            mailMeInView ?
                                {
                                    opacity: 1,
                                    scale: 1,
                                    transition: { type: "spring", stiffness: 260, damping: 20, duration: 1, ease: "easeInOut" }
                                }
                                : {}
                        }>
                        <div className="w-full rounded-xl flex items-center justify-center">

                            <div className="w-3/4 border border-fuchsia-500 rounded-xl">
                                <MailForm></MailForm>
                            </div>

                            

                            

                        </div>


                    </motion.div>

                </div>





            </div>
        </>
    );
};

export default ContactMe;