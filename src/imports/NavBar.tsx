"use client";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger/close icons


const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "aboutme" },
  { label: "Projects", id: "projects" },
  // { label: "Extras", id: "extras" },
  { label: "Contact", id: "contact" },
];

export default function NavBar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

 const goTo = (id: string) => {
    setActive(id);
    if (id === "aboutme") {
      navigate(`/${id}`);
    }
    else if (location.pathname !== "/") {
      navigate(`/#${id}`);   
    } else {
      navigate(`#${id}`);
    }
  };

  return (
    <div className="relative w-full h-[84px]" data-name="nav bar">
      {/* Gradient background */}
      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-[#008BE8] to-transparent" />

      {/* Logo + name */}
      <button onClick={() => goTo("home")} className="relative flex items-start pl-[110px] pt-6">
        <img
          src={"/CN_logo.svg"}
          alt="CN logo"
          className="absolute left-[40px] top-1.5 w-[80px]"
        />
        <div className="flex flex-col font-semibold translate-y-[-7px] text-white text-[16px] text-left">
          <p className="-mb-1">Cindy</p>
          <p>Nakhammouane</p>
        </div>
      </button>

    
      {/* Nav buttons on right */}
      <div className="absolute top-0 right-0 h-full flex items-center pr-8">
      {/* Desktop nav */}
      <div className="hidden sm:flex gap-8">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => goTo(item.id)}
            className={`text-[20px] font-semibold transition-opacity text-white hover:opacity-90 ${
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
          className="p-2 text-white focus:outline-none"
        >
          {menuOpen ? <X size={48} /> : <Menu size={48} />}
        </button>

        {/* Dropdown */}
        {menuOpen && (
          <div className="absolute right-4 mt-2 w-32 rounded-md bg-black/75 py-4 shadow-lg z-50 flex flex-col">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  goTo(item.id);
                  setMenuOpen(false); // close after click
                }}
                className={`px-4 py-2 text-left text-white text-sm hover:bg-white/10 ${
                  active === item.id ? "font-bold" : ""
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
