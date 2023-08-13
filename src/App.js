import InvestmentHeader from "./Components/InvestmentHeader";
import InvestmentResultsTable from "./Components/InvestmentResultsTable";
import InvestmentUserInputForm from "./Components/InvestmentUserInputForm";
import { useState } from "react";

function App() {
  const [dataInputed, setDataInputed] = useState(false);

  const [userInput, setUserInput] = useState({
    currentSavings: "",
    yearlyContribution: "",
    expectedInterest: "",
    investmentDuration: "",
  });

  const userInputHandler = (userData) => {
    setUserInput(userData);
    setDataInputed(true);
  };

  const resetDataInputted = () => {
    setDataInputed(false);
  };

  return (
    <div>
      <InvestmentHeader />
      <InvestmentUserInputForm
        handler={userInputHandler}
        resetDataInputedHandler={resetDataInputted}
      />
      {dataInputed ? (
        <InvestmentResultsTable userData={userInput} />
      ) : (
        <p className="no-investment">No investment calculated yet.</p>
      )}
    </div>
  );
}

export default App;
