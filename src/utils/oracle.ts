import * as anchor from "@project-serum/anchor";
import { provider, program, FEEDS, CHAINLINK_PROGRAM_PUBLIC_KEY } from '@/global';
import { PublicKey } from "@solana/web3.js";
import { BN } from "bn.js";

export const AUTH_ID = 369;
export const ORACLE_CLOSES_IN = 0;
export const ORACLE_FINISHED_IN = 0;

export async function createRandomAccount(authorizer: PublicKey, feed: PublicKey): Promise<PublicKey> {
  const randomOracleId = new Date().getTime()
  const account = await getPublicKey(randomOracleId);

  await program
  .methods
  .createOracle(new BN(randomOracleId))
  .accounts({
    oracleAuthorizer: authorizer,
    oracleItem: account,
    user: provider.wallet.publicKey,
    feedAccount: feed,
    chainlinkProgram: CHAINLINK_PROGRAM_PUBLIC_KEY
  })
  .rpc();

  return account;
}

export async function updateAccount(auth: PublicKey, feed: PublicKey, oracle: PublicKey): Promise<void> {  
  await program
    .methods
    .updateOracle()
    .accounts({
      oracleItem: oracle,
      oracleAuthorizer: auth,
      user: provider.wallet.publicKey,
      feedAccount: feed,
      chainlinkProgram: CHAINLINK_PROGRAM_PUBLIC_KEY
    })
    .rpc()
}

async function getPublicKey(randomOracleId: number): Promise<PublicKey> {
  const [account] = await anchor.web3.PublicKey.findProgramAddress(
    [provider.wallet.publicKey.toBuffer(), Buffer.from(`id-${randomOracleId}`)],
    program.programId
  )

  return account;
}
