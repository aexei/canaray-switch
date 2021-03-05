import CookieSwitch from "./CookieSwitch";
import React from "react";

export default {
  title: "CookieSwitch",
};

export const WithBar = () => (
  <CookieSwitch cookieName="canary">
    <input id="canary" name="canary" type="checkbox"></input>
    <label htmlFor="canary">use of our canray version</label>
  </CookieSwitch>
);
