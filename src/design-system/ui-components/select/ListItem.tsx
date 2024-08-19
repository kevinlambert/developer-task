import React from "react";
import "./listItems.css";

const DEFAULT_PROFILE_IMAGE: string = ""; // TODO: set default image url

export type itemListType = Array<ItemProps>;

export interface ListProps {
  itemList: itemListType;
  onClickHandler: (item: ItemProps) => void;
}

export interface ItemProps {
  key: string;
  image?: string;
  title: string;
  subTitle?: string;
}

export const ListItems = ({
  itemList: userList,
  onClickHandler,
}: ListProps) => {
  return (
    <ul className="tls-list">
      {userList.map((item) => (
        <li
          key={item.key}
          className={"tls-listItem"}
          onClick={() => onClickHandler(item)}
        >
          <div className="tls-listItem__content">
            <img
              className="tls-listItem__profile"
              src={item.image || DEFAULT_PROFILE_IMAGE}
            />
            <div className="tls-listItem__text">
              <div>{item.title}</div>
              <div className="tls-listItem__sub-title">{item.subTitle}</div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
