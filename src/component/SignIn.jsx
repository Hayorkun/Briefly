import { EyeIcon, MailIcon } from "lucide-react";

const SignIn = () => {
  return (
    <section className="h-[90vh] relative overflow-hidden flex items-center justify-center">
      <div className="glow absolute w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
      <div className="glow-reverse absolute w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
      <div className="relative z-10 rounded-xl w-sm p-10 flex flex-col bg-white/5 backdrop-blur-md shadow-white/20 shadow-md">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-2xl mb-2">
            Welcome to Briefly<span className="text-teal-400">.</span>!
          </h1>
          <p className="text-center max-w-70 text-[10px] text-white/45 mb-5">
            Credentials is only used to authenticate in proofhub. All saved data
            will be stored in your database.
          </p>
        </div>
        <form className="flex flex-col gap-5 font-semibold text-xs">
          <label
            htmlFor="firstName"
            className="flex flex-col max-w-xs border-b"
          >
            {" "}
            First name
            <input type="text" className="p-1.5" />
          </label>
          <label htmlFor="lastName" className="flex flex-col max-w-xs border-b">
            {" "}
            Last name
            <input type="text" className="p-1.5" />
          </label>
          <label htmlFor="email" className="flex flex-col max-w-xs border-b">
            {" "}
            Email
            <div className="flex justify-between">
              <input type="email" className="w-[90%] p-1.5" />{" "}
              <MailIcon className="size-4" />
            </div>
          </label>
          <label htmlFor="password" className="flex flex-col max-w-xs border-b">
            {" "}
            Password
            <div className="flex justify-between">
              <input type="password" className="w-[90%] p-1.5" />{" "}
              <EyeIcon className="size-4" />
            </div>
          </label>
          <button type="bmit" className="p-2 rounded-md bg-teal-300/40 text-teal-200 hover:opacity-90 active:scale-[0.99] transition-all duration-200 ease-in-out">Sign in</button>
        </form>
        
      </div>
    </section>
  );
};

export default SignIn;
