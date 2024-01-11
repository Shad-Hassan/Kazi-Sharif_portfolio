import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

const javaDev = "/javaDev.png"
const Java3d = () => {



    const [devRef, devInView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    return (
        <>
            <motion.div
                ref={devRef}
                initial={{ scale: 1 }}
                animate={
                    devInView ?
                        {
                            scale: [1, 0.8, 1],
                            transition: { duration: 1.2, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.1 },
                        }
                        : {}
                }
                className='w-1/3 h-auto rounded-3xl absolute -top-[12.5%] -right-[12.5%] md:-right-[25%] lg:-right-0 xl:-right-[25%]'
            >
                <img src={javaDev} className='ring-2 ring-scarlet-red rounded-3xl p-2' />
                

            </motion.div>
        </>
    );
};

export default Java3d;