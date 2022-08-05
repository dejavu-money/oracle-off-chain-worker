import * as AuthAccount from '@/utils/authorizer';
import SyncOracle from '@/services/createOracleFeeds';
import { FEEDS } from '@/global';

async function start() {
  const authAccount = await AuthAccount.findOrCreateAccount();

  for (const feed in FEEDS) {
    console.log(`[SYNC] ${feed}`);
    await SyncOracle(authAccount, FEEDS[feed]);
  }
}

start().then();
