import './style.css';

interface IFooter {
  footerCopyrightText: string;
}

export const Footer: React.FC<IFooter> = (props: IFooter) => {
  const { footerCopyrightText } = props;
  return (
    <main className='footer__main'>
      <h3 className='footer__copyright__text'>{footerCopyrightText}</h3>
    </main>
  );
};
