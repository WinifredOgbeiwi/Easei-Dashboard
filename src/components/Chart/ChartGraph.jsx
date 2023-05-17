import React from 'react';
import ReactApexChart from 'react-apexcharts';
import styled from 'styled-components';
import { ShadowBox , Title} from '../../Styles/GlobalStyles';

const ChartGraph = () => {
  const series = [
    {
      name: 'Revenue',
      data: [5, 20, 23, 98, 87, 105, 91, 114, 94],
    },
    {
      name: 'Free Cash Flow',
      data: [0, 8, 10, 26, 45, 48, 52, 53, 41],
    },
  ];

  const options = {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '100%',
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
    },

  };

  return (
    <Container id="chart">
      <Title2>Monthly Invoices Distribution </Title2>

      <p>Track your Invoice flow for any given period</p>
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </Container>
  );
};
const Container = styled(ShadowBox)`
width: 65%;
  margin-right: 20px;
  p{
margin-bottom: 20px;
  }
`
const Title2 = styled(Title)`
  text-align: start;
  margin: 10px 0 10px 0;
  `

export default ChartGraph;
