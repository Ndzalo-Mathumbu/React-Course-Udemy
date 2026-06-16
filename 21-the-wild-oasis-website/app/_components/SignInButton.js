import Image from "next/image";
import { signInAction } from "../_lib/actions";
import { Suspense } from "react";
import SpinnerMini from "./SpinnerMini";

function SignInButton() {
  return (
    <form action={signInAction}>
      <button className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium">
        <Suspense fallback={<SpinnerMini />} key={"hrbf983u4b2498hrf"}>
          <Image
            src="https://authjs.dev/img/providers/google.svg"
            alt="Google logo"
            height="24"
            width="24"
          />
        </Suspense>
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
