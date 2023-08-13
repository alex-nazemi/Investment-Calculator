export default function InvestmentUserInputForm({ handler }) {

    const submitHandler = (event) => {
        event.preventDefault();
        const investmentData = {
            currentSavings: event.target[0].value,
            yearlyContribution: event.target[1].value,
            expectedInterest: event.target[2].value,
            investmentDuration: event.target[3].value
        }

        handler(investmentData);

    }

    const resetHandler = (event) => {

        const investmentData = {
            currentSavings: "",
            yearlyContribution: "",
            expectedInterest: "",
            investmentDuration: ""
        }

        handler(investmentData);
    }





  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="currentSavings" />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearlyContribution" />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expectedInterest" />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="investmentDuration" />
        </p>
      </div>
      <p className="actions">
        <button type="reset" onClick={resetHandler} className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}
