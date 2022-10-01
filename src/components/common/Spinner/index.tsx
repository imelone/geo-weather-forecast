import style from './style.module.css';

export const Spinner: React.FC = () => (
  <div className={style.center}>
    <div className={style.ldsRoller}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);
