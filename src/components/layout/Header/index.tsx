import style from './style.module.css';

interface IHeaderProps {
  title: string;
  logo: string;
}

export const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
  const { title, logo } = props;
  return (
    <header className={style.header}>
      <h1>{title}</h1>
      <img className={style.logo} src={logo} alt='logo' />
    </header>
  );
};
