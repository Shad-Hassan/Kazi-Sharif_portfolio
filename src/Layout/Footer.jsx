

const Footer = () => {
    const gitShad = "https://github.com/Shad-Hassan"
    const githubShad = () => {
        window.open(gitShad, "_blank")
    }
    return (
        <>
            <footer className="w-full h-[10rem] p-10 bg-russia-black text-moon-white">
                <div className="flex flex-col gap-3 items-center justify-center">

                    <h3 className="font-montserratAlt">Copyright © 2024 - All right reserved</h3>
                    <p onClick={githubShad} className="text-xl font-poppins tracking-widest"><span className="cursor-pointer hover:bg-sat-blue px-3 rounded-full ring-2 ring-moon-white">Shad Hassan</span></p>                    

                </div>
            </footer>
        </>
    );
};

export default Footer;