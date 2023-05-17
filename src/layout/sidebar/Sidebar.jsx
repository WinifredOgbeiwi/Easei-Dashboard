import React from "react";
import styled from "styled-components";
import { MdOutlineDashboard } from "react-icons/md";
import { TbFileInvoice } from "react-icons/tb";
import { BsPeople, BsAlarm } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
// import styled, { css } from "styled-components";
function Sidebar() {
  return (
    <>
      <SidebarWrapper>
        <SidebarItems>
          <SidebarItem>
            <MdOutlineDashboard />
            <SidebarTitle>Dashboard</SidebarTitle>
          </SidebarItem>
          <SidebarItem>
            <TbFileInvoice />
            <SidebarTitle>Invoices</SidebarTitle>
          </SidebarItem>
          <SidebarItem>
            <BsPeople />
            <SidebarTitle>People</SidebarTitle>
          </SidebarItem>
          <SidebarItem>
            <TbFileInvoice />
            <SidebarTitle>Receipts</SidebarTitle>
          </SidebarItem>
          <SidebarItem>
            <BsAlarm />
            <SidebarTitle>Reminder</SidebarTitle>
          </SidebarItem>
          <SidebarItem>
            <FiSettings />
            <SidebarTitle>Setting</SidebarTitle>
          </SidebarItem>
        </SidebarItems>
      </SidebarWrapper>
    </>
  );
}
const SidebarWrapper = styled.div`
  width: 11.25rem;
  height: calc(100vh - 50px);
  background-color: var(--primary);
  position: sticky;
  top: 40px;
  color: white;
  @media (max-width: 765px) {
    width: 3rem;
  }
`;
const SidebarItems = styled.ul`
  list-style: none;
`;
const SidebarItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 1.6rem;
  gap: 10px;
  /* margin: 0 auto; */
  @media (max-width: 765px) {
    padding: 1.6rem 1rem;
  }
  &:nth-child(1) {
    margin-top: 0;
  }

  &:hover {
    color: var(--primaryYellow);
    border-left: 2px solid var(--primaryYellow);
    background-color: var(--hover);
    @media (max-width: 765px) {
      border: none;
      background-color: n;
    }
  }
`;
const SidebarTitle = styled.p`
  @media (max-width: 765px) {
    display: none;
  }
`;

export default Sidebar;
