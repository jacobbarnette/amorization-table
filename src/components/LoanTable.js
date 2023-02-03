import React from "react";
import { Container, Table } from "react-bootstrap";
const LoanTable = (props) => {
  const { dataSchedule } = props;

  return (
    <Container>
      <section className="amoritizationTable">
        <h1 className="text-center py-3">Table</h1>
        <Table striped bordered hover>
          <tr className="text-center">
            <th>Month</th>
            <th>Interest Paid this Month</th>
            <th>Interest Paid to Date</th>
            <th>Principal this Month</th>
            <th>Principal Paid to Date</th>
            <th>Remaining Balance</th>
          </tr>

          {dataSchedule.map((item, i) => {
            return (
              <tr className="text-center">
                <td>{i}</td>
                <td>{item[1].toFixed(2)}</td>
                <td>{item[2].toFixed(2)}</td>
                <td>{item[3].toFixed(2)}</td>
                <td>{item[4].toFixed(2)}</td>
                <td>{item[5].toFixed(2)}</td>
              </tr>
            );
          })}
        </Table>
      </section>
    </Container>
  );
};

export default LoanTable;
