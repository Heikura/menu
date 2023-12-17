import React from "react";
import logoo from "../vivia.PNG";

export default function Logo() {
  return (
    <div className="image-container">
      <img src={logoo} alt="Logo" width={200} height={250} />
    </div>
  )
}