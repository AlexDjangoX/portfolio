import { ContactFieldType } from '@/types';

const ContactField = ({
  label,
  id,
  type = 'text',
  getInputStyle,
  register,
  errors,
}: ContactFieldType) => {
  return (
    <div className="max-w-[21.6rem] s:max-w-[35rem] md:max-w-[40rem]">
      <label
        htmlFor={id}
        className="mb-4 block text-lg font-normal leading-[160%] text-black-300 dark:text-white-900 md:text-xl"
      >
        {label}
      </label>
      <input
        {...register(id)}
        type={type}
        className={getInputStyle(errors[id])}
      />
      {errors[id] && (
        <p className="mb-[2rem] mt-[-2rem] text-sm text-red-500">
          {errors[id].message}
        </p>
      )}
    </div>
  );
};

export default ContactField;
