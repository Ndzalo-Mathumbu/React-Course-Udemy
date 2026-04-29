import supabase from "./supabase";

const getCabins = async function () {
  try {
    const { data: Cabins, error } = await supabase.from("Cabins").select("*");
    if (error) throw new Error("Could not load cabins 😕");
    return Cabins;
  } catch (err) {
    console.error(err, "Error from (apiCabins.js)");
  }
};

export default getCabins;
