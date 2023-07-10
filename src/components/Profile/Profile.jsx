export const Profile = ({ username, tag, location, avatar, stats }) => (
  <div class="profile">
    <div class="description">
      <img src={avatar} alt="User avatar" class="avatar" />
      <p class="name">{username}</p>
      <p class="tag">{tag}</p>
      <p class="location">{location}</p>
    </div>

    <ul class="stats">
      {Object.entries(stats).map(([key, value]) => (
        <li key={key}>
          <span class="label">{key} </span>
          <span class="quantity">{value}</span>
        </li>
      ))}
    </ul>
  </div>
);
