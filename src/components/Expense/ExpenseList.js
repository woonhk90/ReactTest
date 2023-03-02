import React from "react";
import ExpenseItem from "./ExpenseItem";

import "./ExpenseList.css";
const ExpenseList = (props) => {
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.item.map((v) => (
        <ExpenseItem
          key={v.id}
          title={v.title}
          amount={v.amount}
          date={v.date}
        />
      ))}
    </ul>
  );
};
export default ExpenseList;
