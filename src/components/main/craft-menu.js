"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Card } from "primereact/card";
import "./craft-menu.scss";
import { ItemFrame } from "../item-frame/item-frame";

// categories/index.js üzerinden tüm kategorileri import et
import { tools, basics, blocks, weapons } from "@/data/categories";

export const CraftMenu = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  // Minecraft kategorileri
  const categories = {
    Tools: tools,
    Basics: basics,
    Blocks: blocks,
    Weapons: weapons,
  };

  return (
    <div className="page-container">
      <div className="card-container">
        <Card title="Minecraft Crafting" className="minecraft-card">
          {selectedItem && (
            <div className="item-details">
              <h3>{selectedItem.name}</h3>
              <Image
                src={selectedItem.img}
                alt={selectedItem.name}
                width={120} // Genişlik
                height={120} // Yükseklik
                className="detail-image"
                priority // Sayfa yüklenirken hemen yüklensin
                unoptimized={
                  selectedItem.img.endsWith(".gif") ||
                  selectedItem.img.endsWith(".webp")
                } // Animasyonlu görselleri optimize etme
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
