import Image from "next/image";
//import Link from "next/link";
import WalletButton from "../components/walletButton";
import logo from "../public/assets/svgs/Beanies-Logo.svg";

import styles from "@styles/mintHeader.module.scss";

const MintHeader = ({ wallet }) => {
  return (
    <div className={styles.container}>
      {/*
        <Link href="/">
        <a>
        {//<img src="/logo.png" />}
        <Image priority src={logo} alt="beanie" /> 
        </a></Link>
        */}
      {wallet && <WalletButton />}
    </div>
  );
};

export default MintHeader;
