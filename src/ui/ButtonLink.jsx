import { NavLink } from "react-router-dom";

function ButtonLink({ children, to, className: more = "" }) {
  return (
    <NavLink
      className={`py-2 px-4 border-2 border-transparent hover:bg-pink-600 hover:border-pink-200 rounded-md hover:text-pink-200 bg-pink-600  text-pink-200 transition-all duration-300
      ${more}`}
      to={to}
    >
      {children}
    </NavLink>
  );
}

export default ButtonLink;
