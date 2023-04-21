import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Cocktail from "@/components/cocktail";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fight Night at Kwamina&apos;s</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 maximum-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.headerAnimation}>
          Fight Night at Kwamina&apos;s
        </h1>

        <div className={styles.cocktailContainer}>
          <Cocktail
            name={"The Upper Cut"}
            ingredients={[
              "tequila",
              "triple sec",
              "lime juice",
              "orange juice",
              "agave nectar",
            ]}
          />
          <Cocktail
            name={"Ringside Refresher"}
            ingredients={[
              "vodka",
              "vermouth",
              "orange juice",
              "pineapple juice",
              "cranberry juice",
            ]}
          />
          <Cocktail
            name={"Heavyweight Hurricane"}
            ingredients={[
              "dark rum",
              "light rum",
              "passion fruit juice",
              "orange juice",
              "lime juice",
              "simple syrup",
              "grenadine",
              "cherry",
            ]}
          />
          <Cocktail
            name={"The K.O"}
            ingredients={["tequila", "rum", "triple sec", "choice of juice"]}
          />
        </div>
      </main>
    </>
  );
}
