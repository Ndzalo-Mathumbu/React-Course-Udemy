import toast from "react-hot-toast";
import supabase, { supabase_URL } from "./supabase";

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
    // 1. Get actual file
    const imageFile = newCabin.image;

    // 2. Create unique name
    const imageName = `${Math.random()}-${imageFile?.name}`.replaceAll("/", "");

    // 3. Build image path
    const imagePath = `${supabase_URL}/storage/v1/object/public/cabin-img/${imageName}`;

    // 4. Insert cabin
    const { data: Cabin, error } = await supabase
      .from("Cabins")
      .insert([{ ...newCabin, image: imagePath }])
      .select();

    if (error) throw new Error("Could not create cabin 😕");

    // 5. Upload image
    const { error: storageError } = await supabase.storage
      .from("cabin-img")
      .upload(imageName, imageFile);

    // 6. Rollback if upload fails
    if (storageError) {
      await supabase.from("Cabins").delete().eq("id", Cabin[0].id);
      throw new Error("Could not upload image 😕");
    }
    console.log(imageFile instanceof File);
    console.log(newCabin.image);
    return Cabin;
  } catch (error) {
    console.error(error);
    toast.error(error.message);
  }
};

export { deleteCabin, addCabin };
export default getCabins;
