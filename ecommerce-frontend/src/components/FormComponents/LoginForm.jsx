import { useForm, useWatch } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoggedIn, setUser } from "../../store/Actions/clientActions";

export default function LoginForm() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.client.user);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm({
    defaultValues: { email: "", password: "", rememberMe: false },
    mode: "all",
  });

  const navigate = useNavigate();

  const rememberMe = useWatch({
    control,
    name: "rememberMe",
    defaultValue: false,
  });

  const onSubmit = (formData) => {
    axios
      .post("https://workintech-fe-ecommerce.onrender.com/login", formData)
      .then((res) => {
        // console.log("success");
        // console.log("res data", res.data);

        const token = res.data.token;

        if (rememberMe) {
          localStorage.setItem("token", token);
        } else {
          sessionStorage.setItem("token", token);
        }

        dispatch(setUser(res.data));
        dispatch(setIsLoggedIn(true));

        toast.success("Login successful!");

        setTimeout(() => {
          if (window.history.length > 1) {
            navigate(-1);
          } else {
            navigate("/");
          }
        }, 2000);
      })
      .catch((err) => {
        //console.log(err);
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
            className="w-6 h-6"
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            {...register("rememberMe")}
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
