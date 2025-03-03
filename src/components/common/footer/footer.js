import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="g-4">
          <Col xs={12}>
            © ACTdesign | This site is not an official Minecraft service and is
            not approved by or associated with Mojang or Microsoft | Terms |
            Privacy
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
