import { FC } from 'react';
import { Link } from 'react-router-dom';

const Top: FC = () => {
  return (
    <div>
      <p>top page</p>
      <Link to="/login">loginページへ</Link>
    </div>
  );
};

export default Top;
