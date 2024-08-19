import React, { useState } from "react";
import "./select.css";
import { ListItems, ItemProps, itemListType } from "./ListItem";

export interface SelectProps {
  itemList: itemListType;
  onSelect: (item: ItemProps) => void;
  onInputChange: (value: string) => void;
  className?: string;
  placeholder: string;
}

// TODO: Add ability to set default value
export const Select = ({
  itemList,
  onSelect,
  onInputChange,
  className,
  placeholder,
}: SelectProps) => {
  const [isShowDropDown, setIsShowDropDown] = useState("");
  const [inputValue, setInputValue] = useState("");

  const onDropDownClick = (item: ItemProps) => {
    setInputValue(item.title);
    onSelect(item);
  };

  const openDropDown = () => {
    setIsShowDropDown("tls-select__dropdown--show");
  };

  const closeDropDown = () => {
    setIsShowDropDown("");
  };

  const toggleDropDown = () => {
    isShowDropDown == "" ? openDropDown() : closeDropDown();
  };

  const handleBlur = () => {
    // The blur event fires before the click event. This allows us to capture the item that was clied before the dropdown closes
    setTimeout(() => {
      closeDropDown();
    }, 100);
  };

  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onInputChange(e.target.value);
  };

  return (
    <div className={"tls-select"} onBlur={handleBlur}>
      <input
        className={["tls-select-input", className].join(" ")}
        type="text"
        onClick={toggleDropDown}
        onChange={onInputChangeHandler}
        value={inputValue}
        placeholder={placeholder}
      />
      <div className={["tls-select__dropdown", isShowDropDown].join(" ")}>
        {<ListItems itemList={itemList} onClickHandler={onDropDownClick} />}
      </div>
    </div>
  );
};
