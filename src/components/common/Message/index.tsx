import './style.css';

interface IMessageProps {
  text: string;
}

export const Message: React.FC<IMessageProps> = (props: IMessageProps) => {
  return <div className='message'>{props.text}</div>;
};
