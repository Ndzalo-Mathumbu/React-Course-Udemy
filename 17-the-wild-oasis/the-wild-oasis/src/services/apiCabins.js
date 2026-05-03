import toast from "react-hot-toast";
import supabase from "./supabase";

const getCabins = async function () {
  try {
    const { data: Cabins, error } = await supabase.from("Cabins").select("*");
    if (error) throw new Error("Could not load cabins 😕");
    return Cabins;
  } catch (err) {
    console.error(err, "Error from (apiCabins.js)");
    throw err;
  }
};

const deleteCabin = async function (cabinId) {
  try {
    const { data: Cabins, error } = await supabase
      .from("Cabins")
      .delete()
      .eq("id", cabinId);
    if (error) throw new Error("Could not delete cabin 😕");
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const addCabin = async function (newCabin) {
  try {
    const { data: Cabin, error } = await supabase
      .from("Cabins")
      .insert([newCabin])
      .select();
    if (error) throw new Error("Could not create cabin 😕");
  } catch (error) {
    toast.error(error);
  }
};

export { deleteCabin, addCabin };
export default getCabins;
