import { createContext, useContext, useState } from "react";
import AgeInput from "../../ui/AgeInput";
import ButtonLink from "../../ui/ButtonLink";
import JobInput from "../../ui/JobInput";
import NameInput from "../../ui/NameInput";
import SexInput from "../../ui/SexInput";
import { GiftContext } from "../../ui/AppLayout";
import { toast } from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createGift as createGiftApi } from "../../services/giftsApi";
import Spinner from "../../ui/Spinner";

function CreateGiftForm() {
  const { gift, setGift } = useContext(GiftContext);
  const queryClient = useQueryClient();
  const {
    mutate: createGift,
    error,
    isLoading,
  } = useMutation({
    mutationFn: createGiftApi,
    onSuccess: () => {
      toast.success("gift added successfully");
      setGift({
        job: "",
        name: "",
        ageFrom: "",
        ageTo: "",
        sex: "",
        age: "18",
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  function handleClick() {
    if (!gift.job) {
      toast.error("job title is missing");
      return;
    }
    if (!gift.name) return toast.error("gift name is missing");
    if (!gift.sex) return toast.error("sex input is missing");
    if (
      !gift.ageFrom ||
      Number(gift.ageFrom) < 0 ||
      !gift.ageTo ||
      Number(gift.ageTo) < Number(gift.ageFrom)
    )
      return toast.error("invalid age input 😡");

    // Create gift
    createGift(gift);
  }

  return (
    <>
      <h2 className="font-semibold text-xl mb-10 col-span-2">
        help us by creating new gifts
      </h2>
      <div className="col-span-2 grid grid-cols-4 h-full grid-rows-[auto_1fr] gap-y-8  items-start">
        <NameInput />
        <JobInput />
        <SexInput />
        <AgeInput placeholder="from" />
        <AgeInput placeholder="to" />
        {isLoading && (
          <div>
            <Spinner />
          </div>
        )}
        <button
          onClick={handleClick}
          className="absolute bottom-5 right-5 font-semibold hover:border-pink-500 hover:bg-pink-50 hover:text-pink-600  py-2 px-4 border-2 border-transparent hover:bg-pink-50 hover:border-pink-200 rounded-md hover:text-pink-200 bg-pink-600  text-pink-200 transition-all duration-300"
        >
          Create
        </button>
      </div>
    </>
  );
}

export default CreateGiftForm;
