import { useState } from "react";
import { useForm } from "react-hook-form";
import { PiEyeThin, PiEyeSlashThin } from "react-icons/pi";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const password = watch("password", "");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center justify-center min-h-screen bg-slate-700">
        <div className="flex flex-col  m-6 space-y-6 bg-white shadow-6xl rounded-2xl p-6">
          <h2 className="font-mono mb-5 text-4xl font-bold text-cyan-700">
            Registration Form
          </h2>
          <div className="flex space-x-10">
            <div className="w-1/2">
              <label htmlFor="firstname">First Name</label>
              <input
                id="firstname"
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light transition duration-300 delay-100 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500"
                placeholder="Enter your first name"
                {...register("firstname", {
                  required: "Firstname is required",
                })}
              />
              {errors.firstname && (
                <p className="text-red-500 text-md  mt-2">
                  {errors.firstname.message}
                </p>
              )}
            </div>
            <div className="w-1/2">
              <label htmlFor="lastname">Last Name</label>
              <input
                id="lastname"
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light transition duration-300 delay-100 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500"
                placeholder="Enter your last name"
                {...register("lastname", { required: "lastname is required" })}
              />
              {errors.lastname && (
                <p className="text-red-500 text-md mt-2">
                  {errors.lastname.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light transition duration-300 delay-100 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500"
              placeholder="Enter your email address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Entered value does not match email format",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-md mt-2">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="flex space-x-10">
            <div className="w-1/2">
              <label htmlFor="password">Password</label>

              <div className="flex flex-col">
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className=" w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light transition duration-300 delay-100 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500"
                    placeholder="Enter your password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must have at least 6 characters",
                      },
                    })}
                  />
                  <div
                    onClick={togglePasswordVisibility}
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "12px",
                      cursor: "pointer",
                    }}
                  >
                    {showPassword ? <PiEyeSlashThin /> : <PiEyeThin />}
                  </div>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-md mt-2">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
            <div className="w-1/2">
              <label htmlFor="confirmPassword">Confirm password</label>
              <input
                id="confirmPassword"
                type="password"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light transition duration-300 delay-100 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500"
                placeholder="Enter your password"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === password || "The passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-md mt-2">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col space-y-2 ">
            <div className="flex space-x-2">
              <input
                type="checkbox"
                className="font-thin text-cyan-700"
                {...register("terms", {
                  required: "You must accept the terms and conditions",
                })}
              />
              <p>I agree to the terms and conditions</p>
            </div>
            {errors.terms && (
              <p className="text-red-500 text-md mt-2">
                {errors.terms.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-32 p-2 font-sans font-bold text-white rounded-md shadow-lg px-5 bg-cyan-700 shadow-cyan-100 border"
          >
            Register
          </button>

          <div>
            <div className=" border-b border-b-gray-300"></div>

            <p className="py-6 text-sm font-thin text-center text-gray-400">
              or sign in with
            </p>

            <div className="flex space-x-4">
              <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
                <img src="images/facebook.png" alt="" className="w-9" />
                <span className="font-thin">Facebook</span>
              </button>
              <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
                <img src="images/google.png" alt="" className="w-9" />
                <span className="font-thin">Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
