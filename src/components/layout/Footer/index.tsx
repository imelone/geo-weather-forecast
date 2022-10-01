import style from './style.module.css';

interface IFooter {
  footerCopyrightText: string;
}

export const Footer: React.FC<IFooter> = (props: IFooter) => {
  const { footerCopyrightText } = props;
  return (
    <main className={style.footer}>
      <h3 className={style.footerCopyrightText}>{footerCopyrightText}</h3>
    </main>
  );
};
