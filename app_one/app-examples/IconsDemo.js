import React from "react";
// import { FaBeer, } from "@react-icons/all-files/fa/FaBeer";
// import { IconContext } from "react-icons";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaApple,
  FaBeer,
  FaReact
} from "react-icons/fa";

function IconsDemo() {
  let circleClasses = "inline-block p-7 rounded-full w-20 mx-auto";
  let iconStyles = { color: "white", fontSize: "1.5em" };
  return (
    <div className="App grid grid-cols-2 sm:grid-cols-4 gap-2 w-3/4 mx-auto">
      <h1 className="col-span-full">Icon Demo</h1>
      <span style={{ background: "#3B5998" }} className={circleClasses}>
        <FaFacebookF style={iconStyles} />
      </span>
      <span style={{ background: "#1DA1F2" }} className={circleClasses}>
        <FaTwitter style={iconStyles} />
      </span>
      <span style={{ background: "black" }} className={circleClasses}>
        <FaInstagram style={iconStyles} />
      </span>
      <span style={{ background: "#BD081C" }} className={circleClasses}>
        <FaPinterest style={iconStyles} />
      </span>
      <span style={{ background: "green" }} className={circleClasses}>
        <FaBeer style={iconStyles} />
      </span>
      <span style={{ background: "purple" }} className={circleClasses}>
        <FaApple style={{color : "red"}} />
      </span>
       <span style={{ background: "orange" }} className={circleClasses}>
        <FaReact style={{color:'blue'}} />
      </span>
    </div>
  );
}

export default IconsDemo;
