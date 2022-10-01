import style from './style.module.css';

interface IMessageProps {
  text: string;
}

export const Message: React.FC<IMessageProps> = (props: IMessageProps) => {
  return <div className={style.message}>{props.text}</div>;
};
