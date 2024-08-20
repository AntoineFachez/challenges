
import { NFSAT, FISHSAT } from "./payload/satellites.js";
import { liftoff } from "./core/liftoff.js";
// import { loadPayload } from "./core/loadPayload.js";

const satellites = [NFSAT, FISHSAT];
// Implement the launch sequence function here and export it as the default export.
export default function launchSequence() {
  console.log("init launch");
  liftoff();
  // satellites.forEach((satellite) => loadPayload(satellite));
}
