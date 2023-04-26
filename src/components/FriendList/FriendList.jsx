import PropTypes from 'prop-types';
import s from './FriendList.module.css'
import clsx from 'clsx';


export const FriendList = ({ friends }) => {
    

    return (
        <ul className={s.list} >
            {friends.map(({ avatar, name, isOnline, id }) =>
            <li className={s.item} key={id}>
                    <span className={clsx(s.status, isOnline && s.active)}>{isOnline}</span>
                 <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={s.name}>{name}</p>
            </li>
            )}
            
        </ul>
    )
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string,  
            isOnline: PropTypes.bool,
            id: PropTypes.number
        })
    )
}