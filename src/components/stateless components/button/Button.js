import { Link } from 'react-router-dom';
import '../../../root.css';
import './Button.css';
const Button = (props) => {
  return (
    <Link to={props.target}>
      <button>Back</button>
    </Link>
  );
};

export default Button;
