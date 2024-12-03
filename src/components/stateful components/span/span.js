import './span.css';
import { Link } from 'react-router-dom';

const Span = (props) => {
  return (
    <Link
      to={'/countrydetails'}
      onClick={() => {
        localStorage.setItem('selectedCountry', props.name);

        localStorage.setItem('latitude', props.latlng[0]);
        localStorage.setItem('longitude', props.latlng[1]);
        window.location.reload();
        window.scrollTo(0, 0);
      }}
      className="link"
    >
      <div className="span">
        <div className="span__text">
          <h1>{props.name}</h1>
        </div>
      </div>
    </Link>
  );
};

export default Span;
