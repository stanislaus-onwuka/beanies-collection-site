import Link from "next/link";
import WalletButton from "../components/walletButton";

import styles from "@styles/mintHeader.module.scss";

const MintHeader = ({ wallet }) => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <img src="/assets/svgs/Beanies-Logo.svg" />
      </Link>
      {wallet && <WalletButton />}
    </div>
  );
};

export default MintHeader;
