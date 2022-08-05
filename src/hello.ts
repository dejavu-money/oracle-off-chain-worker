import * as dotenv from 'dotenv';
dotenv.config();
import * as AuthAccount from '@/application/authorizer';
import bs58 from 'bs58';
import { program } from '@/global';

async function main() {
  const authAccount = await AuthAccount.findOrCreateAccount();

  const oracles = await program.account.oracleItem.all([
    {
      dataSize: 114,
    },
    {
      memcmp: {
        offset: 8,
        bytes: authAccount.toBase58()
      },
    },
    {
      memcmp: {
        offset: 96,
        bytes: bs58.encode(Uint8Array.from([0])) // 0: false, 1: true
      },
    }
  ]);

  console.log(oracles.length);
  console.log(oracles[0].account.isFinished);
}
main().then(console.log, console.log)




