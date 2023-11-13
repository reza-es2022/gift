import Main from "../ui/Main";

import GiftInputs from "../features/gifts/GiftInputs";
import GiftsList from "../features/gifts/GiftsList";

function Gift() {
  return (
    <div className="bg-pink-50 h-screen text-slate-800">
      <Main>
        <GiftsList />
        <GiftInputs />
      </Main>
    </div>
  );
}

export default Gift;
