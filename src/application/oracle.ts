import * as anchor from "@project-serum/anchor";
import { provider, program } from '@/global';
import {  PublicKey } from "@solana/web3.js";
import { BN } from "bn.js";

export const AUTH_ID = 369;
export const ORACLE_CLOSES_IN = 0;
export const ORACLE_FINISHED_IN = 0;

export async function createRandomAccount(authorizer: PublicKey): Promise<PublicKey> {
  const randomOracleId = new Date().getTime()
  const account = await getPublicKey(randomOracleId);
  const feedAccount = new anchor.web3.PublicKey("HgTtcbcmp5BeThax5AU8vg4VwK79qAvAKKFMs8txMLW6");
  const chainLinkProgramAccount = new anchor.web3.PublicKey("HEvSKofvBgfaexv23kMabbYqxasxU3mQ4ibBMEmJWHny")

  await program
  .methods
  .createOracle(new BN(randomOracleId))
  .accounts({
    oracleAuthorizer: authorizer,
    oracleItem: account,
    user: provider.wallet.publicKey,
    feedAccount: feedAccount,
    chainlinkProgram: chainLinkProgramAccount
  })
  .rpc();

  return account;
}

export async function updateAccount(auth: PublicKey, oracle: PublicKey): Promise<void> {
  const feedAccount = new anchor.web3.PublicKey("HgTtcbcmp5BeThax5AU8vg4VwK79qAvAKKFMs8txMLW6");
  const chainLinkProgramAccount = new anchor.web3.PublicKey("HEvSKofvBgfaexv23kMabbYqxasxU3mQ4ibBMEmJWHny")
  
  await program
    .methods
    .updateOracle()
    .accounts({
      oracleItem: oracle,
      oracleAuthorizer: auth,
      user: provider.wallet.publicKey,
      feedAccount: feedAccount,
      chainlinkProgram: chainLinkProgramAccount
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
