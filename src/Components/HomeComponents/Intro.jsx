

const Intro = ({ stroke }) => {
    return (
        <>
            <div className='w-full h-[100svh] rounded-xl bg-deep-blue p-2 border border-white flex item-center justify-center flex-col lg:flex-row'>


                {/* Text Div */}
                <div className="w-full h-full rounded-xl border border-red-500 p-3 flex items-center justify-center text-center font-montserratAlt">

                    <div className="w-4/5 h-3/4 rounded-xl mt-5 border border-green-400">
                        <div className="mt-[3rem]">

                            <h1 className="text-2xl lg:text-6xl font-bold" style={stroke}>
                                Kazi Jubayer Sharif
                            </h1>

                        </div>

                        <div className="mt-[1.5rem]">

                            <p className="text-sm font-semibold text-moon-white text-justify">
                                I am a passionate Java Developer. Dive into a symphony of Spring, Hibernate, Kafka, and more, sculpting robust backend solutions.
                            </p>
                        </div>
                    </div>

                </div>


                {/* Img Div */}
                <div className="w-full h-full rounded-xl border border-yellow-500">

                </div>

            </div>
        </>
    );
};

export default Intro;