import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  saveNewAddress,
  updateAddress,
} from "../../store/Actions/clientActions";
export default function OrderAddressForm({ address, onClose }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    // Set form values when `address` prop changes
    if (address) {
      setValue("title", address.title);
      setValue("name", address.name);
      setValue("surname", address.surname);
      setValue("phone", address.phone);
      setValue("city", address.city);
      setValue("district", address.district);
      setValue("neighborhood", address.neighborhood);
    }
  }, [address, setValue]);

  const submitAddress = (data) => {
    if (address) {
      dispatch(updateAddress(address));
    } else {
      dispatch(saveNewAddress(data));
    }
  };

  return (
    <form
      name="address"
      onSubmit={handleSubmit(submitAddress)}
      className="flex flex-col items-start gap-3 border border-solid border-sec p-4 rounded-md shadow-md"
    >
      <label htmlFor="title">Address Title</label>
      <input
        className="contact-form-input"
        id="title"
        name="title"
        type="text"
        {...register("title", {
          required: "Address title is required",
          minLength: { value: 3, message: "Minimum 3 characters required" },
        })}
      />
      {errors.title && <p>{errors.title.message}</p>}

      <label htmlFor="name">Name</label>
      <input
        className="contact-form-input"
        id="name"
        name="name"
        type="text"
        {...register("name", {
          required: "Name is required",
          minLength: { value: 2, message: "Minimum 2 characters required" },
        })}
      />
      {errors.name && <p>{errors.name.message}</p>}

      <label htmlFor="surname">Surname</label>
      <input
        className="contact-form-input"
        name="surname"
        id="surname"
        type="text"
        {...register("surname", {
          required: "Surname is required",
          minLength: { value: 2, message: "Minimum 2 characters required" },
        })}
      />
      {errors.surname && <p>{errors.surname.message}</p>}

      <label htmlFor="phone">Phone</label>
      <input
        className="contact-form-input"
        id="phone"
        name="phone"
        type="text"
        {...register("phone", {
          required: "Phone number is required",
          pattern: {
            value: /^[0-9]{10}$/,
            message: "Enter a valid 10-digit phone number",
          },
        })}
      />
      {errors.phone && <p>{errors.phone.message}</p>}

      <label htmlFor="city">City</label>
      <select
        className="contact-form-input"
        name="city"
        id="city"
        {...register("city", { required: "Please select a city" })}
      >
        <option value="">Select your city</option>
        <option value="istanbul">Istanbul</option>
        <option value="ankara">Ankara</option>
        <option value="izmir">Izmir</option>
      </select>
      {errors.city && <p>{errors.city.message}</p>}

      <label htmlFor="district">District</label>
      <input
        name="district"
        className="contact-form-input"
        id="district"
        type="text"
        {...register("district", { required: "District is required" })}
      />
      {errors.district && <p>{errors.district.message}</p>}

      <label htmlFor="neighborhood">Neighborhood</label>
      <input
        name="neighborhood"
        className="contact-form-input"
        id="neighborhood"
        type="text"
        {...register("neighborhood", {
          required: "Neighborhood is required",
        })}
      />
      {errors.neighborhood && <p>{errors.neighborhood.message}</p>}

      <button className="bg-blue text-white button-sm" type="submit">
        {address ? "Update Address" : "Submit Address"}
      </button>
      <button onClick={onClose} className="bg-[#EED202] text-white button-sm">
        Cancel
      </button>
    </form>
  );
}
