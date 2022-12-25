import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { clsx } from "clsx";
import { Input } from "../components/Input";

export type RegisterUserInputs = {
  fullName: string;
  username: string;
  emailAddress: string;
  password: string;
  confirmPassword: string;
};

export default function Register() {
  const { register, handleSubmit, formState } = useForm<RegisterUserInputs>();
  const onSubmit: SubmitHandler<RegisterUserInputs> = (data) =>
    console.log(data);

  return (
    <form className="m-2 space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <Input
        formState={formState}
        type="email"
        name="emailAddress"
        register={register}
      />
      {/* <input
        type="text"
        placeholder="Full Name"
        className={`w-full ${clsx(errors.fullName && "input-error")}  `}
        {...register("fullName", { required: true })}
      />
      <input
        type="text"
        placeholder="Username"
        className={`w-full ${clsx(errors.username && "input-error")} `}
        {...register("username", { required: true })}
      />
      <input
        type="text"
        placeholder="Email Address"
        className={`w-full ${clsx(errors.emailAddress && "input-error")}  `}
        {...register("emailAddress", { required: true })}
      />
      <input
        type="password"
        placeholder="Password"
        className={`w-full ${clsx(errors.password && "input-error")} `}
        {...register("password", { required: true })}
      />

      <input
        type="password"
        placeholder="Confirm Password"
        className={`w-full ${clsx(errors.confirmPassword && "input-error")}  `}
        {...register("confirmPassword", { required: true })}
      /> */}

      <input className="btn-primary btn" type="submit" value="Register" />
    </form>
  );
}
