import React from "react";
import { useEffect, useState } from "react";
import item from "../api/navbar.json"; //Menu elemanları için oluşturulan json

function Navbar() {
  // Use effect ve usestate ile bilgilerin kendi oluşturduğum jsondan alınması
  const [navItem, setNavItem] = useState([]);
  useEffect(() => {
    setNavItem(item.Navbar);
  }, []);

  return (
    <div className="h-[100%] grid grid-cols-3 md:grid-cols-1 justify-center items-center transition py-4 md:py-0  ">
      {/* Logo bölümü */}
      <div className="flex justify-center items-center hover:scale-90">
        <img width={89} src="/navbar-logo.png" alt="" />
      </div>
      {/* Hava durumu bölümü */}
      <div className="flex flex-col justify-center items-center hover:scale-90">
        <img width={79} src="navbar-weather.svg" alt="" />
        <div>weather</div>
      </div>
      <div className="flex flex-col gap-y-2 md:gap-y-0  justify-center items-center text-nav-color ">
        {/* Diğer menü öğeleri */}
        {navItem.map((e, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center transition hover:scale-90 "
          >
            <img width={34} height={34} src={e.url} alt="" />
            <div>{e.type}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
