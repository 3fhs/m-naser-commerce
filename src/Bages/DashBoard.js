import { Outlet } from "react-router-dom";
import NavDash from "../DashProduct/NavDash";
import SideDash from "../DashProduct/SideDash";

export default function DashBoard() {
  return (
    <div className="dashboard">
      <div className="side-dash">
        <h3>STORE</h3>
        <SideDash />
      </div>
      <div className="side-dashboard">
        <NavDash />
        <div className="dashboard-body">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
