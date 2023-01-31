import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Main = () => {
  return (
    <section className="main">
      <Container fluid>
        <Row className="text-center py-3">
          <Col>
            $100,000
            <p>Loan Amount</p>
          </Col>

          <Col>
            $100
            <p>Monthly Payment</p>
          </Col>
        </Row>
        <Row className="text-center py-3">
          <Col>
            $100,000
            <p>Total Repaid</p>
          </Col>

          <Col>
            $100
            <p>Total Interest Paid</p>
          </Col>
        </Row>
        <Row className="text-center py-3">
          <Col>
            $100,000
            <p>Down Payment</p>
          </Col>
          <Col>
            $100
            <p>% of Down Payment</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Main;
