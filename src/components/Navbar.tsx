import Link from "next/link";
import ResponsiveNavbar from "./ResponsiveNavbar";

export const navBarArr = [
  {
    key: 1,
    title: "Home",
    path: "",
  },
  {
    key: 2,
    title: "About",
    path: "",
  },
  {
    key: 3,
    title: "Courses",
    path: "",
  },
  {
    key: 4,
    title: "HomOur Service",
    path: "",
  },
  {
    key: 5,
    title: "Contact Us",
    path: "",
  },
];

const Navbar = () => {
  return (
    // <nav className="bg-orange-50 flex justify-between items-center">
    //   <div>
    //     <img src="/logo1.png" alt="Logo" className="h-18 w-18 ml-20" />
    //   </div>
    //   <div>
    //     <ul className="flex gap-3 text-l text-black">
    //       <li className="pt-2">Home</li>
    //       <li className="pt-2">About us</li>
    //       <li className="pt-2">Courses</li>
    //       <li className="pt-2">Our Service</li>
    //       <li className="pt-2">Contact us</li>
    //       <div>
    //         <button className="rounded-full bg-violet-950 text-white text-lg h-10 w-32 mr-20">
    //           Sign In
    //         </button>
    //       </div>
    //     </ul>
    //   </div>
    // </nav>

    //  example for navbar
    <div className="w-full border-b border-primary border-slate-600">
      <div className="main-container py-4 lg:flex justify-between items-center hidden">
        <div>
          <img src="/logo1.png" alt="Logo" className="h-18 w-18" />
        </div>
        <div className="flex items-center justify-end gap-10">
          <div className="flex items-center gap-10">
            {navBarArr.map((_) => (
              <div key={_.key}>
                <Link href={_.path}>
                  <div>{_.title}</div>
                </Link>
              </div>
            ))}
          </div>
          <button className="primary-btn">Sign In</button>
        </div>
      </div>
      <ResponsiveNavbar />
    </div>
  );
};

export default Navbar;
