import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <section className="border-b border-gray-500/20 px-5 sticky top-0">
      <div className="flex justify-between w-full h-15 items-center">
        <NavLink to="/">
          <h1 className="font-bold text-3xl">
          Briefly
          <span className="text-teal-400">.</span>
        </h1>
        </NavLink>
        <button className="text-lg font-semibold bg-white/5 hover:bg-white/10 px-4 py-2 cursor-pointer rounded-md transition">Sign in</button>
      </div>
    </section>
  );
};

export default Navbar;
