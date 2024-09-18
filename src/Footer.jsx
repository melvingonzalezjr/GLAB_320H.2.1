import React from "react";

const date = new Date();

function Footer() {
    return <h1>Created by Melvin Gonzalez, {date.toLocaleDateString()}</h1>;
  }

export default Footer;