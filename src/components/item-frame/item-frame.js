import React from "react";
import "./item-frame.scss";

export const ItemFrame = ({ item, onClick, isSelected }) => {
  return (
    <div
      className={`item-frame ${isSelected ? "selected" : ""}`}
      onClick={onClick}
      style={{
        backgroundImage: `url(${item.img})`, // Arka plan olarak resmi burada veriyoruz
      }}
    ></div>
  );
};
