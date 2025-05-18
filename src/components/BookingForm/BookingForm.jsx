import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import css from "./BookingForm.module.css";

const today = new Date();
today.setHours(0, 0, 0, 0);

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  bookingDay: yup
    .date()
    .nullable()
    .min(today, "Past date is not allowed")
    .required("Booking date is required"),
  comment: yup.string().required("Comment is required"),
});

const BookingForm = () => {
  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      bookingDay: null,
      comment: "",
    },
  });

  const onSubmit = (data) => {
    const formattedDate = format(new Date(data.bookingDay), "dd-MM-yyyy");
    toast.success(
      `Dear ${data.name}, thank you for choosing us! Your booking on ${formattedDate} is confirmed.`,
      { duration: 6000 }
    );
    reset();
  };

  return (
    <section className={css.formBox}>
      <h3 className={css.formTitle}>Book your car now</h3>
      <p className={css.formText}>
        Stay connected! We are always ready to help you.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <div className={css.inputWrapper}>
          <input
            {...register("name")}
            className={css.field}
            placeholder="Name*"
          />
          <p className={css.error}>{errors.name?.message}</p>
        </div>

        <div className={css.inputWrapper}>
          <input
            {...register("email")}
            className={css.field}
            placeholder="Email*"
          />
          <p className={css.error}>{errors.email?.message}</p>
        </div>

        <div className={css.inputWrapper}>
          <Controller
            control={control}
            name="bookingDay"
            render={({ field }) => (
              <DatePicker
                className={css.field}
                selected={field.value}
                onChange={field.onChange}
                placeholderText="Booking date*"
                dateFormat="dd/MM/yyyy"
                minDate={today}
              />
            )}
          />
          <p className={css.error}>{errors.bookingDay?.message}</p>
        </div>

        <div className={css.inputWrapper}>
          <input
            {...register("comment")}
            className={css.fieldComment}
            placeholder="Comment*"
          />
          <p className={css.errorCom}>{errors.comment?.message}</p>
        </div>

        <button type="submit" className={css.btn}>
          Send
        </button>
      </form>
    </section>
  );
};

export default BookingForm;
