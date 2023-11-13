import Gift from "./Gift";
import { getGifts } from "../../services/giftsApi";
import { useContext, useEffect, useState } from "react";
import { GiftContext } from "../../ui/AppLayout";
import { useQuery, useQueryClient } from "@tanstack/react-query";

function GiftsList() {
  const [show, setShow] = useState(false);
  const [filterdGifts, setFilterdGifts] = useState([]);
  const { gift } = useContext(GiftContext);

  const queryClient = useQueryClient();

  const {
    data: gifts = [],
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getGifts(gift),
    queryKey: ["gifts"],
  });

  // Filter gifts
  function handleClick() {
    console.log(gift, gifts);

    setFilterdGifts(
      gifts.filter((item) => {
        const job = gift.job ? item.job === gift.job : true;
        const sex = gift.sex ? item.sex === gift.sex : true;
        const age = item.age < gift.age;
        return job && sex && age;
      })
    );
  }

  return (
    <div className="space-y-4 h-full py-10 pr-10  border-r border-stale-100">
      <p className="font-bold text-lg">Results:</p>
      <ul className="font-semibold  ">
        {filterdGifts.map((gift) => (
          <Gift key={gift.id} gift={gift} />
        ))}
      </ul>

      <button
        className="absolute bottom-5 right-5 font-semibold hover:border-pink-500 hover:bg-pink-50 hover:text-pink-600  py-2 px-4 border-2 border-transparent hover:bg-pink-50 hover:border-pink-200 rounded-md hover:text-pink-200 bg-pink-600  text-pink-200 transition-all duration-300"
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
}

export default GiftsList;
