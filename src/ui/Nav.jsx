import { NavLink } from "react-router-dom";
import ButtonLink from "./ButtonLink";
import { TfiGift } from "react-icons/tfi";
function Nav() {
  return (
    <div className="bg-pink-600 py-4 px-4 flex items-center justify-between">
      <div className="w-10 h-10 text-pink-200 ml-2">
        <TfiGift className="h-full w-full" />
      </div>
      <nav>
        <ul className="flex items-center justify-end gap-2 text-lg font-semibold tracking-wide  ">
          <li className="py-2 px-4 hover:bg-pink-600 rounded-md">
            <ButtonLink to="/">Gifts</ButtonLink>
          </li>
          <li>
            <ButtonLink to="/new">Create</ButtonLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
