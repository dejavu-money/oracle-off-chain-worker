import { PublicKey } from "@solana/web3.js";
import * as OracleAccount from '@/utils/oracle';
import { program, MAX_ORACLES } from '@/global';
import bs58 from 'bs58';

export default async function (authorizer: PublicKey, feed: PublicKey) {
  const oracles = await program.account.oracleItem.all([
    {
      memcmp: {
        offset: 8,
        bytes: authorizer.toBase58() // auth filter
      },
    },
    {
      memcmp: {
        offset: 40,
        bytes: feed.toBase58() // feed filter
      },
    },
    {
      memcmp: {
        offset: 96,
        bytes: bs58.encode(Uint8Array.from([0])) // is_finished 0: false, 1: true
      },
    }
  ]);

  console.log(`[SYNC][START]: current: ${oracles.length}, max: ${MAX_ORACLES}`);

  if (oracles.length < MAX_ORACLES) {
    const count = MAX_ORACLES - oracles.length;

    for (let x = 0; x < count; x++) {
      await OracleAccount.createRandomAccount(authorizer, feed);
    }

    console.log(`[SYNC][Feed: ${feed}][SYNC][Finished] Oracles Created: ${count}`);
  } else {
    console.log(`[SYNC][Feed: ${feed}][SYNC][Finished][FULL] COUNT: ${oracles.length}`);
  }
}
