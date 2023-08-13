import InvestmentResult from "./InvestmentResult";

export default function InvestmentResultsTable({ userData }) {
  const calculateHandler = (data) => {
    const yearlyData = []; // per-year results

    let currentSavings = Number(data.currentSavings); 
    let totalInterestToYear = 0;
    let investedCapitalToDate = currentSavings;
    const yearlyContribution = Number(data.yearlyContribution);
    const expectedReturn = Number(data.expectedInterest) / 100;
    const duration = Number(data.investmentDuration);

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      investedCapitalToDate += yearlyContribution;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterestToYear += yearlyInterest;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest.toFixed(2),
        savingsEndOfYear: currentSavings.toFixed(2),
        yearlyContribution: yearlyContribution.toFixed(2),
        cumulativeInterest: totalInterestToYear.toFixed(2),
        cumulativeInvestment: investedCapitalToDate.toFixed(2)
      });
    }

    return yearlyData;
  };

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>YEAR NUMBER</td>
          <td>TOTAL SAVINGS END OF YEAR</td>
          <td>INTEREST GAINED IN YEAR</td>
          <td>TOTAL INTEREST GAINED</td>
          <td>TOTAL INVESTED CAPITAL</td>
        </tr>
        {calculateHandler(userData).map((dataPoint) => (
          <InvestmentResult
            year={dataPoint.year} // 1 -> duration + 1 
            totalSavings={dataPoint.savingsEndOfYear} // cumulative savings to date 
            yearInterest={dataPoint.yearlyInterest} // cumulative savings * expected interest rate
            totalInterest={dataPoint.cumulativeInterest} // cumulative interest earned to date
            investedCapital={dataPoint.cumulativeInvestment}  // cumulative investment made (currentSavings year 1 + (yearly savings * year))
            key={dataPoint.year}
          />
        ))}
      </tbody>
    </table>
  );
}
