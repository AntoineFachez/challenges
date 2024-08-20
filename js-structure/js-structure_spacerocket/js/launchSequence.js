
import { getNewRocket } from './core/rocket.js';
import { loadPayload } from './core/load.js';
import { fuel } from './core/fuel.js';
import { liftoff } from './core/liftoff.js';
import { deployPayload } from './core/deploy.js';
import { NFSAT, FISHSAT } from './payload/satellites.js';

// Implement the launch sequence function here and export it as the default export.

const satellites = [NFSAT, FISHSAT];
export default function launchSequence() {
  window.rocket = getNewRocket();
  fuel();

  satellites.forEach((satellite) => {
    loadPayload(satellite);
  });

  rocket.countdown = 5;
  liftoff();
  deployPayload();

}
