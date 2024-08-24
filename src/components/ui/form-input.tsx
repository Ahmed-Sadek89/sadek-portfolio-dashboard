import React from 'react';
import { useFormStatus } from 'react-dom';

interface Props {
    onBlur: () => void;
    name: string;
    placeholder: string;
    className?: string;
}

const FormInput = React.forwardRef<HTMLInputElement, Props>(({
    onBlur,
    name,
    placeholder,
    className
}, ref) => {
    const status = useFormStatus();
    return (
        <input
            disabled={status.pending}
            ref={ref}
            onBlur={onBlur}
            name={name}
            placeholder={placeholder}
            className={`disabled:cursor-not-allowed disabled:opacity-70 bg-transparent border border-[#2c2e33] rounded py-1 px-2 w-full focus:border-blue-900 outline-none ${className}`}
        />
    );
});

FormInput.displayName = "FormInput";
export default FormInput;
