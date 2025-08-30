"use client";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import CNLogo from "../assets/CN_logo.svg";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "Projects", id: "projects" },
  { label: "Extras", id: "extras" },
  { label: "Contact", id: "contact" },
];

export default function NavBar() {
  const [active, setActive] = useState("Home");
  const navigate = useNavigate();
  const location = useLocation();

 const goTo = (id: string) => {
    setActive(id);
    if (location.pathname !== "/") {
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
      <div className="absolute left-[110px] top-6 font-semibold text-white text-[16px] leading-6">
        <p className="mb-0">Cindy</p>
        <p>Nakhammouane</p>
      </div>
      {/* <CNLogo /> */}
      <img
        src={CNLogo}
        alt="CN logo"
        className="absolute left-[40px] top-1.5 w-[80px]"
      />

      {/* Nav buttons on right */}
      <div className="absolute top-0 right-0 h-full flex items-center gap-8 pr-8">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => goTo(item.id)}
            className={`text-[20px] font-semibold transition-opacity ${
              active === item.id ? "text-white opacity-100" : "text-white opacity-75"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
