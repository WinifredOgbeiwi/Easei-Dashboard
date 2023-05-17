import React from 'react'
import ReactApexChart from 'react-apexcharts';
import { Title } from "../../Styles/GlobalStyles";
import { Container, Chart, Circle, Circle2, CircleTitle, TitleContainer } from '../../Styles/chartCircle';
function ChartCircle() {

  const series = [82, 50];

  const options = {
    chart: {
      width: '100%',
      height: 100,
      type: 'radialBar',
    },
    fill: {
      colors: ['#FE9900', '#00C8F0']
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '.2rem',
          },
          value: {
            fontSize: '.8rem',
          },
          
          total: {
            show: true,
            label: 'Total',
            fontSize: '.8rem',

            formatter: function (w) {
              return 2399;
            },
          },
        },
      },
    },
    labels: ['Freelancers', 'Contractors'],
  };
  return (
    <>
      <Container>
        <Title>Freelancers vs Contractors</Title>
        <div id="chart">
          <Chart>
          <ReactApexChart options={options} series={series} type="radialBar" height={250} /></Chart>
        </div>
<hr/>

  <>
  <TitleContainer>
<CircleTitle>
  <Circle></Circle> 
  <p>External Invoice</p>
  </CircleTitle>
          <CircleTitle>
          <Circle2></Circle2> 
            <p>Internal Invoice</p>
        </CircleTitle>
        </TitleContainer>
        </>

      </Container>
    </>
  )
}


export default ChartCircle;