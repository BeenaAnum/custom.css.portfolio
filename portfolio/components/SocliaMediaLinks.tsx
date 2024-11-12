
import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const SocialMediaLinks = () => (
  <div className="social-media">
    <Link href="https://www.facebook.com" target="_blank">
      <FaFacebook />
    </Link>
    <Link href="mailto:beenaanum@gmail.com" target="_blank">
      <SiGmail />
    </Link>
    <Link href="https://www.linkedin.com" target="_blank">
      <FaLinkedin />
    </Link>
    <Link href="https://github.com" target="_blank">
      <FaGithub />
    </Link>
  </div>
);

export default SocialMediaLinks;
