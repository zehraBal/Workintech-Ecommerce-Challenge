import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  saveCreditCard,
  updateCreditCard,
} from "../../store/Actions/clientActions";

export default function CreditCardForm({ card, onClose }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    if (card) {
      setValue("card_no", card.card_no);
      setValue("expire_month", card.expire_month);
      setValue("expire_year", card.expire_year);
      setValue("name_on_card", card.name_on_card);
    }
  }, [card, setValue]);

  const submitCard = (data) => {
    if (card) {
      dispatch(updateCreditCard(data));
    } else {
      dispatch(saveCreditCard(data));
    }
  };

  return (
    <form
      name="creditCard"
      onSubmit={handleSubmit(submitCard)}
      className="flex flex-col items-start gap-3  border shadow-md border-sec rounded-md p-5"
    >
      <label className="text-prim font-bold" htmlFor="card_no" id="card_no">
        Card Number:
      </label>
      <input
        className="contact-form-input"
        id="card_no"
        name="card_no"
        type="text"
        {...register("card_no", {
          required: "Card number is required",
          pattern: {
            value: /^[0-9]{16}$/,
            message: "Please enter a valid 16-digit card number",
          },
        })}
      />
      {errors.card_no && <p>{errors.card_no.message}</p>}

      <div className="flex gap-4">
        <div>
          <label
            className="mr-2 mb-2 text-prim font-bold"
            htmlFor="expire_month"
            id="expire_month"
          >
            Expiry Month:
          </label>
          <select
            className="contact-form-input"
            id="expire_month"
            name="expire_month"
            {...register("expire_month", {
              required: "Expiry month is required",
            })}
          >
            <option value="">Month</option>
            {[...Array(12)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {String(i + 1).padStart(2, "0")}
              </option>
            ))}
          </select>
          {errors.expire_month && <p>{errors.expire_month.message}</p>}
        </div>

        <div>
          <label
            className="mr-2 mb-2 text-prim font-bold"
            htmlFor="expire_year"
            id="expire_year"
          >
            Expiry Year:
          </label>
          <select
            className="contact-form-input"
            id="expire_year"
            name="expire_year"
            {...register("expire_year", {
              required: "Expiry year is required",
            })}
          >
            <option value="">Year</option>
            {[...Array(10)].map((_, i) => {
              const year = new Date().getFullYear() + i;
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
          {errors.expire_year && <p>{errors.expire_year.message}</p>}
        </div>
      </div>

      <label
        className="text-prim font-bold"
        htmlFor="name_on_card"
        id="name_on_card"
      >
        Name on Card:
      </label>
      <input
        className="contact-form-input"
        id="name_on_card"
        name="name_on_card"
        type="text"
        {...register("name_on_card", {
          required: "Name on card is required",
          minLength: { value: 3, message: "Minimum 3 characters required" },
        })}
      />
      {errors.name_on_card && <p>{errors.name_on_card.message}</p>}

      <button className="bg-blue text-white button-sm" type="submit">
        {card ? "Update Card" : "Add Card"}
      </button>
      <button
        type="button"
        onClick={onClose}
        className="bg-[#EED202] text-white button-sm"
      >
        Cancel
      </button>
    </form>
  );
}
