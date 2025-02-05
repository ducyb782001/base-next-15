import React from "react";
import TextContent from "./TextContent";
import { ContentType } from "@/constants/enum/component.enum";

function PrimaryInput({
  title = null,
  className = "",
  placeholder = "",
  type = "",
  onChange = undefined,
  classNameInput = "",
  id = "",
  message = "",
  note = null,
  accessoriesLeft = null,
  accessoriesRight = null,
  value = undefined,
  disabled = false,
  classNameAccessoriesRight = "",
  classNameAccessoriesLeft = "",
  readOnly = false,
  required = false,
  readOnlyCss = true,
  ...props
}) {
  return (
    <div className={`${className}`}>
      {title && (
        <TextContent
          type={ContentType.DESCRIPTION}
          className="mb-2 font-semibold text-xs text-textBlack"
        >
          {title} {required && <span className="text-red-500">*</span>}
        </TextContent>
      )}
      {note && <div className="mb-2 text-[13px] text-gray">{note}</div>}
      <div className="relative w-full">
        {accessoriesLeft && (
          <div className={`absolute top-3 left-4 ${classNameAccessoriesLeft}`}>
            {accessoriesLeft}
          </div>
        )}

        <input
          id={id}
          placeholder={placeholder}
          {...props}
          autoFocus={false}
          type={type}
          onChange={onChange}
          value={value}
          disabled={disabled}
          className={`placeholder-gray w-full text-base py-3 rounded-xl outline-none px-4 bg-[#E7E7EE] text-black border border-backTextOff focus:border-primary hover:border-primary smooth-transform placeholder:font-semibold placeholder:text-[#737087] ${
            accessoriesLeft && "pl-12"
          } ${accessoriesRight && "pr-12"}
              ${classNameInput} ${
            readOnlyCss && "read-only:bg-[#9392AA] read-only:text-[#D6D5E2]"
          }`}
          tabIndex={-1}
          readOnly={readOnly}
          onBlur={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        />
        {message && (
          <TextContent
            type={ContentType.SHORT_DESCRIPTION}
            className="mt-2 text-red-600 smooth-transform"
          >
            {message}
          </TextContent>
        )}
        {accessoriesRight && (
          <div
            className={`absolute cursor-pointer top-[13px] right-4 ${classNameAccessoriesRight}`}
          >
            {accessoriesRight}
          </div>
        )}
      </div>
    </div>
  );
}

export default PrimaryInput;
