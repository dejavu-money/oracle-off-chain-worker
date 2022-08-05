import { PublicKey } from "@solana/web3.js";
import * as OracleAccount from '@/utils/oracle';
import { program } from '@/global';
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
  console.log(`[Update][Oracles][START] length: ${oracles.length}`);

  for (let oracleIndex = 0; oracleIndex < oracles.length; oracleIndex++) {
    let oracle;
    try {
      oracle = oracles[oracleIndex].publicKey;
      await OracleAccount.updateAccount(
        authorizer, 
        feed,
        oracles[oracleIndex].publicKey
      )
    } catch (err) {
      console.log(`[Update][Oracles][ERROR] auth: ${authorizer}, feed: ${feed}, oracle: ${oracle}, error: ${err}`)
    }
  }

  console.log(`[Update][Oracles][Finished]: Oracles Updated: ${oracles.length}`);
}
