import * as anchor from "@project-serum/anchor";
import { Oracle } from "@/anchor/types/oracle";
import { Program } from "@project-serum/anchor";
import idl from '@/anchor/idl/oracle.json';

export const MAX_ORACLES: number = 10;
export const provider = anchor.AnchorProvider.env();

export const program = new Program<Oracle>(
  idl as unknown as Oracle,
  new anchor.web3.PublicKey('CXCE5fYFEuGShPKXGTYafxr3iChkBzgxCcAx1TABXJ1D'),
  provider
);
