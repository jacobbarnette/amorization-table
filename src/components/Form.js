import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Form = () => {
  const [loanAmount, setLoanAmount] = useState("500000");
  const [downPayment, setDownPayment] = useState("5000");
  const [loanDuration, setLoanDuration] = useState("30");
  const [interestRates, setInterestRates] = useState("5");
  return (
    <section className="loanForm">
      <Container fluid>
        <Row className="text-center py-3">
          <Col>
            <p>{Number(loanAmount) - Number(downPayment)}</p>
            <input
              min="0"
              max="1000000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              type="range"
            />
            <p>Loan Amount</p>
          </Col>

          <Col>
            <p>{downPayment}</p>
            <input
              min="0"
              max="1000000"
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}
              type="range"
            />
            <p>Down Payment</p>
          </Col>
        </Row>
        <Row className="text-center py-3">
          <Col>
            <p>{loanDuration} years</p>
            <input
              min="1"
              max="30"
              value={loanDuration}
              onChange={(e) => setLoanDuration(e.target.value)}
              type="range"
            />
            <p>Duration of Loan</p>
          </Col>

          <Col>
            <p>{interestRates} %</p>
            <input min="1" max="100" step="1" type="range" />
            <p>Interest Rate</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Form;
