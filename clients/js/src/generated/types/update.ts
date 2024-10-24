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
  type Codec,
  type Decoder,
  type Encoder,
} from '@solana/web3.js';

export type Update = {};

export type UpdateArgs = Update;

export function getUpdateEncoder(): Encoder<UpdateArgs> {
  return getStructEncoder([]);
}

export function getUpdateDecoder(): Decoder<Update> {
  return getStructDecoder([]);
}

export function getUpdateCodec(): Codec<UpdateArgs, Update> {
  return combineCodec(getUpdateEncoder(), getUpdateDecoder());
}
