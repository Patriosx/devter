import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Layout from "../../components/layout";

function TimeLine({ username }) {
  return (
    <Layout>
      <h1 className={styles.title}>{username}'s Timeline</h1>
      <nav>
        <Link href="/">Home</Link>
      </nav>
    </Layout>
  );
}
//le pasamos las props que va a recibir el componentes
TimeLine.getInitialProps = async () => {
  //   return { username: "dev" };
  return await fetch("http://localhost:3000/api/hello")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const { username } = data;
      return { username };
    });
};

export default TimeLine;
