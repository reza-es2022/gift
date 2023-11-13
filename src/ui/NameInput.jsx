import { useContext } from "react";
import Label from "./Label";
import { set } from "react-hook-form";
import { GiftContext } from "./AppLayout";

function NameInput() {
  const { gift, setGift } = useContext(GiftContext);

  return (
    <div className="flex items-center gap-4 col-span-4">
      <Label htmlFor="age">Name:</Label>
      <input
        className=" px-2 py-1  border-b border-pink-400
        focus:outline-none   bg-inherit   font-semibold text-sm "
        type="text"
        value={gift.name ? gift.name : ""}
        onChange={(e) =>
          setGift((gift) => {
            return { ...gift, name: e.target.value };
          })
        }
      />
    </div>
  );
}

export default NameInput;
