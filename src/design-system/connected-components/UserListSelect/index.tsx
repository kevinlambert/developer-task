import React, { useState, useEffect } from "react";

import { ItemProps } from "../../ui-components/select/ListItem";
import { Select } from "../../ui-components/select/Select";
import { itemListType } from "../../ui-components/select/ListItem";
import { getUserList } from "../services/userService";

export interface UserListSelectProps {
  onSelect: (item: ItemProps) => void;
}

export const UserListSelect = ({ onSelect }: UserListSelectProps) => {
  const [userList, setUserList] = useState<itemListType>([]);
  const [filteredList, setFilteredList] = useState<itemListType>([]);

  useEffect(() => {
    const fetchData = async () => {
      const userList = await getUserList();
      const userListData = userList.map((user) => ({
        key: user.id.toString(),
        image: user.image,
        title: `${user.firstName} ${user.lastName}`,
        subTitle: `@${user.username}`,
      }));

      setUserList(userListData);
      setFilteredList(userListData);
    };

    fetchData();
  }, []);

  const search = (value: string) => {
    const regex = new RegExp(`^${value}.*`, "gi");
    const filteredList = userList.filter(({ title }) => title.match(regex));
    setFilteredList(filteredList);
  };

  return (
    <Select
      itemList={filteredList}
      onInputChange={search}
      onSelect={onSelect}
      placeholder="Select user"
    />
  );
};
