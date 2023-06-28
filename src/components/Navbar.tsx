import Link from "next/link";
import ResponsiveNavbar from "./ResponsiveNavbar";
import { navBarArr } from "./data";



const Navbar = () => {
  return (
    // <nav className="flex items-center justify-between bg-orange-50">
    //   <div>
    //     <img src="/logo1.png" alt="Logo" className="ml-20 h-18 w-18" />
    //   </div>
    //   <div>
    //     <ul className="flex gap-3 text-black text-l">
    //       <li className="pt-2">Home</li>
    //       <li className="pt-2">About us</li>
    //       <li className="pt-2">Courses</li>
    //       <li className="pt-2">Our Service</li>
    //       <li className="pt-2">Contact us</li>
    //       <div>
    //         <button className="w-32 h-10 mr-20 text-lg text-white rounded-full bg-violet-950">
    //           Sign In
    //         </button>
    //       </div>
    //     </ul>
    //   </div>
    // </nav>

    //  example for navbar
    <div className="w-full bg-[#FDF8EE] border-b border-primary">
      <div className="items-center justify-between hidden py-4 main-container lg:flex">
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
