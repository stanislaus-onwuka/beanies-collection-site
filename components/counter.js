import { HiPlus, HiMinus } from "react-icons/hi";

import styles from "@styles/counter.module.scss";

const Counter = ({ amountToMint, onIncrement, onDecrement }) => {
  return (
    <div className={styles.container}>
      <div onClick={onDecrement} className={styles.decrement}>
        <HiMinus />
      </div>
      <p>{amountToMint}</p>
      <div onClick={onIncrement} className={styles.increment}>
        <HiPlus />
      </div>
    </div>
  );
};

export default Counter;
