# Oracle Worker

this is a off-chain application that interacts with the oracle on-chain program (https://github.com/dejavu-money/oracle-program), the purpose of this worker is to create new oracles and updates their values.

# Environments variables

we are using DOTENV as environment variables manager, you have to put these values on the file `.env` on the root of the project.

```bash
ANCHOR_PROVIDER_URL=https://api.devnet.solana.com # RPC ENDPOINT
ANCHOR_WALLET=./id.json # WALLET PATH
ORACLE_PROGRAM_ID=ORACLE_PROGRAM_ID
CHAINLINK_PROGRAM_ID=CHAINLINK_PROGRAM_ID
CHAINLINK_BTC_FEED=CHAINLINK_BTC_FEED_ACCOUNT_ID
CHAINLINK_ETH_FEED=CHAINLINK_ETH_FEED_ACCOUNT_ID
CHAINLINK_SOL_FEED=CHAINLINK_SOL_FEED_ACCOUNT_ID
WORKER_SYNC_ORACLES_INTERVAL=5m
WORKER_UPDATE_ORACLES_INTERVAL=10m
```

# Flow Diagram
TODO

# Structure
```bash
src
├── anchor # Anchor IDL
│   ├── idl
│   │   └── oracle.json # IDL
│   └── types
│       └── oracle.ts # IDL TYPES
├── global.ts # Global config
├── index.ts # init workers
├── jobs # Worker
│   ├── sync-oracles.ts # this worker creates new oracles
│   └── update-oracles.ts # this worker try to finish pending oracles
├── services
│   ├── createOracleFeeds.ts # this service creates new oracles
│   └── updateOracleFeeds.ts # this service try to finish the oracles where the attr is_finished is false
└── utils
    ├── authorizer.ts # utils function for Authorizers account
    └── oracle.ts #  # utils function for Oracles account
```
