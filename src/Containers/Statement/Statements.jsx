import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

export default class Statements extends Component {
  render() {
    return (
      <List component="nav" aria-label="main mailbox folders">
        {this.props.transactions.map(transaction => {
          return (
            <ListItem key={transaction}>
              <p> {transaction.date} </p> &nbsp;
              <p></p> {transaction.description} <p /> &nbsp;
              <p>${transaction.Amount} </p> &nbsp;
            </ListItem>
          );
        })}
      </List>
    );
  }
}
