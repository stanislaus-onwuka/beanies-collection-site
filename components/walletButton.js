import { useContext } from "react";
import {WalletContext} from '../state/Wallet'
import styles from "../styles/walletButton.module.scss";

const walletButton = ({ ...props }) => {
  const { walletAddress, connectWallet } = useContext(WalletContext);

  const handleBtn = () => {
    if (!walletAddress) {
      connectWallet();
    }
  };

  const getButtonString = () => {
    return walletAddress.substring(0, 4) + '....' + walletAddress.substring(walletAddress.length - 4);
  }
  
  return (
    <button onClick={handleBtn} {...props} className={styles.container}>
      {walletAddress ? getButtonString() : 'Connect wallet'}
    </button>
  );
};

export default walletButton;
