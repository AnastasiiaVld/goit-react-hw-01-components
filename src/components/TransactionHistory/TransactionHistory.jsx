import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => {
    return (
 <table className={s.history}>
   <thead className={s.thed}>
    <tr className={s.tr}>
      <th className={s.th}>Type</th>
      <th className={s.th}>Amount</th>
      <th className={s.th}>Currency</th>
    </tr>
  </thead>

  <tbody className={s.bady}>
    {items.map(({ id, type, amount, currency }) =>
        <tr className={s.trd} key={id}>
            <td className={s.td}>{type}</td>
             <td className={s.td}>{amount}</td>
            <td className={s.td}>{currency}</td>
        </tr>
    )}
                
  </tbody>
        </table>
    )
}


TransactionHistory.propTypes = {
     items: PropTypes.arrayOf(
        PropTypes.shape({
        id:PropTypes.string, 
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string
        })
    )
}