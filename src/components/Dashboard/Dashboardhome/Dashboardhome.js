import React from "react";
import { Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { Switch } from "react-router-dom";
import Home from "../../Home/Home";
import Addtour from "../Addtour/Addtour";
import Dashboardbar from "../Dashboardbar/Dashboardbar";
import Makeadmin from "../Makeadmin/Makeadmin";
import Managebooking from "../Managebooking/Managebooking";
import Managetour from "../Managetour/Managetour";
import Mybooking from "../Mybooking/Mybooking";
import Payment from "../Payment/Payment";
import "./Dashboardhome.css";

const Dashboardhome = () => {
  let { path } = useRouteMatch();
  return (
    <div>
      <div className="row ">
        <div className="col-lg-2 dashboard_menu">
          <div className="p-3">
            <Dashboardbar></Dashboardbar>
          </div>
        </div>
        <div className="col-lg-10 dashboard_show">
          <div className="p-5">
            <Switch>
              <Route exact path={path}>
                <h1>Welcome to Your Dashboard</h1>
              </Route>
              <Route path={`${path}/payment`}>
                <Payment></Payment>
              </Route>
              <Route path={`${path}/mybooking`}>
                <Mybooking></Mybooking>
              </Route>
              <Route path={`${path}/mybooking/:_ID`}>
                <Mybooking></Mybooking>
              </Route>

              <Route path={`${path}/managebooking`}>
                <Managebooking></Managebooking>
              </Route>
              <Route path={`${path}/addtour`}>
                <Addtour></Addtour>
              </Route>
              <Route path={`${path}/makeadmin`}>
                <Makeadmin></Makeadmin>
              </Route>
              <Route path={`${path}/managetour`}>
                <Managetour></Managetour>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardhome;
