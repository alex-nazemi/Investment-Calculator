import InvestmentHeader from './Components/InvestmentHeader';
import InvestmentResultsTable from './Components/InvestmentResultsTable';
import InvestmentUserInputForm from './Components/InvestmentUserInputForm';
import { useState } from 'react';

function App() {

  const [userInput, setUserInput] = useState({
    currentSavings: "",
    yearlyContribution: "",
    expectedInterest: "",
    investmentDuration: ""
  });

  const userInputHandler = (userData) => {
    setUserInput(userData);
  }

  return (
    <div>
      <InvestmentHeader />
      <InvestmentUserInputForm handler={userInputHandler} userInput={userInput}/>
      <InvestmentResultsTable userData={userInput} />
    </div>
  );
}

export default App;
