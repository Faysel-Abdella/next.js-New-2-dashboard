import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

const DropDown = ({
  options,
  defaultSelectedKeys,
  selectStyles,
  insideStyles,
}: {
  options: { key: string; label: string }[];
  defaultSelectedKeys: string;
  selectStyles?: string;
  insideStyles?: string;
}) => {
  return (
    <div className="flex items-center ">
      <div>
        <Select
          classNames={{
            mainWrapper: [
              `${selectStyles} border-1 border-[#CFD4DA]  rounded-md text-[#868F9A]`,
            ],
            trigger: [`${insideStyles}   bg-[#ffffff] rounded-md`],
            value: ["text-[15px] "],
          }}
          disallowEmptySelection={true}
          defaultSelectedKeys={[defaultSelectedKeys]}
          aria-label="Toggle selection"
        >
          {options.map((option) => (
            <SelectItem key={option.key}>{option.label}</SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default DropDown;
