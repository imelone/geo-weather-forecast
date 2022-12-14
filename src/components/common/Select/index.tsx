import style from './style.module.css';
import { ICity } from '../../../pages/Home/models';

interface ISelectProps {
  data: ICity[];
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: React.FC<ISelectProps> = (props: ISelectProps): JSX.Element => {
  const { data, handleChange } = props;

  return (
    <select className={style.select} onChange={handleChange}>
      {data.map((item: ICity, index: number) => (
        <option className={style.selectOption} key={index} value={JSON.stringify(item.value)}>
          {item.description}
        </option>
      ))}
    </select>
  );
};
