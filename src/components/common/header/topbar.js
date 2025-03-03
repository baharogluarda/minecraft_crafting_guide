import React from "react";
import { Container } from "react-bootstrap";
import "./topbar.scss"; // SCSS dosyasını import ettik

export const Topbar = () => {
  return (
    <div className="topbar">
      <Container className="text_box">
        <h1>Minecraft Crafting Guide</h1>
      </Container>
    </div>
  );
};
