import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { Dashboard, Top, Greeting, Paragraph, Date, Box, Charts } from '../../Styles/main'
import ChartCircle from '../../components/Chart/ChartCircle'
import ChartGraph from '../../components/Chart/ChartGraph'
import Overview from '../../components/Overview/Overview'
import Organisation from '../../components/Organisation/Organisation'

function Main() {
  return (
    <>

      <Dashboard>
        <Top>
          <div>
            <Greeting>Welcome Mayowa,</Greeting>
            <Paragraph>Let's handle your invoicing needs hassle-free!</Paragraph>
          </div>
          <Date>
            <Box>Month
              <IoMdArrowDropdown /></Box>
            <Box>Year<IoMdArrowDropdown /></Box>
          </Date>
        </Top>

        <Overview />
        <Organisation />
        <Charts>
     <ChartGraph/>
          <ChartCircle />
        </Charts>

      </Dashboard>
    </>
  )
}

export default Main