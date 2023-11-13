import { useContext } from "react";
import Label from "./Label";
import { GiftContext } from "./AppLayout";

function AgeInput() {
  const { gift, setGift } = useContext(GiftContext);
  return (
    <div className="flex items-center gap-4 ">
      <Label htmlFor="age">Age:</Label>
      <input
        className=" px-2 py-1 bg-pink-600 text-pink-200 
        focus:outline-none focus:ring-2 ring-pink-400 rounded-md  max-w-[100px]  font-semibold text-sm transition-all duration-300"
        type="text"
        value={gift.age}
        onChange={(e) =>
          setGift((gift) => {
            return { ...gift, age: Number(e.target.value) };
          })
        }
      />
    </div>
  );
}

export default AgeInput;
