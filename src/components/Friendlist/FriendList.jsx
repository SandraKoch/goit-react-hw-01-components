import css from './FriendList.module.css';

export const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(item => (
      <FriendListItem
        key={item.id}
        name={item.name}
        isOnline={item.isOnline}
        avatar={item.avatar}
      />
    ))}
  </ul>
);

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={css.item}>
    <span className={css.itemStatus}>{isOnline}</span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
);
