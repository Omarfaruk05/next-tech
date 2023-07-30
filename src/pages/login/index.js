import { AiFillGithub } from "react-icons/ai";
import dynamic from "next/dynamic";
import { signIn } from "next-auth/react";

const RootLayout = dynamic(() => import("@/components/Layout/RootLayout"), {
  ssr: false,
});

const LoginPage = () => {
  return (
    <div>
      <div className="grid grid-cols-1 items-center h-[93vh]">
        <div className="text-center mx-8 -mt-24">
          <h1 className="text-xl font-bold font-serif mb-8">
            Sign Up With Social...
          </h1>

          <div>
            <button
              onClick={() =>
                signIn("github", {
                  callbackUrl: "https://tech-next-delta.vercel.app",
                })
              }
              className="btn btn-sm rounded-sm w-72 bg-slate-500 text-white hover:bg-slate-600 hover:rounded-md"
            >
              <AiFillGithub className="w-6 h-6" />
              <span>Sign with GitHub</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
