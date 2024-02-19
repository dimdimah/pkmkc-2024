import Footer from "./footer";
import Navbar from "./navbar";

/* eslint-disable react/prop-types */
export default function Layout({ children }) {
  return (
    <div className="w-full h-screen overflow-auto bg-white text-neutral-800">
      <Navbar />
      <div className="container px-8 py-4 mx-auto grow">{children}</div>
      <Footer />
    </div>
  );
}
