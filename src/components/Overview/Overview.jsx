import React from "react";
import { OverviewData1, OverviewData2 } from "./OverviewData";
import { AiOutlineRise } from "react-icons/ai";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { OverviewWrapper, Icon, Boxes, OverviewShadowBox, Text, GraphIcon } from '../../Styles/overView'
function Overview() {
  return (
    <>
      <OverviewWrapper>
        <Icon>
          <MdArrowBackIos />
        </Icon>
        <Boxes>
          {OverviewData1.map(({ id, heading, number, figure, month }) => {
            return (
              <OverviewShadowBox key={id}>
                <Text>{heading}</Text>
                <Text $number>
                  {number}
                  <AiOutlineRise className="icon" />
                </Text>
                <Text $gray>
                  {figure}
                  <span>{month}</span>
                </Text>
              </OverviewShadowBox>
            );
          })}
        </Boxes>
        <Icon>
          <MdArrowForwardIos />
        </Icon>
      </OverviewWrapper>

      <OverviewWrapper>
        <Icon>
          <MdArrowBackIos />
        </Icon>
        <Boxes>
          {OverviewData2.map(({ id, heading, number, figure, month }) => {
            return (
              <OverviewShadowBox key={id}>
                <Text>{heading}</Text>
                <Text $number>
                  {number}
                  <GraphIcon>
                    <AiOutlineRise />
                  </GraphIcon>
                </Text>
                <Text $gray>
                  {figure}
                  <span>{month}</span>
                </Text>
              </OverviewShadowBox>
            );
          })}
        </Boxes>
        <Icon>
          <MdArrowForwardIos />
        </Icon>
      </OverviewWrapper>
    </>
  );
}
export default Overview;