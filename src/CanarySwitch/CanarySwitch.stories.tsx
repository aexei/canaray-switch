import CanarySwitch from "./CanarySwitch";
import React from "react";

export default {
  title: "CanarySwitch",
};

export const WithBar = () => (
  <CanarySwitch cookieName="canary">
    <input id="canary" name="canary" type="checkbox"></input>
    <label htmlFor="canary">use of our canray version</label>
  </CanarySwitch>
);
