export const Statistics = ({ title, stats }) => (
  <section class="statistics">
    <h2 class="title">{title}</h2>

    <ul class="stat-list">
      {stats.map(item => (
        <li class="item" key={item.id}>
          <span class="label">{item.label}</span>
          <span class="percentage">{item.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);
