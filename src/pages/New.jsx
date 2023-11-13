import AgeInput from "../ui/AgeInput";
import JobInput from "../ui/JobInput";
import Main from "../ui/Main";
import SexInput from "../ui/SexInput";
import NameInput from "../ui/NameInput";
import ButtonLink from "../ui/ButtonLink";
import CreateGiftForm from "../features/gifts/CreateGiftForm";

function New() {
  return (
    <div className="bg-pink-50 h-screen  text-slate-800">
      <Main>
        <CreateGiftForm />
      </Main>
    </div>
  );
}

export default New;
