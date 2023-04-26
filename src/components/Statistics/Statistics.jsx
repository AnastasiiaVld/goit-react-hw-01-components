import PropTypes from 'prop-types';
import s from './Statistics.module.css'
import { ItemStyled } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {

    return (
    <section className={s.statistics}>
        {title && <h2 className={s.title}>{title}</h2>}
            
        <ul className={s.stats}>
            {stats.map(({ id, label, percentage }) => 
                <ItemStyled className={s.item} key={id} label={label.slice(1)}>
                     <span className={s.label}>{label} </span>
                     <span className={s.percentage}>{percentage}%</span>
                </ItemStyled>
         
             )}         
                
        </ul>
    </section>
    )
}

Statistics.propTypes = {
     title: PropTypes.string,
     stats: PropTypes.arrayOf(
        PropTypes.shape({
        id:PropTypes.string, label:PropTypes.string, percentage:PropTypes.number
        })
    )
}