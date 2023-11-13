import supabase from "./supabase";

export async function getJobs() {
  const { data, error } = await supabase.from("jobs").select("*");

  if (error) {
    console.error(error);
    throw new Error("failed to fetch jobs from server");
  }

  return data;
}
