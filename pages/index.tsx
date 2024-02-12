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
            name={"The Touchdown"}
            ingredients={[
              "tequila",
              "triple sec",
              "lime juice",
              "orange juice",
              "agave nectar",
            ]}
          />
          <Cocktail
            name={"The Hail Mary"}
            ingredients={[
              "vodka",
              "vermouth",
              "cranberry juice",
            ]}
          />
        </div>
      </main>
    </>
  );
}
