import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import RoundedLogo from "./RoundedLogo";
import { socials } from "../utils/socials";
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#eeeff1] w-full">
      <div className="footer-center max-w-screen-xl w-full mx-auto py-4">
        <div className="first flex justify-between items-center">
          <div className="logo">
            <h1 className="text-2xl font-bold mb-4">LOGO</h1>
            <p className="max-w-[500px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
              autem similique nemo iste nam aliquid! Earum, distinctio! Ea nam,
              explicabo distinctio minima dolorem dolores ipsam perferendis
              corrupti libero aperiam est.
            </p>
          </div>
          <div className="socials flex flex-col gap-4">
            <h1 className="text-xl font-bold">Contact Us</h1>
            <div className="email flex items-center gap-4">
              <RoundedLogo logo={<MdEmail />} />
              <p>kkulshreshtha29@gmail.com</p>
            </div>
            <div className="phone flex items-center gap-4">
              <RoundedLogo logo={<FaPhoneAlt />} />
              <p>+91 9876543210</p>
            </div>
            <div className="icons flex gap-4">
              {socials.map((item) => {
                return <RoundedLogo key={item.index} logo={item.logo} />;
              })}
            </div>
          </div>
        </div>
        <div className="second"></div>
        <div className="credits text-center mt-8">
          All Rights reserved {year}, Made by Krishna Kulshreshtha
        </div>
      </div>
    </footer>
  );
};
export default Footer;
