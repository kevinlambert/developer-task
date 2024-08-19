import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { UserListSelect } from "./design-system/connected-components/UserListSelect";
import { ItemProps } from "./design-system/ui-components/select/ListItem";

function App() {
  const [selectedUser, setSelectedUser] = useState<ItemProps>();

  const userSelected = (item: ItemProps) => {
    setSelectedUser(item);
    console.log(item);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="form-container">
          <UserListSelect onSelect={userSelected} />
        </div>
      </header>
    </div>
  );
}

export default App;
