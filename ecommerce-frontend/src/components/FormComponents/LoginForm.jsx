import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Toastify import edildi

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: { email: "", password: "" },
    mode: "all",
  });
  const navigate = useNavigate();

  const onSubmit = (formData) => {
    axios
      .post("https://workintech-fe-ecommerce.onrender.com/login", formData)
      .then((res) => {
        console.log("loginSucces");
        navigate("/home");
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
          <label className="text-[#252B42] text-lg" htmlFor="email">
            Email Address*
          </label>

          <input
            className="py-9 px-4 rounded-[5px] border border-solid border-[#E6E6E6] text-[#737373] text-xl"
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
          {errors.email && (
            <p className="text-[#23A6F0]">{errors.email.message}</p>
          )}
        </div>
        <div className="w-3/5 flex flex-col gap-2">
          <label className="text-[#252B42] text-lg" htmlFor="password">
            Password
          </label>

          <input
            className="py-9 px-4  rounded-[5px] border border-solid border-[#E6E6E6] text-[#737373] text-xl"
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password field cannot be left blank",
            })}
          />
          {errors.password && (
            <p className="text-[#23A6F0]">{errors.password.message}</p>
          )}
        </div>
        <div>
          <button
            className="button-primary bg-[#23A6F0] text-white text-xl"
            type="submit"
            disabled={!isValid}
          >
            Login
          </button>
        </div>

        <a className="a-gray hover:text-[#23A6F0]" href="/register">
          Don't have an account yet? Register
        </a>
      </form>
    </section>
  );
}
