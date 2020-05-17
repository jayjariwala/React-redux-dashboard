import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Header from "../../Components/Header/Header";
import * as actions from "../../store/actions/auth";
import classes from "./Dashboard.module.css";
import TabNavigation from "../../Components/TabNavigation/TabNavigation";
import Container from "@material-ui/core/Container";
import PayCard from "../../Components/PayCard/PayCard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Statements from "../Statement/Statements";
import Rewards from "../Rewards/Rewards";

class Dashboard extends Component {
  render() {
    const isLoggedin = this.props.showDashboard;
    if (isLoggedin) {
      console.log(isLoggedin);
      return (
        <Fragment>
          <Router>
            <Header
              auth={this.props.showDashboard}
              onLogin={this.props.onLogin}
              onLogout={this.props.onLogOut}
            />
            <Container maxWidth="md">
              <PayCard />
              <Switch>
                <TabNavigation />
                <Route path="/statement-and-activity">
                  <Statements />
                </Route>
                <Route path="/rewards">
                  <Rewards />
                </Route>
              </Switch>
            </Container>
          </Router>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Header
            auth={this.props.showDashboard}
            onLogin={this.props.onLogin}
            onLogout={this.props.onLogOut}
          />
          <Container maxWidth="md">
            <h1 className={classes.headline}> Welcome to people's bank</h1>
            <h2 className={classes.subheadline}>
              Please login to view the Credit Card Dashboard
            </h2>
          </Container>
        </Fragment>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    showDashboard: state.login
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: payload => dispatch(actions.logUserIn(payload)),
    onLogOut: payload => dispatch(actions.logUserOut(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
