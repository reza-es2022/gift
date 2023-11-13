import { useContext, useState } from "react";
import Label from "./Label";
import Option from "./Option";
import { PiArrowDownBold } from "react-icons/pi";
import { useQuery } from "@tanstack/react-query";
import { getJobs } from "../services/jobApi";
import { ImSpinner2 } from "react-icons/im";
import toast from "react-hot-toast";
import { GiftContext } from "./AppLayout";
import Spinner from "./Spinner";

function JobInput() {
  const [isOpen, setIsOpen] = useState(false);
  const { gift } = useContext(GiftContext);

  const {
    data: jobs = [],
    isLoading,
    error,
  } = useQuery({
    queryFn: getJobs,
    queryKey: ["jobs"],
  });

  function handleClick(e) {
    setIsOpen(false);
  }

  if (isLoading) return <Spinner />;
  if (error) toast.error(error.message);
  return (
    <div className="flex items-start gap-4  px-2">
      <Label>Job:</Label>
      <div>
        <div
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          className={`flex items-center justify-between gap-2 text-sm  text-pink-200 py-1 px-2 rounded-md font-semibold tracking-wide transition-all duration-300
          ${
            isOpen ? "bg-pink-100 text-pink-300" : "bg-pink-600 text-pink-200"
          }`}
        >
          <p>{gift.job ? gift.job : "Select"}</p>
          <PiArrowDownBold />
        </div>
        {isOpen && (
          <div className="bg-pink-100" name="job" id="job">
            {jobs.map((job) => (
              <Option
                key={job.id}
                isSex={false}
                value={job.name}
                onClick={handleClick}
              >
                {job.name}
              </Option>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default JobInput;
