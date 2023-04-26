import PropTypes from 'prop-types';
import s from './Profile.module.css'

export const Profile = ({ username, tag, location, avatar, stats }) => {

  const userStates = [
    {
      label: 'Followers',
      quantity: stats.followers
    },
    {
      label: 'Views',
      quantity: stats.views
    },
    {
      label: 'Likes',
      quantity: stats.likes
    }
  ];

  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={s.avatar}/>
        <p className={s.name}>{username}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        {userStates.map(({ label, quantity }) =>
          <li key={label} className={s.item}>
            <span className={s.label}>{label} </span>
            <span className={s.quantity}>{quantity}</span>
          </li>
        )}
      </ul>
    </div>
  )
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({ followers:PropTypes.number, views:PropTypes.number, likes:PropTypes.number}),
}
