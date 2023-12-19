import React from "react";

export default function Mains({ type, meals }) {
  return (
    <section className="mains">
      
      {meals.map((meal, index) => (
        <article className="menu-item" key={index}>
          <h3 className="mains-name">{meal.name}</h3>
          
          <h5 className="mains-name2">{meal.name2}</h5>
          <p className="mains-description">{meal.description}</p>
        </article>
      ))}
    </section>
  );
}
