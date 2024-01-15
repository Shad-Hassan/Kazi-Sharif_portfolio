import SkillCard from "./SkillCard";


const Skills = ({ stroke }) => {
    return (
        <>
            <div id="Skills" className="w-full min-h-[100svh] rounded-xl bg-deep-blue p-2 flex flex-col">


                <div className="flex-none h-[4rem] sm:h-[6rem] md: lg:h-[9rem] xl:h-[12rem] 2xl:h-[15rem] 
                flex flex-col gap-2 items-center justify-center">
                    <h1 className="text-2xl sm:text-3xl md:text-3xl xl:text-5xl 2xl:9xl font-extrabold" style={stroke}>
                        Skills
                    </h1>
                    <p className="text-md md:text-lg xl:text-xl font-semibold text-moon-white">I have a wide array of skills</p>
                </div>

                {/* Second Container div */}
                <div className="flex-1 mt-0 md:mt-[2svh]">
                   <SkillCard></SkillCard>
                </div>

                

            </div>
        </>
    );
};

export default Skills;