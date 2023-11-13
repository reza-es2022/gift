import { PiArrowDownBold } from "react-icons/pi";
import Label from "./Label";
import Option from "./Option";
import { useContext, useState } from "react";
import { GiftContext } from "./AppLayout";

const sex = ["male", "female", "other"];
function SexInput() {
  const [isOpen, setIsOpen] = useState(false);
  const { gift } = useContext(GiftContext);

  function handleClick() {
    setIsOpen(false);
  }
  return (
    <div className="flex items-start gap-4">
      <Label>Sex:</Label>
      <div>
        <div
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          className={`flex items-center justify-between gap-2 text-sm  text-pink-200 py-1 px-2 rounded-md font-semibold tracking-wide transition-all duration-300
          ${
            isOpen ? "bg-pink-100 text-pink-300" : "bg-pink-600 text-pink-200"
          }`}
        >
          <p>{gift.sex ? gift.sex : "Select"}</p>
          <PiArrowDownBold />
        </div>
        {isOpen && (
          <div className="bg-pink-100" name="job" id="job">
            {sex.map((sex, i) => (
              <Option key={i} isSex={true} value={sex} onClick={handleClick}>
                {sex}
              </Option>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SexInput;
