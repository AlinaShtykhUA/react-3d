import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      text: "About",
      link: "/about",
    },
    {
      text: "Projects",
      link: "/projects",
    },
    {
      text: "Contact",
      link: "/contact",
    },
  ];
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">AS</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        {links.map(({ link, text }) => (
          <NavLink
            key={text}
            to={link}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black"
            }
          >
            {text}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
