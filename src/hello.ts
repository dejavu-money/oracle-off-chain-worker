import * as dotenv from 'dotenv';
dotenv.config();
import * as AuthAccount from '@/utils/authorizer';
import * as OracleAccount from '@/utils/oracle';
import SyncOracle from '@/services/createOracleFeeds';
import UpdateOracles from '@/services/updateOracleFeeds';

import bs58 from 'bs58';
import { program, FEEDS } from '@/global';

async function main() {
  const authAccount = await AuthAccount.findOrCreateAccount();

  // SYNC Oracles
  // console.log('[SYNC] SOL');
  // await SyncOracle(authAccount, FEEDS.SOL);
  // console.log('[SYNC] BTC');
  // await SyncOracle(authAccount, FEEDS.BTC);
  // console.log('[SYNC] ETH');
  // await SyncOracle(authAccount, FEEDS.ETH);

  // // Update Oracles
  // console.log('[UPDATE] SOL');
  // await UpdateOracles(authAccount, FEEDS.SOL);
  // console.log('[UPDATE] BTC');
  // await UpdateOracles(authAccount, FEEDS.BTC);
  // console.log('[UPDATE] ETH');
  // await UpdateOracles(authAccount, FEEDS.ETH);


  // await OracleAccount.createRandomAccount(authAccount);

  // const oracles = await program.account.oracleItem.all([
  //   {
  //     memcmp: {
  //       offset: 8,
  //       bytes: authAccount.toBase58()
  //     },
  //   },
  //   {
  //     memcmp: {
  //       offset: 40,
  //       bytes: FEEDS.SOL.toBase58()
  //     },
  //   },
  //   {
  //     memcmp: {
  //       offset: 96,
  //       bytes: bs58.encode(Uint8Array.from([0])) // 0: false, 1: true
  //     },
  //   }
  // ]);

  // console.log(oracles.length);
  // console.log(oracles[0].account);
}
main().then(console.log, console.log)




