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

  const totalPayments = loanDuration * 12;
  const principal = loanAmount - downPayment;
  let dataSchedule;
  let principleSum = 0;
  let interstSum = 0;
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

      //if (i % 12 === 0) {
      //yearlyAmmountArr.push(principleSum);
      //for (let i = 0; i < 30; i++) {
      //if (yearlyAmmountArr[i] - yearlyAmmountArr[i - 1])
      //   testArr.push(yearlyAmmountArr[i] - yearlyAmmountArr[i - 1]);
      // }
      // }
    }
    schedule.map((value) => {
      if (value[0] % 12 === 0) {
        testArr.push(value[4]);
      }
    });
    for (let i = 1; i < testArr.length; i++) {
      annualPrinciplePaid.push(testArr[i] - testArr[i - 1]);
    }

    schedule.map((value) => {
      if (value[0] % 12 === 0) {
        intArr.push(value[2]);
      }
    });
    for (let i = 1; i < intArr.length; i++) {
      annualIntersetPaid.push(intArr[i] - intArr[i - 1]);
    }
    dataSchedule = schedule;

    let totalInterset = Number(schedule[359][2].toFixed(2));
    setTotalInterestPaid(totalInterset);

    setTotalBalancePaid(totalInterset + principal);
    console.log(annualPrinciplePaid, annualIntersetPaid);
    return schedule;
  }

  computeSchedule(principal, interestRates, 12, loanDuration, monthlyPayment);
  return (
    <div>
      <LoanTable dataSchedule={dataSchedule} />
    </div>
  );
};

export default AmoritizationTable;
