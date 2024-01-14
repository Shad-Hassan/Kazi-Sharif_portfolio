import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
const javaDev = "/javaDev.png"
const linkedIn = "https://www.linkedin.com/in/kazishaharairsharif/"
const proPic = "/CaptainJubo.png"




const Intro = ({ stroke }) => {
    const linkedInProfile = () => {
        window.open(linkedIn, "_blank")
    }

    const [devRef, devInView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    const [textRef, textInView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    return (
        <>
            <div className='w-full h-[100svh] rounded-xl flex flex-col lg:flex-row'>


                {/* Text Div */}
                <div className="w-full lg:w-[50svw] h-[50svh] lg:h-[100svh] 
                rounded-xl flex items-center lg:pt-0 lg:items-center justify-center text-center font-montserratAlt">

                    <motion.div ref={textRef} className="w-3/4 h-1/2 rounded-xl"
                        initial={{ y: -20, opacity: 0 }}
                        animate={
                            textInView ?
                                {
                                    y: [null, -20, 0, -10, 0],
                                    opacity: [null, 0, 1, 0.8, 1],
                                    transition: { duration: 1, ease: "easeInOut" },
                                } :
                                {}
                        }>


                        <div className="mt-[3rem] lg:mt-[6rem]">

                            <h1 className="text-3xl md:text-3xl xl:text-5xl 2xl:9xl font-extrabold" style={stroke}>
                                Kazi Jubayer Sharif
                            </h1>

                        </div>

                        <div className="mt-[1.5rem] lg:mt-[3rem] md:px-4 xl:px-6 2xl:px-12">

                            <p className="text-md md:text-lg xl:text-xl 2xl:text-3xl font-semibold text-moon-white text-justify">
                                I am a professional <span className='text-scarlet-red'>Java Developer</span>. I specialize in deploying robust backend solutions. My toolkit includes proficiency in Spring Boot, Microservices, Kafka and more.
                            </p>
                        </div>


                        <div className="h-[3rem] mt-[3rem] flex items-center justify-center">


                            <div onClick={linkedInProfile} className='cursor-pointer w-3/4 md:w-1/2 xl:w-[40%] 2xl:w-1/3 py-[6px] px-2 lg:px-0 
                                rounded-2xl flex items-center justify-center gap-5 border-2 border-moon-white hover:border-sky-500 bg-blue-800'>





                                <SocialIcon url="https://www.linkedin.com" bgColor="#30365D" fgColor="#f6f6f3" style={{ height: "2rem", width: "2rem", borderRadius: "9999px", padding: "2px" }}></SocialIcon>



                                <h4 className='font-montserratAlt font-bold text-sm xl:text-md text-moon-white'>Connect With me</h4>




                            </div>


                        </div>


                    </motion.div>

                </div>


                {/* Img Div */}
                <div className="w-full lg:w-[50svw] h-[50svh] lg:h-[100svh] 
                rounded-xl flex items-center justify-center relative">

                    <div className='w-3/4 h-3/4 rounded-xl'>

                        <div className='w-full h-full flex items-center justify-center'>
                            <img src={proPic} className='w-full md:w-3/4 lg:w-1/2 h-full lg:h-3/4 object-fit' />
                        </div>

                    </div>

                    <div className='w-full h-full absolute top-0 lg:top-[15svh]'>
                        <div className='h-1/4 flex items-center justify-end'>
                            <motion.div
                            ref={devRef}
                            initial={{ scale: 1 }}
                            className='w-1/3'
                            animate={
                                devInView ?
                                    {
                                        scale: [1, 0.8, 1],
                                        transition: { duration: 1.2, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.1 },
                                    }
                                    : {}
                            }>
                                <img src={javaDev} className='w-4/5' />
                            </motion.div>
                        </div>
                    </div>





                </div>

            </div>
        </>
    );
};

export default Intro;