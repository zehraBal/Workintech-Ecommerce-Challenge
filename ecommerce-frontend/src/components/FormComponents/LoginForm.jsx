import { useForm, useWatch } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: { email: "", password: "", rememberMe: false },
    mode: "all",
  });
  const navigate = useNavigate();
  //const rememberMe = useWatch("rememberMe");

  const onSubmit = (formData) => {
    axios
      .post("https://workintech-fe-ecommerce.onrender.com/login", formData)
      .then((res) => {
        console.log("loginSucces");
        if (window.history.length > 1) {
          navigate(-1);
        } else {
          navigate("/");
        }
        toast.success("Login successful!");
      })
      .catch((err) => {
        console.log(err);
        toast.warning(
          "An error occurred while trying to login. Please try again!"
        );
      });
  };

  return (
    <section className="flex justify-center items-center flex-wrap">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="basis-[70%] flex flex-col items-center py-[112px] gap-9 sm:gap-6"
      >
        <div>
          <h2>Login</h2>
        </div>
        <div className="w-3/5 flex flex-col gap-2">
          <label className="text-[#252B42] text-lg font-bold" htmlFor="email">
            Email Address*
          </label>

          <input
            className="contact-form-input text-[#737373] text-xl"
            type="email"
            placeholder="Email *"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <p className="text-blue">{errors.email.message}</p>}
        </div>
        <div className="w-3/5 flex flex-col gap-2">
          <label
            className="text-[#252B42] text-lg font-bold"
            htmlFor="password"
          >
            Password
          </label>

          <input
            className="contact-form-input text-[#737373] text-xl"
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password field cannot be left blank",
            })}
          />
          {errors.password && (
            <p className="text-blue">{errors.password.message}</p>
          )}
        </div>
        <div className="flex gap-2">
          <input
            className="w-6 h-6 "
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            value={"Remember"}
          />
          <label className="text-blue text-lg font-bold" htmlFor="rememberMe">
            Remember me
          </label>
        </div>
        <div>
          <button
            className={`button-primary text-xl text-white bg-blue
              ${
                isValid
                  ? ""
                  : "bg-gray-400 hover:bg-gray-400 cursor-not-allowed"
              }
            `}
            type="submit"
            disabled={!isValid}
          >
            Login
          </button>
        </div>

        <a className="a-gray hover:text-blue" href="/register">
          Don't have an account yet? Register
        </a>
      </form>
    </section>
  );
}
