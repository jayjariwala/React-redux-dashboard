import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../Components/Header/Header";

class Dashboard extends Component {
  render() {
    console.log("Dashboard", this.props.showDashboard);
    return (
      <div>
        <Header />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showDashboard: state.login
  };
};

export default connect(mapStateToProps)(Dashboard);
