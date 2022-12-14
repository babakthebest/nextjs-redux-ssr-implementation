import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { wrapper } from "../app/store";
import { setProfileData } from "../app/store/slices/profile";
import { useSelector } from "react-redux";

export default function Home() {
  const profile = useSelector((store) => store.profile);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <h2>{`this is redux state set in index: ${profile.name}`}</h2>
      </main>
    </div>
  );
}
// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) =>
//     async ({ resolvedUrl }) => {
//       console.log(resolvedUrl);

//       return {
//         props: {},
//       };
//     }
// );
