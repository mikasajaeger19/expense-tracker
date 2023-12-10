import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const handleDelete = () => {
    console.log(`Deleting transaction with ID: ${transaction.id}`);
    deleteTransaction(transaction.id);
  };

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
      <button className="delete-btn" onClick={handleDelete}>
        x
      </button>
    </li>
  );
};

export default Transaction;
