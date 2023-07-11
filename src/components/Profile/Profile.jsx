import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className={css.profile}>
    <div className={css.description}>
      <img src={avatar} alt="User avatar" className={css.avatar} />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>{tag}</p>
      <p className={css.location}>{location}</p>
    </div>

    <ul className={css.stats}>
      {Object.entries(stats).map(([key, value]) => (
        <li className={css.wrap} key={key}>
          <span className={css.label}>{key} </span>
          <span className={css.quantity}>{value}</span>
        </li>
      ))}
    </ul>
  </div>
);
