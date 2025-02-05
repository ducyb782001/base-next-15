import React, { useState } from "react";
import { WalletTgSdk } from "@uxuycom/web3-tg-sdk";

function TestConnect(props) {
  const { ethereum } = new WalletTgSdk();
  console.log("🚀 ~ TestConnect ~ ethereum:", ethereum);
  const [state, setState] = useState({
    appInfo: null,
    address: null,
    // chainId: 1,
    chainId: 137,
    signature: null,
    message: "test demo",
    transaction: {
      to: "0xc6a926aCab5A7C6346174A66dCfF502e4f52cf6B",
      value: 0,
    },
  });

  return (
    <div>
      <div>TestConnect</div>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          margin: "20px",
          border: "1px solid",
        }}
      >
        <button
          onClick={() => {
            ethereum
              .request({
                method: "eth_requestAccounts",
                params: [],
              })
              .then((result) => {
                setState({ ...state, address: result[0] });
              })
              .catch((error) => {
                alert(error.message);
              });
          }}
        >
          Connect Wallet
        </button>

        {state.address && (
          <div>
            <h2>Address</h2>
            <p>{state.address}</p>
          </div>
        )}
      </div>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          margin: "20px",
          border: "1px solid",
        }}
      >
        <button
          onClick={() => {
            ethereum
              .request({
                method: "eth_accounts",
                params: [],
              })
              .then((result) => {
                setState({ ...state, address: result[0] });
              })
              .catch((error) => {
                alert(error.message);
              });
          }}
        >
          get address
        </button>

        {state.address && (
          <div>
            <h2>Address</h2>
            <p>{state.address}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TestConnect;
