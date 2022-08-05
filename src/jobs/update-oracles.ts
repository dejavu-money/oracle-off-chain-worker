import * as AuthAccount from '@/utils/authorizer';
import { FEEDS } from '@/global';
import UpdateOracles from '@/services/updateOracleFeeds';

async function start() {
  const authAccount = await AuthAccount.findOrCreateAccount();

  for (const feed in FEEDS) {
    console.log(`[UPDATE] ${feed}`);
    await UpdateOracles(authAccount, FEEDS[feed]);
  }
}

start().then();
