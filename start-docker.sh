#!/bin/bash
set -e

rm -f id.json
export ANCHOR_WALLET="./id.json"
echo $WALLET_KEYPAIR > id.json
npm start
