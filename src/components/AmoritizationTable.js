import React from "react";
import LoanTable from "./LoanTable";
const AmoritizationTable = (props) => {
  const {
    downPayment,
    interestRates,
    loanAmount,
    loanDuration,
    monthlyPayment,
    setTotalBalancePaid,
    setTotalInterestPaid,
  } = props;

  const principal = loanAmount - downPayment;
  let dataSchedule;
  let principleSum = 0;
  let interstSum = 0;
  let totalIntArr = [];
  let totalPrincipleArr = [];
  function computeSchedule(
    loan_amount,
    interest_rate,
    payments_per_year,
    years,
    payment
  ) {
    let schedule = [];
    let remaining = loan_amount;
    let number_of_payments = payments_per_year * years;
    let annualIntersetPaid = [];
    let testArr = [];
    let intArr = [];
    let annualPrinciplePaid = [];
    for (let i = 1; i <= number_of_payments; i++) {
      let interest = remaining * (interest_rate / 100 / payments_per_year);
      let principle = payment - interest;
      principleSum += principle;
      interstSum += interest;
      let row = [
        i,
        interest > 0 ? interest : 0,
        interstSum > 0 ? interstSum : 0,
        principle > 0 ? principle : 0,
        principleSum > 0 ? principleSum : 0,
        remaining > 0 ? remaining : 0,
      ];
      schedule.push(row);
      remaining -= principle;
    }
    schedule.map((value) => {
      if (value[0] % 12 === 0) {
        return testArr.push(value[4]);
      }
    });
    for (let i = 0; i < testArr.length; i++) {
      if (isNaN(testArr[i] - testArr[i - 1])) {
        annualPrinciplePaid.push(0);
      } else {
        annualPrinciplePaid.push(testArr[i] - testArr[i - 1]);
      }

      annualIntersetPaid.filter((value) => {
        if (!isNaN(value)) {
          return value;
        }
      });
    }

    schedule.map((value) => {
      if (value[0] % 12 === 0) {
        return intArr.push(value[2]);
      }
    });
    for (let i = 0; i < intArr.length; i++) {
      if (isNaN(intArr[i] - intArr[i - 1])) {
        annualIntersetPaid.push(0);
      } else {
        annualIntersetPaid.push(intArr[i] - intArr[i - 1]);
      }

      annualIntersetPaid.filter((value) => {
        if (!isNaN(value)) {
          return value;
        }
      });
    }
    console.log(number_of_payments);
    dataSchedule = schedule;
    totalPrincipleArr = annualPrinciplePaid;
    totalIntArr = annualIntersetPaid;
    let totalInterset = Number(schedule[number_of_payments - 1][2].toFixed(2));
    setTotalInterestPaid(totalInterset);

    setTotalBalancePaid(totalInterset + principal);
    console.log(annualPrinciplePaid, annualIntersetPaid);
    return;
  }

  computeSchedule(principal, interestRates, 12, loanDuration, monthlyPayment);

  return (
    <div>
      <LoanTable
        loanDuration={loanDuration}
        totalPrincipleArr={totalPrincipleArr}
        totalIntArr={totalIntArr}
        dataSchedule={dataSchedule}
      />
    </div>
  );
};

export default AmoritizationTable;
