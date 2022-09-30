import './style.css';

interface IHeaderProps {
  title: string;
  logo: string;
}

export const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
  const { title, logo } = props;
  return (
    <header className='header'>
      <h1>{title}</h1>
      <img className='logo' src={logo} alt='logo' />
    </header>
  );
};
