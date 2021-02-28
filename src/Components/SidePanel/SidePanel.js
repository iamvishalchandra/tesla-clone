import React from "react";
import { Link } from "react-router-dom";
import "./SidePanel_Style/SidePanel.css";

function SidePanel() {
  return (
    <div className="sidePanel">
      <Link to="/inentory">
        <h4>existing inventory</h4>
      </Link>
      <h4>used inventory</h4>
      <h4>trade-in</h4>
      <h4>cybertruck</h4>
      <h4>roadster</h4>
      <h4>semi</h4>
      <h4>charging</h4>
      <h4>powerwall</h4>
      <h4>comericial solar</h4>
      <h4>test drive</h4>
      <h4>find us</h4>
      <h4>support</h4>
      <h4>your country</h4>
    </div>
  );
}

export default SidePanel;
