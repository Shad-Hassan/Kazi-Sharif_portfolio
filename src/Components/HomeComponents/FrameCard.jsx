
import { useState } from "react";
import { PiCursorBold } from "react-icons/pi";
import { motion } from 'framer-motion';

const FrameCard = (props) => {
    const { object, setObject, modal, setModal, skillset } = props
    const { skill_id, skill_img, skill_header, } = skillset


    const handleDetails = async () => {

        if (!modal) {
            console.log("modal dekhao")
            setModal(true)
            setObject(skillset)
        }

    }

    return (
        <>

            <div onClick={handleDetails} className=" text-moon-white font-semibold
                w-full flex justify-center">

                <div className="w-3/4 relative cursor-pointer 
                    ring-2 ring-ghost-blue shadow-xl ring-offset-2 ring-offset-scarlet-red rounded-xl">



                    <div className="w-full flex items-center justify-center p-1">
                        <h1 className="text-lime-400 text-center text-sm md:text-md xl:text-lg mb-1 py-2">{skill_header}</h1>
                    </div>

                    <div className="h-[64px] sm:h-[72px] md:h-[104px] 2xl:h-[200px] w-full flex items-start justify-center">
                        <img src={skill_img} className="w-full 2xl:w-4/5 2xl:h-4/5 h-full object-cover md:object-fill p-2 opacity-85" />
                    </div>

                    <div className="flex items-center justify-end pr-4 py-2 font-light text-xs gap-2">
                        <motion.div
                            className="text-xs md:text-sm text-scarlet-red"
                            initial={{ opacity: 1 }}
                            animate={{ opacity: [1, 0, 1], transition: { duration: 1.5, repeat: Infinity } }}>
                            <PiCursorBold></PiCursorBold>
                        </motion.div>
                        
                        <div>
                            <h2 className="text-xs md:text-sm">Details</h2>
                        </div>
                    </div>

                </div>




            </div>



        </>
    );
};

export default FrameCard;