import supabase from "./supabase";

export const login = async function ({ email, password }) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) throw new Error(error.message);
    console.log(data);
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
