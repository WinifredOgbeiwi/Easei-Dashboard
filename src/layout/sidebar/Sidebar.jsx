import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { TbFileInvoice } from "react-icons/tb";
import { BsPeople, BsAlarm } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { SidebarItem, SidebarTitle, SidebarWrapper, SidebarItems } from "../../Styles/sidebar";
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


export default Sidebar;
