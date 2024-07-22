import React from "react";
import { Outlet } from "react-router-dom";
import { SideTab } from "../../components";
import "./user-details.scss";

function UserDetails() {
  return (
    <section className="user__details">
      <div className="side__nav">
        <SideTab />
      </div>
      <div className="__form">
        <Outlet />
      </div>
    </section>
  );
}

export default UserDetails;
