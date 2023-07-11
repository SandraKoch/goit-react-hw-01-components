import css from './Statistics.module.css';

export const Statistics = ({ title = 'Show statistics', stats }) => (
  <section className={css.statistics}>
    <h2 className={css.title}>{title}</h2>

    <ul className={css.list}>
      {stats.map(item => (
        <li className={css.item} key={item.id}>
          <span className={css.label}>{item.label}</span>
          <span className={css.percentage}>{item.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);
