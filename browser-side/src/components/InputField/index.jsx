import React from 'react';
import { ErrorMessage, useField } from 'formik';

const InputField = ({ edit, label, ...restProps }) => {
    const [field, meta] = useField(restProps);
    console.log(field, meta)
    return (
        <div className={`${edit}`}>
            <label htmlFor={field.name} className="block mb-3 text-base uppercase leading-7 text-white text-left">
                {label}
                <span className="text-red-500">*</span>
            </label>
            <input
                {...restProps}
                {...field}
                autoComplete="none"
                className={`text-white text-lg w-full h-11 bg-transparent border-b-2 border-gray-600 focus:border-b-2 focus:border-green-500 focus:outline-none
                    
                    ${meta.touched && meta.error && 'border-red-500'}
                 `} />
            <ErrorMessage name={field.name} className="text-red-500 text-left" component="div" />
        </div>
    );
};

export default InputField;