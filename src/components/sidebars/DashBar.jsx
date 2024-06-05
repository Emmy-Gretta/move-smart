import React from "react";
import { NavLink } from 'react-router-dom';

const DashBar = () => {
  return (
    <>
      <section className="mt-5 sidebar">
        <section className="flex mr-12">
          <img src="/landin/logo.svg" alt="MoveSmart" width={180} height={20} />
        </section>
        <section className="flex flex-col text-[17px] text-[#8D8F93] gap-6 items-center justify-center mt-10">
          <NavLink
            to="/dashboard"
            className="flex gap-3 font-medium text-white mr-7"
          >
            <section className="flex gap-3 ml-3 mr-5">
              <img src="/Dashboard/Dashboard.svg" alt="Dashboard" width={18} height={10} />
              <h1>Dashboard</h1>
            </section>
          </NavLink>
          <NavLink
            to="/notifications"
            className="flex gap-3 font-medium text-white text-md"
          >
            <section className="flex gap-3 items-center">
              <img src="/Dashboard/Notifications.svg" alt="Notifications" width={18} height={10} />
              <h1>Notifications</h1>
              <div className="bg-[#FF0000] text-[#041C32] h-4 w-4 text-sm flex items-center justify-center">
                3
              </div>
            </section>
          </NavLink>
          <NavLink
            to="/yourtickets"
            className="flex gap-3 font-medium text-white text-md mr-8"
          >
            <section className="flex ml-7 gap-3 mr-7">
              <img src="/Dashboard/Tickets.svg" alt="Tickets" width={18} height={10} />
              <h1>Your tickets</h1>
            </section>
          </NavLink>
          <NavLink
            to="/payments"
            className="flex gap-3 font-medium text-white text-md ml-1"
          >
            <section className="flex gap-3 mr-12">
              <img src="/Dashboard/Payments.svg" alt="Payments" width={18} height={10} />
              <h1>Payments</h1>
            </section>
          </NavLink>
          <section className="flex flex-col gap-5 mr-10 mt-24">
            <NavLink
              to="/settings"
              className="flex gap-3 font-medium text-white text-md"
            >
              <section className="flex gap-3 mr-5">
                <img src="/Dashboard/Settings.svg" alt="Settings" width={18} height={10} />
                <h1>Settings</h1>
              </section>
            </NavLink>
            <NavLink
              to="/auth/logout"
              className="flex gap-3 font-medium text-white text-md"
            >
              <section className="flex gap-3 mr-5">
                <img src="/Dashboard/Logout.svg" alt="Logout" width={18} height={10} />
                <h1>Logout</h1>
              </section>
            </NavLink>
          </section>
        </section>
      </section>
    </>
  );
}

export default DashBar;
