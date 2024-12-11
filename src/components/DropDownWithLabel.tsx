import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

const DropDownWithLabel = ({
  title,
  options,
  defaultSelectedKeys,
  titleStyles,
  selectStyles,
  insideStyles,
}: {
  title: string;
  options: { key: string; label: string }[];
  defaultSelectedKeys: string;
  titleStyles?: string;
  selectStyles?: string;
  insideStyles?: string;
}) => {
  return (
    <div className="">
      <h4
        className={`${titleStyles} mb-2 text-nowrap text-sm font-bold text-mainGray`}
      >
        {title}
      </h4>
      <div>
        <Select
          className="text-mainGray"
          classNames={{
            value: ["text-[15px] text-gray"],
            listbox: ["text-mainGray"],
            mainWrapper: [
              `${selectStyles} bg-[#ffffff]  border-[#CFD4DA] rounded-md text-mainGray `,
            ],
            trigger: [
              `${insideStyles}  bg-[#ffffff] border-[1px] border-[#CFD4DA] text-mainGray`,
            ],
          }}
          disallowEmptySelection={true}
          defaultSelectedKeys={[defaultSelectedKeys]}
          aria-label="Toggle selection"
        >
          {options.map((option) => (
            <SelectItem key={option.key} className="text-mainGray">
              {option.label}
            </SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default DropDownWithLabel;
