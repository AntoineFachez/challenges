import Link from "../components/Link";

export default function HomePage({ counterRunningLights }) {
  return (
    <div>
      <h1>Home</h1>
      <p>{counterRunningLights} light(s) are on.</p>
      <p>
        <Link href="/rooms">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
