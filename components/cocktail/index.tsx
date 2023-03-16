import * as React from "react";
import styles from "@/styles/Cocktail.module.css";

export default function Cocktail({
  name,
  ingredients,
}: {
  name: string;
  ingredients: string[];
}) {
  return (
    <section className={styles.section}>
      <h2> {name} </h2>
      <p>{ingredients.join(", ")}</p>
    </section>
  );
}
