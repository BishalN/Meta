import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import type { FormState, UseFormRegister } from "react-hook-form";
import type { RegisterUserInputs } from "../pages/register";
import clsx from "clsx";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  register: UseFormRegister<RegisterUserInputs>;
  formState: FormState<RegisterUserInputs>;
  name: keyof RegisterUserInputs;
};

export const Input: React.FC<InputProps> = ({
  register,
  formState: { errors },
  name,
  ...rest
}) => {
  console.log(errors);
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        Email
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          {...register(name, { required: true })}
          {...rest}
          className={`block w-full rounded-md ${clsx(
            errors[name] &&
              "border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500"
          )}  focus:outline-none sm:text-sm ${rest.className}`}
        />
        {errors[name] && (
          <>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ExclamationCircleIcon
                className="h-5 w-5 text-red-500"
                aria-hidden="true"
              />
            </div>
            <p className="mt-2 text-sm text-red-600">{errors[name]!.message}</p>
          </>
        )}
      </div>
    </div>
  );
};
