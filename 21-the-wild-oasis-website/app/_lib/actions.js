"use server";
import { signIn, signOut } from "./auth";

export const signInAction = async function () {
  await signIn("google", { redirectTo: "/account" });
};
export const signOutAction = async function () {
  await signOut({ redirectTo: "/" });
};

export const UpdateProfile = async function () {
  console.log("SA");
};
