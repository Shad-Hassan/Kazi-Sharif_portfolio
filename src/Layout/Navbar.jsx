

const Navbar = () => {
    return (
        <>
            <div className="min-h-[3rem] lg:mx-4 px-[0.5rem] py-[0.25rem] rounded-xl flex items-center backdrop-blur-md opacity-90 border-2 border-ghost-blue">
                <div className="w-1/5 flex items-center justify-start">

                    <a className="backdrop-blur-xl font-montserratAlt font-bold text-xl ml-4 text-moon-white"> <span className="text-scarlet-red font-extrabold text-3xl">J</span>ubayer</a>

                </div>
                
                <div className="w-3/4 flex justify-end items-center">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;