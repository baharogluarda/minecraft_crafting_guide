import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "./craft-menu.scss"; 

export const CraftMenu = () => {
  return (
    <div className="page-container">
      <div className="card-container">
        <Card title="Minecraft Crafting" className="minecraft-card">
          <p>
            Explore and craft various items in Minecraft. Follow the recipes to
            create your favorite items!
          </p>
          <Button label="Learn More" className="p-button-primary" />
        </Card>
        <Card title="Crafting Table" className="minecraft-card">
          <p>
            Use the crafting table to combine materials and create new items for
            your adventure.
          </p>
          <Button label="Start Crafting" className="p-button-success" />
        </Card>
      </div>
    </div>
  );
};
