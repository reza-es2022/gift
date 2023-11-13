import { useContext } from "react";
import Label from "./Label";
import { GiftContext } from "./AppLayout";

function AgeInput({ placeholder, ageInput = false }) {
  const { gift, setGift } = useContext(GiftContext);
  let inputValue = gift.age;
  if (!ageInput && placeholder === "from") inputValue = gift.ageFrom;
  if (!ageInput && placeholder === "to") inputValue = gift.ageTo;
  return (
    <div className="flex items-center gap-4 ">
      <Label htmlFor="age">Age:</Label>
      <input
        className=" px-2 py-1 bg-pink-600 text-pink-200 
        focus:outline-none focus:ring-2 ring-pink-400 rounded-md  max-w-[100px]  font-semibold text-sm transition-all duration-300 placeholder:text-pink-400"
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) =>
          setGift((gift) => {
            return {
              ...gift,
              ageFrom:
                placeholder === "from" ? Number(e.target.value) : gift.ageFrom,
              ageTo: placeholder === "to" ? Number(e.target.value) : gift.ageTo,
              age: ageInput ? Number(e.target.value) : gift.age,
            };
          })
        }
      />
    </div>
  );
}

export default AgeInput;
