import React, { useEffect, useState } from "react";
import { styles } from "./styles";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <nav
      className={`${styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
        }`}
    >
          {/* <img src={logo} alt='logo' className='w-9 h-9 object-contain' /> */}
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            MAJHGAWAN - BLOCK &nbsp;
            {/* <span className='sm:block hidden'> | Comic Junction - 2023</span> */}
          </p>
    </nav>
    </>
  );
};
export default Navbar;
