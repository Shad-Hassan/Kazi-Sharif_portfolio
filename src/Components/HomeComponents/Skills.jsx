

const Skills = ({ stroke }) => {
    return (
        <>
            <div className="w-full h-[100svh] rounded-xl bg-deep-blue p-2 border border-white font-montserratAlt">
                
                
                <div className="h-[6rem] md: lg:h-[9rem] xl:h-[12rem] 2xl:h-[15rem] flex flex-col gap-4 items-center justify-center">
                    <h1 className="text-3xl md:text-3xl xl:text-5xl 2xl:9xl font-extrabold" style={stroke}>
                        Skills
                    </h1>
                    <p className="text-md md:text-lg xl:text-xl font-semibold text-moon-white">I have a wide array of skills</p>
                </div>
                
                {/* Second Container div */}
                <div className="flex-1 items-center justify-center border border-red-400 h-full rounded-xl">
                    <div>
                        <h1>Alo Alo</h1>
                    </div>
                    <div>
                        <h1>Alo Alo</h1>
                    </div>

                </div>


            </div>
        </>
    );
};

export default Skills;