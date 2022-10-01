import './style.css';

export const Spinner: React.FC = () => (
  <div className='center'>
    <div className='lds__roller'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);
