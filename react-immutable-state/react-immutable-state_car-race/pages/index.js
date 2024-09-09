import CarRace from "../components/CarRace";
import Layout from "../components/Layout";

export default function HomePage() {
  return (
    <Layout>
      <h1>Car Race with useImmer()</h1>
      <CarRace />
    </Layout>
  );
}
