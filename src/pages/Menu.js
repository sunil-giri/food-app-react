import React from "react";
import { MenuList } from "../helpers/MenuList";
import "../styles/Menu.css";

function Menu() {
  return (
    <>
      <h1>Menu Items</h1>
      <div className="menu-container">
        {MenuList.map((val, i) => {
          return (
            <div className="menu-card">
              <img src={val.image} alt={val.name} />
              <h2>{val.name}</h2>
              <h3>${val.price}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Menu;
