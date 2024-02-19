/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Button({ label, className, link }) {
  return (
    <Link
      to={link}
      className={`py-2 text-xl font-semibold text-center ${className} `}
    >
      {label}
    </Link>
  );
}
