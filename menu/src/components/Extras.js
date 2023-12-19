import React from "react";

export default function Extras({ type, items }) {
  return (
    <section className="extras">
      <h2 className="extras-heading">{type}</h2>
      Menun juomapaketti sisältää, alkumaljan, alkoholittoman ipan alku- ja pääruoalle sekä kahvin. Lisäksi juomapakettiin kuuluu loputon määrä hanavettä.
    </section>
  );
}
