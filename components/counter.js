import { HiPlusCircle, HiMinusCircle } from "react-icons/hi";

import styles from "@styles/counter.module.scss";

const Counter = ({ amountToMint, onIncrement, onDecrement }) => {
  return (
    <div className={styles.container}>
      <div onClick={onDecrement} className={styles.decrement}>
        <HiMinusCircle />
      </div>
      <p>{amountToMint}</p>
      <div onClick={onIncrement} className={styles.increment}>
        <HiPlusCircle />
      </div>
    </div>
  );
};

export default Counter;
