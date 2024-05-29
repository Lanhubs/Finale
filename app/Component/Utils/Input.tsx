import React, { DetailedHTMLProps, LabelHTMLAttributes } from "react";
interface InputProps{
    onChange?: (event: React.ChangeEvent<HTMLInputElement>)=>Void;
    value ?: string;
    label: String;
    name: String | any
    placeholder: string | any

}
export default ({onChange, value, label, name, placeholder}: InputProps)=>{
    return (
        <div className="w-full flex-col space-y-2 mt-2">
            <label htmlFor={name} className="mt-[0.5rem] ">{label}</label>
            <input placeholder={placeholder} type="text" className="px-4 w-full py-3 rounded-md outline-none  border-2 border-solid border-green-600 bg-gray-800" />
        </div>
    )
}