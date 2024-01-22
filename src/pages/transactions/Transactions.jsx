import "./transactions.css";
import Chart from "../../components/chart/Chart";
import { transactionData } from "../../dummyData";

export default function Transactions() {
  return (
    <div className="transactions">
      <div className="transactionsTitleContainer">
        <h1 className="transactionsTitle">Transactions</h1>
      </div>
      <div className="transactionsContainer">
        <div className="transactionTopLeft">
          <Chart
            data={transactionData}
            dataKey="Transactions"
            title="Transactions on Year"
          />
        </div>
      </div>
    </div>
  );
}
