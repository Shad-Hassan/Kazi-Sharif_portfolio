import { MdAccessTime } from "react-icons/md";
import { FaArrowPointer } from "react-icons/fa6";
import { motion } from 'framer-motion';


const JobCard = (props) => {
    const { jobs, jobObject, setJobObject, details, setDetails } = props;
    const { job_Id, company, logo, post, city, session, work } = jobs;
    const handleShowDetails = () => {
        if (!details) {
            console.log("details dekhao")
            setDetails(true)
            setJobObject(jobs)
            console.log(jobs)
        }
    }
    return (

        <>
            <div onClick={handleShowDetails} className="cursor-pointer flex items-center justify-center w-full h-full p-1 font-montserratAlt text-moon-white relative">

                <div className="w-3/4 relative cursor-pointer 
                    ring-2 ring-ghost-blue shadow-xl ring-offset-2 ring-offset-scarlet-red rounded-xl">



                    <div className="w-full flex items-center justify-center sm:p-1">
                        <h1 className="text-center text-sm sm:text-md md:text-lg xl:text-xl mb-1 py-2 font-extrabold">{company}</h1>
                    </div>


                    <div className="h-[52px] sm:h-[72px] md:h-[160px] xl:h-[200px] w-full flex items-start justify-center">
                        <img src={logo} className="w-full 2xl:w-4/5 2xl:h-4/5 h-full object-contain md:object-fill p-2" />
                    </div>


                    <div className="flex gap-2 justify-center text-sm">
                        <div className="flex justify-center items-center">
                            <MdAccessTime />
                        </div>
                        <div className="">
                            <h3>{session}</h3>
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <h1 className="text-center text-sm sm:text-md md:text-lg xl:text-xl mb-1 py-2 font-extrabold text-lime-400">{post}</h1>
                    </div>


                    <div className="w-full absolute bottom-2 -left-[1rem] md:-left-[0.5rem] flex justify-end">
                        <motion.div
                            className="text-xs rounded-full bg-ghost-blue p-1 text-moon-white"
                            initial={{ opacity: 1 }}
                            animate={{ opacity: [1, 0, 1], transition: { duration: 1.5, repeat: Infinity } }}>
                            <FaArrowPointer />
                        </motion.div>


                    </div>



                </div>

            </div>
        </>
    );
};

export default JobCard;