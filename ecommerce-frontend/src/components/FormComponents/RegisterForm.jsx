import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      role_id: "0",
      store: {
        name: "",
        phone: "",
        tax_no: "",
        bank_account: "",
      },
    },
    mode: "all",
  });
  const navigate = useNavigate();
  const [isStore, setIsStore] = useState(false);
  const watchRole = watch("role_id");
  const watchPassword = watch("password");
  const [loading, setLoading] = useState(false);

  /* // Fetch roles from the API
  useEffect(() => {
    axiosInstance.get("/roles").then((response) => {
      setRoles(response.data);
    });
  }, []);*/

  useEffect(() => {
    setIsStore(watchRole === "1");
  }, [watchRole]);

  const passwordPattern = {
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters long",
    },
    pattern: {
      value:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    },
  };

  const onSubmit = (formData) => {
    setLoading(true);
    axiosInstance
      .post("/signup", formData)
      .then((res) => {
        setLoading(false);
        toast.success(
          "You need to click the link in the email to activate your account!"
        );
        if (window.history.length > 1) {
          navigate(-1); // Bir önceki sayfaya yönlendirme
        } else {
          navigate("/");
        }
        //  console.log(res);
      })
      .catch((err) => {
        setLoading(false);
        //  console.log(err);
        toast.error("An error occurred while registering. Please try again!");
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" flex flex-col gap-4 items-center"
    >
      {/* Name Field */}
      <div className="w-1/2 flex flex-col items-start justify-between gap-2">
        <label htmlFor="name" id="name">
          Name *
        </label>
        <input
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters long",
            },
          })}
          className="contact-form-input w-full"
          type="text"
          placeholder="Name"
          id="name"
        />
        {errors.name && (
          <p role="alert" className="text-[#23A6F0]">
            {errors.name.message}
          </p>
        )}
      </div>
      {/* Email Field */}
      <div className="flex flex-col items-start justify-between gap-2 w-1/2">
        <label htmlFor="email" id="email">
          Email *
        </label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          })}
          className="contact-form-input w-full"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
        {errors.email && (
          <p role="alert" className="text-[#23A6F0]">
            {errors.email.message}
          </p>
        )}
      </div>
      {/* Password Field */}
      <div className="flex flex-col items-start justify-between gap-2 w-1/2">
        <label htmlFor="password" id="password">
          Password *
        </label>
        <input
          {...register("password", passwordPattern)}
          className="contact-form-input w-full"
          type="password"
          name="password"
          id="password"
          placeholder="Your password"
        />
        {errors.password && (
          <p role="alert" className="text-[#23A6F0]">
            {errors.password.message}
          </p>
        )}
      </div>
      {/* Password Confirm Field */}
      <div className="flex flex-col items-start justify-between gap-2 w-1/2">
        <label htmlFor="passwordConfirm" id="passwordConfirm">
          Confirm Password *
        </label>
        <input
          {...register("passwordConfirm", {
            required: "Please confirm your password",
            validate: (value) =>
              value === watchPassword || "Passwords do not match",
          })}
          className="contact-form-input w-full"
          type="password"
          name="passwordConfirm"
          id="passwordConfirm"
          placeholder="Confirm password"
        />
        {errors.passwordConfirm && (
          <p role="alert" className="text-[#23A6F0]">
            {errors.passwordConfirm.message}
          </p>
        )}
      </div>
      {/* Role Selection */}
      <div className="flex flex-col items-start justify-between gap-2 w-1/2">
        <label htmlFor="role_id" id="role_id">
          Role *
        </label>
        <select
          {...register("role_id", { required: true })}
          className="contact-form-input w-full"
          id="role_id"
        >
          <option value={0}>Customer</option>
          <option value={1}>Store </option>
        </select>
      </div>
      {/* Store Fields (appear if role is "Store") */}
      {isStore && (
        <>
          <div className="w-1/2 flex flex-col items-start justify-between gap-2">
            <label htmlFor="storeName" id="storeName">
              Store Name *
            </label>
            <input
              {...register("store.name", {
                required: "Store name is required",
                minLength: {
                  value: 3,
                  message: "Store name must be at least 3 characters long",
                },
              })}
              className="contact-form-input w-full"
              type="text"
              placeholder="Store Name"
              id="storeName"
            />
            {errors.store?.name && (
              <p role="alert" className="text-[#23A6F0]">
                {errors.store.name.message}
              </p>
            )}
          </div>

          <div className="w-1/2 flex flex-col items-start justify-between gap-2">
            <label htmlFor="storePhone" id="storePhone">
              Store Phone *
            </label>
            <input
              {...register("store.phone", {
                required: "Store phone is required",
                pattern: {
                  value: /^(\+90|0)?5\d{9}$/,
                  message: "Invalid phone number",
                },
              })}
              className="contact-form-input w-full"
              type="text"
              placeholder="Store Phone"
              id="storePhone"
            />
            {errors.store?.phone && (
              <p role="alert" className="text-[#23A6F0]">
                {errors.store.phone.message}
              </p>
            )}
          </div>

          <div className=" w-1/2 flex flex-col items-start justify-between gap-2">
            <label htmlFor="tax_no" id="tax_no">
              Store Tax ID *
            </label>
            <input
              {...register("store.tax_no", {
                required: "Tax ID is required",
                pattern: {
                  value: /^T\d{4}V\d{6}$/,
                  message: "Invalid Tax ID format",
                },
              })}
              className="contact-form-input w-full"
              type="text"
              placeholder="Tax ID"
              id="tax_no"
            />
            {errors.store?.tax_no && (
              <p role="alert" className="text-[#23A6F0]">
                {errors.store.tax_no.message}
              </p>
            )}
          </div>

          <div className="flex flex-col items-start justify-between gap-2 w-1/2">
            <label htmlFor="bank_account" id="bank_account">
              Store Bank Account *
            </label>
            <input
              {...register("store.bank_account", {
                required: "Bank account is required",
                pattern: {
                  value: /^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/,
                  message: "Invalid IBAN format",
                },
              })}
              className="contact-form-input w-full"
              type="text"
              placeholder="Bank Account (IBAN)"
              id="bank_account"
            />
            {errors.store?.bank_account && (
              <p role="alert" className="text-[#23A6F0]">
                {errors.store.bank_account.message}
              </p>
            )}
          </div>
        </>
      )}
      {/* Submit Button */}
      <button
        type="submit"
        disabled={!isValid || loading}
        className={`button-primary leading-[22px] text-white relative
            ${
              isValid
                ? "bg-[#23A6F0] hover:bg-[#1e90ff]"
                : "bg-gray-400 hover:bg-gray-400 cursor-not-allowed"
            }
          `}
      >
        {loading ? <span className="spinner"></span> : "Submit"}
      </button>
      <span>
        <a className="a-gray hover:text-blue" href="/login">
          Already a member? Login
        </a>
      </span>{" "}
    </form>
  );
}
