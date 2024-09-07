import Link from "../components/Link";
import Lights from "../components/Lights";

export default function Rooms({ lightsState, handleToggle }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Lights in all Rooms</h1>
      <Lights lights={lightsState} toggleLight={handleToggle} />
    </>
  );
}
