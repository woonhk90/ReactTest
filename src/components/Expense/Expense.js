import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../Ui/Card";
import "./Expense.css";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const publicYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpenses = props.item.filter((v) => {
    return v.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onPublicYear={publicYear} />
        <ExpenseChart expenses={filterExpenses} />
        <ExpenseList item={filterExpenses} />
      </Card>
    </div>
  );
}
export default Expense;
