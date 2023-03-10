import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import ChartDataLabels from "chartjs-plugin-datalabels";

import Barchart from "./Barchart";
import Linechart from "./LineChart";
const LoanTable = (props) => {
  const { dataSchedule, totalIntArr, totalPrincipleArr } = props;
  console.log(totalPrincipleArr.length);
  totalIntArr.map((total) => console.log(total));

  const data = {
    labels: dataSchedule.map((data) => {
      if (data[0] % 12 === 0) {
        return `Year ${data[0] / 12}`;
      }
    }),
    datasets: [
      {
        stack: "1",
        label: "Interest Paid",
        data: dataSchedule.map((data) => data[2]),
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
      },
      {
        label: "Principal Paid",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        stack: "2",
        data: dataSchedule.map((data) => data[4]),
      },
    ],
    plugins: {
      datalabels: {
        font: {
          size: 12,
          weight: "bold",
        },
        display: function (context) {
          return context.chart.width > 768; // hide labels on small screens
        },
      },
    },
  };
  const data1 = {
    labels: totalIntArr.map((total, i) => {
      return `Year ${i}`;
    }),

    datasets: [
      {
        stack: "1",
        label: "Interest Paid",
        data: totalIntArr.map((total) => total),
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
      },
      {
        label: "Principal Paid",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        stack: "2",
        data: totalPrincipleArr.map((data) => data),
      },
    ],
    plugins: {
      datalabels: {
        font: {
          size: 12,
          weight: "bold",
        },
        display: function (context) {
          return context.chart.width > 768; // hide labels on small screens
        },
      },
    },
  };
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    interaction: {
      intersect: false,
    },
    stacked: false,
    spanGaps: true,
    plugins: {
      title: {
        display: true,
        text: "Total Interset and Principle amounts over duration of loan",
      },
    },
  };
  const options1 = {
    responsive: true,
    maintainAspectRatio: true,
    interaction: {
      intersect: false,
    },
    stacked: false,
    spanGaps: true,
    plugins: {
      title: {
        display: true,
        text: "Interest and Principle Payments year to year",
      },
    },
  };
  return (
    <Container fluid>
      <div className="chartContainer ">
        <Col className="col-lg-6 col-md-12">
          <Barchart className="barchart" options={options1} data={data1} />
        </Col>
        <Col className="col-lg-6 col-md-12">
          <Linechart className="linechart" options={options} data={data} />
        </Col>
      </div>
      <section className="amoritizationTable">
        <h1 className="text-center py-3">Amortization Table</h1>
        <Table className="px-5 table " responsive striped bordered hover>
          <tbody>
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
                <tr key={i} className="text-center">
                  <td>{i}</td>
                  <td>{item[1].toFixed(2)}</td>
                  <td>{item[2].toFixed(2)}</td>
                  <td>{item[3].toFixed(2)}</td>
                  <td>{item[4].toFixed(2)}</td>
                  <td>{item[5].toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </section>
    </Container>
  );
};

export default LoanTable;
