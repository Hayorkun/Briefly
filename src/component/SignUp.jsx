import { EyeIcon, MailIcon } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { BsApple, BsGithub } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [errors, setErrors] = useState();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (f) => {
    setFormData({
      ...formData,
      [f.target.name]: f.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = "First name required";
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last name required";
    }
    if (!formData.email) {
      newErrors.email = "Email required";
    }
    if (!formData.password) {
      newErrors.password = "Password required";
    }

    setErrors(newErrors);
  };

  return (
    <section className="h-[90vh] relative overflow-hidden flex items-center justify-center">
      <div className="glow absolute w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
      <div className="glow-reverse absolute w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
      <div className="relative z-10 rounded-xl w-md p-10 flex flex-col bg-white/5 backdrop-blur-md shadow-white/20 shadow-md">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-2xl mb-2">
            Welcome to Briefly<span className="text-teal-400">.</span>!
          </h1>
          <p className="text-center max-w-70 text-[10px] text-white/45 mb-5">
            Credentials are only used to authenticate in{" "}
            <span className="text-white bold">proofhub</span>. All saved data
            will be stored in your database.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 font-semibold text-xs mb-5"
        >
          <label
            htmlFor="firstName"
            className="flex flex-col max-w-sm border-b"
          >
            {" "}
            First name
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="p-1.5 bg-transparent outline-none"
            />
          </label>
           {errors?.firstName && (
            <p className="text-xs text-red-500">{errors.firstName}</p>
          )}
          
          <label htmlFor="lastName" className="flex flex-col max-w-sm border-b">
            {" "}
            Last name
            <input
              id="lastName"
              type="text"
              className="p-1.5 bg-transparent outline-none"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </label>
          {errors?.lastName && (<p className="text-xs text-red-500">{errors.lastName}</p>)}
          <label htmlFor="email" className="flex flex-col max-w-sm border-b">
            {" "}
            Email
            <div className="flex justify-between">
              <input
                id="email"
                type="email"
                className="w-[90%] p-1.5 bg-transparent outline-none"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />{" "}
              <MailIcon className="size-5" />
            </div>
          </label>
          {
            errors?.email && (<p className="text-xs text-red-500">{errors.email}</p>)
          }
          <label htmlFor="password" className="flex flex-col max-w-sm border-b">
            {" "}
            Password
            <div className="flex justify-between">
              <input
                id="password"
                type="password"
                className="w-[90%] p-1.5 bg-transparent outline-none"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />{" "}
              <EyeIcon className="size-5" />
            </div>
          </label>
          {errors?.password && (<p className="text-xs text-red-500">{errors.password}</p>)}
          <button
            type="submit"
            className="p-2 rounded-md bg-teal-300/40 text-teal-200 hover:opacity-90 active:scale-[0.99] transition-all duration-200 ease-in-out"
          >
            Sign up
          </button>
        </form>
        <div className="justify-center mx-auto flex flex-col">
          <div className="w-70 items-center justify-between flex mb-5">
            <FcGoogle className="size-5" />
            <BsApple className="size-5" />
            <BsGithub className="size-5" />
          </div>
          <p className="text-center t">
            Already a user?{" "}
            <NavLink to="/loginpage" className="text-teal-400 ml-1">
              Log in
            </NavLink>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
