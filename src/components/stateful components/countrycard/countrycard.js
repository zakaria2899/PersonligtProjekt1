import '../../../root.css';
import './countrycard.css';
import { Link } from 'react-router-dom';

const CountryCard = (props) => {
  const { flag, name, population, region, capital } = props;
  return (
    <section
      className="countrycard"
      onClick={() => {
        localStorage.setItem('selectedCountry', name);
        localStorage.setItem('latitude', props.latlng[0]);
        localStorage.setItem('longitude', props.latlng[1]);
        window.scrollTo(0, 0);
      }}
    >
      <Link to="countrydetails">
        <img src={flag} alt="Country" />

        <h4>{name}</h4>
        <div className="countryinformation-container">
          <h6>
            Population: <span>{population}</span>
          </h6>
          <h6>
            Region: <span>{region}</span>
          </h6>
          <h6>
            Capital: <span>{capital}</span>
          </h6>
        </div>
      </Link>
    </section>
  );
};

export default CountryCard;
