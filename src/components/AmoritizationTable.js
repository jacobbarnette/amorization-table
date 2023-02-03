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
  let principalSum = 0;
  let interstSum = 0;
  function computeSchedule(
    loan_amount,
    interest_rate,
    payments_per_year,
    years,
    payment
  ) {
    var schedule = [];
    var remaining = loan_amount;
    var number_of_payments = payments_per_year * years;

    for (var i = 1; i <= number_of_payments; i++) {
      var interest = remaining * (interest_rate / 100 / payments_per_year);
      var principle = payment - interest;
      principalSum += principle;
      interstSum += interest;
      var row = [
        i,
        interest > 0 ? interest : 0,
        interstSum > 0 ? interstSum : 0,
        principle > 0 ? principle : 0,
        principalSum > 0 ? principalSum : 0,
        remaining > 0 ? remaining : 0,
      ];
      schedule.push(row);
      remaining -= principle;
    }
    dataSchedule = schedule;
    let totalInterset = Number(schedule[359][2].toFixed(2));
    setTotalInterestPaid(totalInterset);
    console.log(typeof principal, typeof totalInterset);
    setTotalBalancePaid(totalInterset + principal);

    return schedule;
  }

  computeSchedule(principal, interestRates, 12, loanDuration, monthlyPayment);
  return (
    <LoanTable computeSchedule={computeSchedule} dataSchedule={dataSchedule} />
  );
};

export default AmoritizationTable;
