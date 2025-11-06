"use client";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger/close icons


const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "aboutme" },
  { label: "Projects", id: "projects" },
  { label: "Extras", id: "extras" },
  { label: "Contact", id: "contact" },
];

export default function NavBar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

 const goTo = (id: string) => {
    setActive(id);
    if (id === "aboutme" || id === "extras") {
      navigate(`/${id}`);
    }
    else if (location.pathname !== "/") {
      navigate(`/#${id}`);   
    } else {
      navigate(`#${id}`);
    }
  };

  return (
    <div className="font-nhgDisplay relative w-full h-[85px] pointer-events-none" data-name="nav bar">
      {/* Gradient background */}
      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-[#008BE8] to-transparent pointer-events-none" />

      {/* Logo + name */}
      <button onClick={() => goTo("home")} className="relative flex items-start pl-8 pt-4 pointer-events-auto">
        {/* <img
          src={"/CN_logo.svg"}
          alt="CN logo"
          className=" translate-y-[-10px] w-[70px]"
        /> */}
        {/* <img
            src={"/headshot-bw.png"}
            alt="Headshot Preview"
            className="hidden md:block w-[35px] h-[35px]"
          /> */}
        <div className="flex flex-col text-white text-[18px] text-left">
          <p className="font-nhgDisplay -mb-1">Cindy</p>
          <p className="font-nhgDisplay">Nakhammouane</p>
        </div>
      </button>

    
      {/* Nav buttons on right */}
      <div className="absolute top-0 right-0 h-full flex items-center pr-8 pointer-events-none">
      {/* Desktop nav */}
      <div className="hidden sm:flex gap-6 pointer-events-none">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => goTo(item.id)}
            className={`text-[18px] font-bolder transition-opacity pointer-events-auto text-white hover:opacity-90 ${
              active === item.id ? "opacity-100" : "opacity-75"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Mobile menu button */}
      <div className="sm:hidden">
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className=" text-white focus:outline-none mt-4 pointer-events-auto"
        >
          {menuOpen ? <X size={40} /> : <Menu size={40} />}
        </button>

        {/* Dropdown */}
        {menuOpen && (
          <div className="absolute right-4 mt-2 w-32 rounded-md bg-black/75 py-4 shadow-lg z-50 flex flex-col pointer-events-auto">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  goTo(item.id);
                  setMenuOpen(false); // close after click
                }}
                className={`px-4 py-2 text-left text-white text-sm hover:bg-white/10 ${
                  active === item.id ? "font-bolder" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>

    </div>
  );
}
