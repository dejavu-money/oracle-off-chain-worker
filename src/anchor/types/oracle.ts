export type Oracle = {
  "version": "0.1.0",
  "name": "oracle",
  "instructions": [
    {
      "name": "createOracle",
      "accounts": [
        {
          "name": "oracleItem",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "oracleAuthorizer",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feedAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "chainlinkProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "oracleId",
          "type": "i64"
        }
      ]
    },
    {
      "name": "createAuthorizer",
      "accounts": [
        {
          "name": "oracleAuthorizer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "authId",
          "type": "i64"
        },
        {
          "name": "closedSeconds",
          "type": "i64"
        },
        {
          "name": "finishedSeconds",
          "type": "i64"
        }
      ]
    },
    {
      "name": "updateOracle",
      "accounts": [
        {
          "name": "oracleItem",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "oracleAuthorizer",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feedAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "chainlinkProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "oracleAuthorizer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "createdAt",
            "type": "i64"
          },
          {
            "name": "closedSeconds",
            "type": "i64"
          },
          {
            "name": "finishedSeconds",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "oracleItem",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "chainlinkFeed",
            "type": "publicKey"
          },
          {
            "name": "startedAt",
            "type": "i64"
          },
          {
            "name": "closedAt",
            "type": "i64"
          },
          {
            "name": "finishedAt",
            "type": "i64"
          },
          {
            "name": "isFinished",
            "type": "bool"
          },
          {
            "name": "decimals",
            "type": "u8"
          },
          {
            "name": "round",
            "type": "i128"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "TimeInvalid",
      "msg": "the current timestamp should be greater than closed_at"
    },
    {
      "code": 6001,
      "name": "OracleExpired",
      "msg": "Oracle expired"
    }
  ]
};

export const IDL: Oracle = {
  "version": "0.1.0",
  "name": "oracle",
  "instructions": [
    {
      "name": "createOracle",
      "accounts": [
        {
          "name": "oracleItem",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "oracleAuthorizer",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feedAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "chainlinkProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "oracleId",
          "type": "i64"
        }
      ]
    },
    {
      "name": "createAuthorizer",
      "accounts": [
        {
          "name": "oracleAuthorizer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "authId",
          "type": "i64"
        },
        {
          "name": "closedSeconds",
          "type": "i64"
        },
        {
          "name": "finishedSeconds",
          "type": "i64"
        }
      ]
    },
    {
      "name": "updateOracle",
      "accounts": [
        {
          "name": "oracleItem",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "oracleAuthorizer",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feedAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "chainlinkProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "oracleAuthorizer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "createdAt",
            "type": "i64"
          },
          {
            "name": "closedSeconds",
            "type": "i64"
          },
          {
            "name": "finishedSeconds",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "oracleItem",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "chainlinkFeed",
            "type": "publicKey"
          },
          {
            "name": "startedAt",
            "type": "i64"
          },
          {
            "name": "closedAt",
            "type": "i64"
          },
          {
            "name": "finishedAt",
            "type": "i64"
          },
          {
            "name": "isFinished",
            "type": "bool"
          },
          {
            "name": "decimals",
            "type": "u8"
          },
          {
            "name": "round",
            "type": "i128"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "TimeInvalid",
      "msg": "the current timestamp should be greater than closed_at"
    },
    {
      "code": 6001,
      "name": "OracleExpired",
      "msg": "Oracle expired"
    }
  ]
};
