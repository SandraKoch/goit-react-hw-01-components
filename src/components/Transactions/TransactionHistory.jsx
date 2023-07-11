import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => (
  <table className={css.transactions}>
    <thead>
      <tr className={css.trow}>
        <th className={css.th}>Type</th>
        <th className={css.th}>Amount</th>
        <th className={css.th}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <tr className={css.trow} key={item.id}>
          <td className={css.th}>{item.type}</td>
          <td className={css.th}>{item.amount}</td>
          <td className={css.th}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
