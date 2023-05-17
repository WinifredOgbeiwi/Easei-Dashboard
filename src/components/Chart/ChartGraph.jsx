import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Title2, Container } from '../../Styles/chartGraph'

const ChartGraph = () => {
  const series = [
    {
      name: 'FreeLancer',
      data: [5, 20, 23, 98, 87, 105, 91, 114, 94],
    },
    {
      name: 'Contractors',
      data: [0, 8, 10, 26, 45, 48, 52, 53, 41],
    },
  ];

  const options = {
    chart: {
      type: 'bar',
      height: 150,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        endingShape: 'rounded',
      },
    },
  
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'],
    },


    fill: {
      opacity: 1,
      colors: ['#FE9900', '#00C8F0']
    },

  };

  return (
    <Container>
      <Title2>Monthly Invoices Distribution </Title2>

      <p>Track your Invoice flow for any given period</p>
      <ReactApexChart options={options} series={series} type="bar" height={350}/>
    </Container>
  );
};

export default ChartGraph;
