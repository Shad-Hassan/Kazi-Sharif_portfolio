import { useInView } from "react-intersection-observer";


const WorkXp = ({ stroke }) => {
    const [workRef, workRefInView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });
    return (
        <>
            <div className="w-full h-[100svh] rounded-xl bg-deep-blue border border-white font-montserratAlt">
                {/* Xp Heasder */}
                <div className="flex-none h-[6rem] md: lg:h-[9rem] xl:h-[12rem] 2xl:h-[15rem] 
                flex flex-col gap-4 items-center justify-center">
                    <h1 className="text-3xl md:text-3xl xl:text-5xl 2xl:9xl font-extrabold" style={stroke}>
                        Experience
                    </h1>
                    <p className="text-md md:text-lg xl:text-xl font-semibold text-moon-white">I have in depth industrial experience </p>
                </div>
            </div>
        </>
    );
};

export default WorkXp;