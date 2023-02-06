import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AmoritizationTable from "./AmoritizationTable";

const Main = () => {
  const [loanAmount, setLoanAmount] = useState("209900");
  const [downPayment, setDownPayment] = useState("20000");
  const [loanDuration, setLoanDuration] = useState("30");
  const [interestRates, setInterestRates] = useState("2.75");
  const [totalBalancePaid, setTotalBalancePaid] = useState("");
  const [totalIntersetPaid, setTotalInterestPaid] = useState("");
  let principal = loanAmount - downPayment;
  let monthlyPayment;
  const calculateMortgageAmount = () => {
    const termOfLoan = parseFloat(loanDuration) * 12;
    const percentageRate = interestRates / 1200;

    monthlyPayment =
      (principal * percentageRate) /
      (1 - Math.pow(1 + percentageRate, termOfLoan * -1));

    return monthlyPayment.toFixed;
  };
  calculateMortgageAmount();

  return (
    <>
      <section className="main">
        <Container fluid>
          <Row className="text-center py-3">
            <Col>
              {loanAmount - downPayment}
              <p>Principal</p>
            </Col>

            <Col>
              {monthlyPayment.toFixed(2)}
              <p>Monthly Payment</p>
            </Col>
          </Row>
          <Row className="text-center py-3">
            <Col>
              {totalBalancePaid}
              <p>Total Repaid</p>
            </Col>

            <Col>
              {totalIntersetPaid}
              <p>Total Interest Paid</p>
            </Col>
          </Row>
          <Row className="text-center py-3">
            <Col>
              {downPayment}
              <p>Down Payment</p>
            </Col>
            <Col>
              {((downPayment / loanAmount) * 100).toFixed(2)} %
              <p>% of Down Payment</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="loanForm">
        <Container fluid>
          <Row className="text-center py-3">
            <Col>
              <p>{Number(loanAmount)}</p>
              <input
                min="50000"
                step="1000"
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
                min="1000"
                step="500"
                max={loanAmount - 1}
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
                step="1"
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
              <input
                min="1"
                max="10"
                step=".1"
                type="range"
                onChange={(e) => setInterestRates(e.target.value)}
              />
              <p>Interest Rate</p>
            </Col>
          </Row>
          <AmoritizationTable
            loanAmount={loanAmount}
            setLoanAmount={setLoanAmount}
            interestRates={interestRates}
            setInterestRates={setInterestRates}
            downPayment={downPayment}
            setDownPayment={setDownPayment}
            loanDuration={loanDuration}
            setLoanDuration={setLoanDuration}
            monthlyPayment={monthlyPayment}
            setTotalBalancePaid={setTotalBalancePaid}
            setTotalInterestPaid={setTotalInterestPaid}
            //calculateMortgageAmount={calculateMortgageAmount()}
          />
        </Container>
      </section>
    </>
  );
};

export default Main;
