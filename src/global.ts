import * as anchor from "@project-serum/anchor";
import { Oracle } from "@/anchor/types/oracle";
import { Program } from "@project-serum/anchor";
import idl from '@/anchor/idl/oracle.json';
import { PublicKey } from "@solana/web3.js";

export const MAX_ORACLES: number = 3;
export const ORACLE_PROGRAM_PUBLIC_KEY = new PublicKey(process.env.ORACLE_PROGRAM_ID as string);
export const CHAINLINK_PROGRAM_PUBLIC_KEY = new PublicKey(process.env.CHAINLINK_PROGRAM_ID as string);
export const provider = anchor.AnchorProvider.env();

export const program = new Program<Oracle>(
  idl as unknown as Oracle,
  ORACLE_PROGRAM_PUBLIC_KEY,
  provider
);

export const FEEDS: { [key: string]: PublicKey } = {
  BTC: new PublicKey(process.env.CHAINLINK_BTC_FEED as string),
  ETH: new PublicKey(process.env.CHAINLINK_ETH_FEED as string),
  SOL: new PublicKey(process.env.CHAINLINK_SOL_FEED as string) 
};
