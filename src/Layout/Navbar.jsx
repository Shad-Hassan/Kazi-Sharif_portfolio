import { Link as ScrollLink } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {


    const closeMenu = () => {
        console.log("gamcha khul gaya")
    }
    const handleBurgerMenu = (event) => {
        event.stopPropagation();
        if (!mobileMenu) {
            setMobileMenu(true);
        }
    }
    const handleCross = () => {
        if (mobileMenu) {
            setMobileMenu(false)
        }
    }

    const [mobileMenu, setMobileMenu] = useState(false)

    const mobileMenuRef = useRef(null);
    const burgerMenuRef = useRef(null);

    useEffect(() => {
        const handleDocumentClick = (event) => {
            // Check if the clicked element is outside the mobile menu component
            // and is not the hamburger menu
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && event.target !== burgerMenuRef.current) {
                setMobileMenu(false);
            }
        };

        // Add event listener when the component mounts
        document.addEventListener('click', handleDocumentClick);

        // Remove event listener when the component unmounts
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);


    const navScroll = [
        {
            nav_id: 1,
            nav_li: "Skills",
            navigateTo: "Skills",
        },
        {
            nav_id: 2,
            nav_li: "Experience",
            navigateTo: "Experience",
        },
        {
            nav_id: 3,
            nav_li: "Contact Me",
            navigateTo: "Contact Me",
        },
    ]
    return (
        <>
            <div className="min-h-[3rem] lg:mx-4 px-[0.5rem] py-[0.25rem] rounded-xl flex items-center backdrop-blur-md opacity-90 border-2 border-ghost-blue">
                <div className="w-1/5 flex items-center justify-start">

                    <a className="backdrop-blur-xl font-montserratAlt font-bold text-xl ml-4 text-moon-white"> <span className="text-scarlet-red font-extrabold text-3xl">J</span>ubayer</a>

                </div>
                {/* Nav end */}

                <div className="w-3/4 flex justify-end items-center">
                    <ul className="hidden md:flex items-center justify-center gap-[6rem]">
                        {navScroll.map((item) => (
                            <li key={item.nav_id} className='font-montserratAlt text-moon-white italic font semi-bold hover:text-scarlet-red text-lg cursor-pointer'>
                                <ScrollLink
                                    to={item.navigateTo} duration={500}
                                    onClick={closeMenu}
                                    spy={true} smooth={true}>
                                    {item.nav_li}
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
                    {/* mobile device */}
                    <div className="sm:hidden block relative" ref={mobileMenuRef}>
                        {!mobileMenu ? <GiHamburgerMenu className="text-xl text-moon-white brightness-150" onClick={handleBurgerMenu} ref={burgerMenuRef} /> : <IoCloseCircleOutline className="text-2xl text-moon-white brightness-150" onClick={handleCross} />}
                        <div className="absolute top-[40px] right-0 w-[120px] rounded-2xl">

                            {mobileMenu &&
                                <ul className="sm:hidden flex flex-col items-center justify-center gap-2 bg-moon-white rounded-2xl">
                                    {navScroll.map((item) => (
                                        <li key={item.nav_id} className='font-montserratAlt text-russia-black italic font semi-bold 
                                    hover:text-scarlet-red text-sm cursor-pointer p-2 rounded-2xl'>
                                            <ScrollLink
                                                to={item.navigateTo} duration={500}
                                                onClick={closeMenu}
                                                spy={true} smooth={true}>
                                                {item.nav_li}
                                            </ScrollLink>
                                        </li>
                                    ))}
                                </ul>
                            }

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Navbar;