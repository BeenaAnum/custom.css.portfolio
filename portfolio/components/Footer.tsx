import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
export default function Footer() {
  return (
    <div className="footer">
      <div className="social-media">
      <Link href="https://www.facebook.com/profile.php?id=100083909281190" target="_blank">
          <FaFacebook />
           </Link>
          <Link href="mailto:beenaanum@gmail.comm" target="_blank">
          <SiGmail />
          </Link>
         <Link href="https://www.linkedin.com/in/beena-anum-2b2963254" target="_blank">
         <FaLinkedin />
          </Link>
         <Link href="https://github.com/BeenaAnum" target="_blank">
         <FaGithub />
         </Link>
      </div>
         <h3> &copy; 2024 B.A All Right Reseved </h3>
    </div>
      
  )
}

