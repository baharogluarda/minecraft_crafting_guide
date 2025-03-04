"use client";
import React, { useState } from "react";
import { Card } from "primereact/card";
import "./craft-menu.scss";
import { ItemFrame } from "../item-frame/item-frame";

export const CraftMenu = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  // Minecraft categories
  const categories = {
    Tools: [
      { name: "Wooden Pickaxe", img: "/images/wooden_pickaxe.png" },
      { name: "Stone Axe", img: "/images/stone_axe.png" },
    ],
    Basics: [
      { name: "Stick", img: "/images/stick.png" },
      { name: "Wood Plank", img: "/images/wood_plank.png" },
    ],
    Blocks: [
      { name: "Cobblestone", img: "/images/items/crafting_table_front.png" },
      { name: "Brick Block", img: "/images/brick_block.png" },
    ],
    Weapons: [
      { name: "Stone Sword", img: "/images/stone_sword.png" },
      { name: "Bow", img: "/images/bow.png" },
    ],
  };

  return (
    <div className="page-container">
      <div className="card-container">
        <Card title="Minecraft Crafting" className="minecraft-card">
          {selectedItem && (
            <div className="item-details">
              <h3>{selectedItem.name}</h3>
              <img
                src={selectedItem.img}
                alt={selectedItem.name}
                className="detail-image"
              />
            </div>
          )}

          <p>Click on an item to see its details!</p>

          <div className="category-grid">
            {Object.entries(categories).map(([category, items], index) => (
              <div key={index} className="category">
                <h2 className="category-title">{category}</h2>
                <div className="item-grid">
                  {items.map((item, idx) => (
                    <ItemFrame
                      key={idx}
                      item={item}
                      isSelected={selectedItem === item}
                      onClick={() => setSelectedItem(item)}
                      // `style` prop ile arka plan resmi veriliyor
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
