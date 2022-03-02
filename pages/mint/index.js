import Head from 'next/head'
import styles from '@styles/mintpage.module.scss'
import { useState, useContext } from "react";
import Web3 from "web3";
import Image from "next/image";
import { useAlert } from "react-alert";
//import BeaniesABI from "../artifacts/BeaniesABI.json";
import { Counter } from "@components/counter";
import { MintHeader } from "@components/MintHeader";
import { WalletContext } from "@state/Wallet";
//import Beanies1 from "../assets/images/Beanies1.svg";



export default function Mint() {

    const [amountToMint, setAmountToMint] = useState(0);

  const { provider, connectWallet, walletAddress } = useContext(WalletContext);

  const alert = useAlert();

  //const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
  const CONTRACT_ADDRESS ="0x2A0a23e0476a7f31442F8Ab8BA0eE90b2b7024bB";
  //const COLLECTION_PRICE = process.env.NEXT_PUBLIC_COLLECTION_PRICE;
  const COLLECTION_PRICE = 500000000000000000;
 
  const onIncrement = () => {
    if (amountToMint < 3) {
      setAmountToMint(amountToMint + 1);
    }
  };

  const onDecrement = () => {ß
    if (amountToMint > 0) {
      setAmountToMint(amountToMint - 1);
    }
  };

  const initMint = (_provider, _address) => {
    const contract = new _provider.Contract(BeaniesABI, CONTRACT_ADDRESS);

    const transaction = {
      from: _address,
      to: CONTRACT_ADDRESS,
      value: COLLECTION_PRICE * amountToMint,
      data: contract.methods.mintBeanies(amountToMint).encodeABI(),
    };

    _provider
      .sendTransaction(transaction)
      .on("receipt", () => {
        alert.show("Minted successfully, check your wallet", {
          type: "success",
        });
      })
      .on("error", (err) => {
        alert.show(err.message, {
          type: "error",
        });
        console.error(err);
      });
  };

  const mint = (provider, address) => {
    if (amountToMint > 0 && provider && address) {
      initMint(provider, address);
    } else {
      connectWallet()
        .then((_provider, _address) => {
          initMint(_provider, _address);
        })
        .catch((err) => {
          console.log("something went wrong", err);
        });
    }
  };


    return (
        <div className={styles.mintpageContainer}>
          <Head>
            <title>Mint Beanies | Beanies</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h3>Mint</h3>
            </main>
        </div>
    )
}