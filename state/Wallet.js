import { useState, createContext, useEffect } from "react";
import Web3 from "web3";
import { useAlert } from "react-alert";

export const WalletContext = createContext();

const { Provider } = WalletContext;

const LOCAL_STORAGE_KEY = "beanies_wallet";

const WalletProvider = ({ children }) => {
  const [provider, setProvider] = useState(null);
  const [walletAddress, setAddress] = useState("");

  const alert = useAlert();

  const getAddress = async (provider) => {
    const accounts = await provider.getAccounts();

    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, String(accounts[0]));
    } catch (err) {
      console.err(err);
    }
    return accounts[0];
  };

  const connectWallet = () => {
    const fn = async (resolve, reject) => {
      try {
        if (window.ethereum) {
          const web3 = new Web3(window.ethereum);
          await window.ethereum.send("eth_requestAccounts");
          // Accounts now exposed, use them
          const _provider = web3.eth;
          setProvider(_provider);

          const _address = await getAddress(_provider);

          resolve(_provider, _address);
        } else {
          window.open("https://metamask.io/download.html", "_newtab");
          reject();
        }
      } catch (err) {
        alert.show(err.message, {
          type: "error",
        });
        console.error("err", err);
        reject();
      }
    };
    return new Promise((resolve, reject) => {
      fn(resolve, reject);
    });
  };

  useEffect(() => {
    const cb = (accounts) => {
      if (accounts.length > 0) {
        setAddress(accounts[0]);
        localStorage.setItem(LOCAL_STORAGE_KEY, accounts[0]);
      } else {
        setAddress('');
        setProvider(null);
        localStorage.removeItem(LOCAL_STORAGE_KEY);
      }
    };

    if (provider) {
      window.ethereum.on("accountsChanged", cb);
      provider.getAccounts().then((accounts) => {
        setAddress(accounts[0]);
      });
    }

    return () => {
      window.ethereum.removeListener("accountsChanged", cb);
    };
  }, [provider]);

  useEffect(() => {
    const initWallet = async () => {
      const address = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (address) {
        setAddress(address);
        const web3 = new Web3(window.ethereum);
        await window.ethereum.send("eth_requestAccounts");
        // Accounts now exposed, use them
        const _provider = web3.eth;
        setProvider(_provider);
      }
    };

    initWallet();
  }, []);

  return (
    <Provider value={{ walletAddress, provider, connectWallet }}>
      {children}
    </Provider>
  );
};

export default WalletProvider;
