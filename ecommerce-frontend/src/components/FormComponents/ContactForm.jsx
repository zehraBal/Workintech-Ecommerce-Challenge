import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function Contactform() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      fullname: "",
      email: "",
      department: "0",
      time: "0",
      message: "",
    },
    mode: "all",
  });

  const onSubmit = (formData) => {
    axios
      .post("https://reqres.in/api/login", formData)
      .then((res) => {
        toast.success("We will get back to you as soon as possible.");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        toast.warning(
          "An error occurred while trying to book an appointment. Please try again!"
        );
      });
  };
  return (
    <div className="flex justify-center items-center flex-wrap">
      <form
        className="flex flex-col gap-5 justify-between items-center "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex gap-5 items-center sm:flex-col sm:justify-center">
          <div className="flex flex-col gap-2">
            <label htmlFor="fullname">Full Name *</label>
            <input
              {...register("fullname", {
                required: true,
                maxLength: {
                  value: 50,
                  message: "Full name cannot exceed 50 characters",
                },
                minLength: {
                  value: 5,
                  message: "Full name must be at least 5 characters",
                },
                message: "Full name must be between 5-50 characters.",
              })}
              className="contact-form-input items-start"
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Full Name*"
            />
            {errors.fullname?.type === "required" && (
              <p role="alert" className="text-[#23A6F0] text-xs m-0">
                Full name is required
              </p>
            )}
            {errors.fullname && (
              <p role="alert" className="text-[#23A6F0] text-xs m-0">
                {errors.fullname.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2 items-start">
            <label htmlFor="email">Email *</label>
            <input
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              className="contact-form-input"
              type="email"
              name="email"
              id="email"
              placeholder="Email *"
            />
            {errors.email?.type === "required" && (
              <p role="alert" className="text-[#23A6F0] text-xs m-0 ">
                Email is required
              </p>
            )}
            {errors.email && (
              <p role="alert" className="text-[#23A6F0]">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex gap-5 items-center justify-between sm:flex-col sm:justify-center">
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="department">Department</label>
            <select
              {...register("department")}
              className="contact-form-input w-[200px]"
              name="department"
              id="department"
            >
              <option value={0}>Customer Service</option>
              <option value={1}>Sales Department</option>
              <option value={2}>Technical Support</option>
              <option value={3}>Returns & Exchanges</option>
              <option value={4}>Returns & Exchanges</option>
              <option value={5}>Partnerships </option>
              <option value={6}>Complaints & Suggestions</option>
              <option value={7}>Human Resources</option>
            </select>
          </div>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="time">Time</label>
            <select
              {...register("time")}
              className="contact-form-input w-[200px]"
              name="time"
              id="time"
            >
              <option value={0}>4.00 Available</option>
              <option value={1}>2.00 Available</option>
              <option value={2}>12.00 Available </option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start sm:hidden">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            className="contact-form-input"
            type="text"
            rows={"4"}
            cols={"60"}
          />
        </div>
        <div>
          <button
            disabled={!isValid}
            type="submit"
            className={`button-primary leading-[22px] text-white
                ${
                  isValid
                    ? "bg-[#23A6F0] hover:bg-[#1e90ff]"
                    : "bg-gray-400 hover:bg-gray-400 cursor-not-allowed"
                }
              `}
          >
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
}
