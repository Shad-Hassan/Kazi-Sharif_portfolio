import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons'
const linkedIn = "https://www.linkedin.com/in/kazishaharairsharif/"
const proPic = "/JuboIntro.png"
const Intro = ({ stroke }) => {
    const linkedInProfile = () => {
        window.open(linkedIn,"_blank")
    }
    return (
        <>
            <div className='w-full h-[100svh] rounded-xl bg-deep-blue p-2 border border-white flex item-center justify-center flex-col lg:flex-row'>


                {/* Text Div */}
                <div className="w-full h-full rounded-xl border border-red-500 p-3 flex items-center justify-center text-center font-montserratAlt">

                    <div className="w-4/5 min-h-3/4 rounded-xl mt-5 lg:mt-0">
                        <div className="mt-[3rem] lg:mt-[6rem]">

                            <h1 className="text-3xl md:text-3xl xl:text-5xl 2xl:9xl font-extrabold" style={stroke}>
                                Kazi Jubayer Sharif
                            </h1>

                        </div>

                        <div className="mt-[1.5rem] lg:mt-[3rem] md:px-4 xl:px-6 2xl:px-12">

                            <p className="text-md md:text-lg xl:text-xl 2xl:text-3xl font-semibold text-moon-white text-justify">
                                I am a passionate Java Developer. Dive into a symphony of Spring, Hibernate, Kafka, and more, sculpting robust backend solutions.
                            </p>
                        </div>


                        <div className="h-[3rem] mt-[3rem] flex items-center justify-center">

                           
                                <div onClick={linkedInProfile} className='cursor-pointer w-3/4 md:w-1/2 xl:w-[40%] 2xl:w-1/3 py-[6px] px-2 lg:px-0 
                                rounded-2xl flex items-center justify-center gap-5 border-2 border-moon-white hover:border-sky-500 bg-blue-800'>



                                    

                                        <SocialIcon url="https://www.linkedin.com" bgColor="#30365D" fgColor="#f6f6f3" style={{ height: "2rem", width: "2rem", borderRadius: "9999px", padding: "2px" }}></SocialIcon>
                                    

                                    
                                        <h4 className='font-montserratAlt font-bold text-sm xl:text-md text-moon-white'>Connect With me</h4>
                                    



                                </div>
                            

                        </div>


                    </div>

                </div>


                {/* Img Div */}
                <div className="w-full h-full rounded-xl border border-yellow-500 flex items-center justify-center">
                    <div className="w-4/5 min-h-3/4 rounded-xl mt-5 lg:mt-0 border-red-500">
                        <img src={proPic} className='w-full h-full rounded-3xl border border-white bg-blue-800' alt="" />
                    </div>

                </div>

            </div>
        </>
    );
};

export default Intro;