import * as dotenv from 'dotenv';
dotenv.config();
import * as path from 'path';
import Bree from 'bree';

console.log("Starting Workers....");
new Bree({
  root: path.join(__dirname, 'jobs'),
  defaultExtension: process.env.TS_NODE ? 'ts' : 'js',
  jobs: [
    {
      name: 'sync-oracles',
      interval: process.env.WORKER_SYNC_ORACLES_INTERVAL as string
    },
    {
      name: 'update-oracles',
      interval: process.env.WORKER_UPDATE_ORACLES_INTERVAL as string
    }
  ]
})
  .start()
  .then(
    () => console.log('Bree Initialized'), 
    () => console.log('Bree Failed')
  );
