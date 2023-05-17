import React from 'react'
import { ShadowBox, Title } from '../../Styles/GlobalStyles'
import ReactApexChart from 'react-apexcharts';
import styled from 'styled-components';
function ChartCircle() {

  const series = [82, 50];

  const options = {
    chart: {
      width: '100%',
      height: 200,
      type: 'radialBar',
    },
    fill: {
      colors: ['#FE9900', '#00C8F0']
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '1rem',
          },
          responsive: [
            {
              breakpoint: 1000,
              options: {
                plotOptions: {
                  bar: {
                    horizontal: false
                  }
                },
                legend: {
                  position: "bottom"
                }
              }
            }
          ],
          total: {
            show: true,
            label: 'Total',
            fontSize: '2rem',

            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
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

      </Container>
    </>
  )
}
const Container = styled(ShadowBox)`
width: 35%;
  @media (max-width: 765px) {
  
  }
`
const Chart  = styled.div`
`

export default ChartCircle;