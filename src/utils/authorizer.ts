import * as anchor from "@project-serum/anchor";
import { provider, program } from '@/global';
import {  PublicKey } from "@solana/web3.js";
import { BN } from "bn.js";

export const AUTH_ID = 171;
export const ORACLE_CLOSES_IN = 0;
export const ORACLE_FINISHED_IN = 0;

export async function findOrCreateAccount(): Promise<PublicKey> {
  const account = await getPublicKey();
  const data = await provider.connection.getAccountInfo(account);

  if (data === null) {
    await program
    .methods
    .createAuthorizer(new BN(AUTH_ID), new BN(ORACLE_CLOSES_IN), new BN(ORACLE_FINISHED_IN))
    .accounts({
      oracleAuthorizer: account,
      user: provider.wallet.publicKey
    })
    .rpc();
  }

  return account;
}

async function getPublicKey(): Promise<PublicKey> {
  const [account] =  await anchor.web3.PublicKey.findProgramAddress(
    [provider.wallet.publicKey.toBuffer(), Buffer.from(`id-${AUTH_ID}`)],
    program.programId
  )

  return account;
}
