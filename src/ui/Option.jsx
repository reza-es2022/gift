import { useContext } from "react";
import { GiftContext } from "./AppLayout";
import { set } from "react-hook-form";

function Option({ children, value, onClick, isSex }) {
  const { setGift } = useContext(GiftContext);

  function handleClick() {
    onClick();

    if (isSex) {
      setGift((gift) => {
        return { ...gift, sex: value };
      });
    }

    if (!isSex) {
      setGift((gift) => {
        return { ...gift, job: value };
      });
    }
  }

  return (
    <p
      className="font-medium  text-inherit hover:bg-pink-600 hover:text-pink-200  px-2 cursor-pointer"
      onClick={handleClick}
    >
      {children}
    </p>
  );
}

export default Option;
