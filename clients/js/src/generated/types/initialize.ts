/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  combineCodec,
  getStructDecoder,
  getStructEncoder,
  getU8Decoder,
  getU8Encoder,
  type Codec,
  type Decoder,
  type Encoder,
} from '@solana/web3.js';

export type Initialize = {
  bus0Bump: number;
  bus1Bump: number;
  bus2Bump: number;
  bus3Bump: number;
  bus4Bump: number;
  bus5Bump: number;
  bus6Bump: number;
  bus7Bump: number;
  configBump: number;
  metadataBump: number;
  mintBump: number;
  treasuryBump: number;
};

export type InitializeArgs = Initialize;

export function getInitializeEncoder(): Encoder<InitializeArgs> {
  return getStructEncoder([
    ['bus0Bump', getU8Encoder()],
    ['bus1Bump', getU8Encoder()],
    ['bus2Bump', getU8Encoder()],
    ['bus3Bump', getU8Encoder()],
    ['bus4Bump', getU8Encoder()],
    ['bus5Bump', getU8Encoder()],
    ['bus6Bump', getU8Encoder()],
    ['bus7Bump', getU8Encoder()],
    ['configBump', getU8Encoder()],
    ['metadataBump', getU8Encoder()],
    ['mintBump', getU8Encoder()],
    ['treasuryBump', getU8Encoder()],
  ]);
}

export function getInitializeDecoder(): Decoder<Initialize> {
  return getStructDecoder([
    ['bus0Bump', getU8Decoder()],
    ['bus1Bump', getU8Decoder()],
    ['bus2Bump', getU8Decoder()],
    ['bus3Bump', getU8Decoder()],
    ['bus4Bump', getU8Decoder()],
    ['bus5Bump', getU8Decoder()],
    ['bus6Bump', getU8Decoder()],
    ['bus7Bump', getU8Decoder()],
    ['configBump', getU8Decoder()],
    ['metadataBump', getU8Decoder()],
    ['mintBump', getU8Decoder()],
    ['treasuryBump', getU8Decoder()],
  ]);
}

export function getInitializeCodec(): Codec<InitializeArgs, Initialize> {
  return combineCodec(getInitializeEncoder(), getInitializeDecoder());
}
