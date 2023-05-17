import React from "react";
import {ExtendedBox, Title, TO, TC, Tbody, Table, Th, TbodyTr, Thead, TheadTr, Td, } from "../../Styles/organisation";
import { TableData } from "./tableData";
function Organisation() {
  const keys = Object.keys(TableData[0]);
  return (
    <>
      <ExtendedBox>
      <Title>
          <TO >Top Organisations(25)</TO>
          <TC $second>Top Clients(67)</TC>
        </Title>

        <Table>
          <Thead>
            <TheadTr>
              {keys.map((items, index) => (
                <Th key={index}>{items}</Th>
              ))}
            </TheadTr>
          </Thead>
         <Tbody>
            {TableData.map((obj, index) => (
              <TbodyTr key={index}>
                {keys.map((item, index) => {
                  const value = obj[item];
                  return <Td key={index}>{value}</Td>;
                })}
              </TbodyTr>
            ))}
          </Tbody>
        </Table> 
      </ExtendedBox>
    </>
  );
}
export default Organisation;




