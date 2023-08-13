export default function InvestmentResult(props) {
    return (
        <tr>
          <td>{props.year}</td>
          <td>${props.totalSavings}</td>
          <td>${props.yearInterest}</td>
          <td>${props.totalInterest}</td>
          <td>${props.investedCapital}</td>
        </tr>
    )
}