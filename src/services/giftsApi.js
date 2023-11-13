import GiftInputs from "../features/gifts/GiftInputs";
import supabase from "./supabase";

export async function createGift(gift) {
  console.log(gift);
  const { error } = await supabase.from("gifts").insert(gift);

  if (error) {
    console.error(error);
    throw new Error("failed to create new gift");
  }
}

export async function getGifts() {
  // let query = supabase.from("gifts").select("*");

  // if (giftFilters.sex) query.eq("sex", giftFilters.sex);
  // if (giftFilters.job) query.eq("job", giftFilters.job);
  // if (giftFilters.age) query.lt("age", giftFilters.age + 1);

  const { data, error } = await supabase.from("gifts").select("*");

  if (error) {
    console.error(error);
    throw new Error("failed to fetch gifts from server");
  }

  console.log("caled");
  return data;
}
