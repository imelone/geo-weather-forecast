import { Link } from 'react-router-dom';

import style from './style.module.css';

interface INotFoundProps {
  title: string;
  description: string;
  buttonText: string;
}
export const ErrorPage: React.FC<INotFoundProps> = (props: INotFoundProps) => {
  const { title, description, buttonText } = props;
  return (
    <main className={style.ErrorPageMain}>
      <div className={style.ErrorPageContainer}>
        <h1 className={style.ErrorPageContainerTitle}>{title}</h1>
        <h4>{description}</h4>
        <Link to='/'>
          <button className={style.ErrorPageButton}>{buttonText}</button>
        </Link>
      </div>
    </main>
  );
};
