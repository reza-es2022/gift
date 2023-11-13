import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import AgeInput from "../../ui/AgeInput";
import JobInput from "../../ui/JobInput";
import SexInput from "../../ui/SexInput";
import { getGifts } from "../../services/giftsApi";
import { useContext } from "react";
import { GiftContext } from "../../ui/AppLayout";
import toast from "react-hot-toast";

function GiftInputs() {
  const queryClient = useQueryClient();

  const { gift } = useContext(GiftContext);

  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <form
      onSubmit={handleClick}
      className="grid grid-cols-3 items-start py-10  pl-5 "
    >
      <JobInput />
      <SexInput />
      <AgeInput />
    </form>
  );
}

export default GiftInputs;
