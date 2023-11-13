import { PiGiftBold } from "react-icons/pi";

function Gift({ gift }) {
  return (
    <li className="grid grid-cols-[auto_1fr] items-center gap-x-2 gap-y-1 ">
      <PiGiftBold className="text-pink-600" />
      <p>{gift.name}</p>
    </li>
  );
}

export default Gift;
