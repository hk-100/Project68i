import React, { Component } from "react";
import BottomTabNavigator from "./components/BottomTabNavigator";

import Ride from "./screens/Ride";
import RideHistory from "./screens/RideHistory";

export default class App extends Component {
  render() {
    return <BottomTabNavigator />;

  }
}
