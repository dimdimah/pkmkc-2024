/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

// Constants
const footerText = "🤝 MacaEdu";
const tagline =
  "Bersama meningkatkan keterampilan digital, tambah portfolio dan berpartisipasi memberikan dampak positif #MulaiAjaDulu";
const copyright = "@2023, MacaEdu TEKNOLOGI EDUKASI";

// Reusable component for links
const FooterLink = ({ to, text }) => (
  <Link to={to} className="text-sm text-gray-900 md:text-md hover:underline">
    {text}
  </Link>
);

const Footer = () => {
  return (
    <footer className="px-3 pt-14">
      <div className="flex flex-col justify-between md:flex-row">
        <div className="flex flex-col space-y-1 md:w-1/3">
          <p className="text-2xl font-bold">{footerText}</p>
          <p className="text-sm md:text-md">{tagline}</p>
          <p className="pt-2 text-sm font-semibold md:text-md">{copyright}</p>
        </div>
        <div className="flex flex-col pt-3 space-y-4 md:flex-row md:space-y-0 md:space-x-12">
          <div className="flex flex-col space-y-2">
            <p className="mb-2 font-semibold text-md md:text-md">Halaman</p>
            <FooterLink to="/" text="Home" />
            <FooterLink to="/" text="Belajar" />
            <FooterLink to="/" text="Informasi" />
          </div>
          <div className="flex flex-col space-y-2">
            <p className="mb-2 font-semibold text-md md:text-md">Kontak Kami</p>
            <FooterLink to="/" text="Twitter" />
            <FooterLink to="/" text="Instagram" />
            <FooterLink to="/" text="TikTok" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
