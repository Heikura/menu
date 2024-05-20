import React from "react";
import logoo from "../kaskes.jpg";

export default function Logo() {
  return (
    <div className="image-container">
      <img src={logoo} alt="Logo" width={200} height={200} />
    </div>
  )
}