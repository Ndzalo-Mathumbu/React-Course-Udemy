import supabase, { supabase_URL } from "./supabase";

export const signup = async function ({ fullName, email, password }) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          fullName,
          avatar: "",
        },
      },
    });
    if (error) throw new Error(error.message);
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const login = async function ({ email, password }) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) throw new Error(error.message);
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getCurrentUser = async function () {
  try {
    const { data: session } = await supabase.auth.getSession();
    if (!session.session) return null;
    const { data: user, error } = await supabase.auth.getUser();
    if (error) throw new Error(error.message);
    return user?.user;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export const updateCurrentUser = async function ({
  password,
  fullName,
  avatar,
}) {
  //1 update the password or fullName

  /* let updateData;
  if (password) updateData = { password };
  if (fullName)
    updateData = {
      data: {
        fullName,
      },
    }; */

  let updateData = {};

  if (password) updateData.password = password;

  if (fullName)
    updateData.data = {
      fullName,
    };

  const { data, error } = await supabase.auth.updateUser(updateData);
  if (error) throw new Error(error.message);
  if (!avatar) return data;
  //2 upload the avatar image
  const fileName = `avatar-${data.user.id}-${Math.random()}`;
  const { error: storageError } = await supabase.storage
    .from("avaters")
    .upload(fileName, avatar);
  if (storageError) throw new Error(storageError.message);
  //3 use avatar to update the user
  const { data: updatedUser, error: error2 } = supabase.auth.updateUser({
    data: {
      avatar: `${supabase_URL}/storage/v1/object/public/avaters/${fileName}`,
    },
  });
  if (error2) throw new Error(error2.message);
  return updatedUser;
};
