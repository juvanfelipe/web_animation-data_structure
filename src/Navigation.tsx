import Image from "next/image";
import logo from "@/app/asset/image/LOGO1.png"; // Updated path to logo from public folder
import { Search } from "lucide-react";


const Navigation = () => {
  return (
    <nav className="flex items-center justify-around p-4 ">
      <div className="flex items-center">
        <Image src={logo} alt="Logo" width="50" height="50" style={{ width: "auto", height: "auto" }} priority />
        <span className="ml-2 text-lg">GALAXY</span>
      </div>
      <div>
        <ul className="flex items-center gap-5">
          <li>Home</li>
          <li>Planets</li>
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <Search className="text-white"/>
    </nav>
  );
};

export default Navigation;
