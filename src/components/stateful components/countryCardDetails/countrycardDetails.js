import '../../../root.css';
import './countrycardDetails.css';
import { formatNumber } from '../../../root.js';
import Span from '../span/span.js';

const CountrycardDetails = (props) => {
  const array = JSON.parse(localStorage.getItem('countries')).filter(
    (country) => {
      return (
        country.name.toLowerCase() ===
        localStorage.getItem('selectedCountry').toLowerCase()
      );
    }
  );

  const { flag, name, population, region, capital, nativeName, subregion } =
    array[0];
  let topLevelDomain = array[0].topLevelDomain.join(', ');
  let currencies = array[0].currencies
    .map((currency) => currency.name)
    .join(', ');
  let languages = array[0].languages
    .map((language) => language.name)
    .join(', ');

  const borders = () => {
    if (array[0].borders !== undefined) {
      const countries = [];
      const latlng = [];
      JSON.parse(localStorage.getItem('countries')).forEach((country) => {
        for (let i = 0; i < array[0].borders.length; i++) {
          if (array[0].borders[i] === country.alpha3Code) {
            countries.push(country.name);
            latlng.push(country.latlng);
          }
        }
      });

      return countries.map((border, index) => {
        return <Span key={index} name={border} latlng={latlng[index]} />;
      });
    } else {
      return null;
    }
  };

  return (
    <>
      <section className="countrycardDetails">
        <section className="image-container">
          <img src={flag} alt="flag" />
        </section>
        <section className="countryinfo">
          <div className="main-content">
            <h1>{name}</h1>

            <h6>
              Native Name: <span>{nativeName}</span>
            </h6>
            <h6>
              Population: <span>{formatNumber(population)}</span>
            </h6>
            <h6>
              Region: <span>{region}</span>
            </h6>

            <h6>
              Sub Region: <span>{subregion}</span>
            </h6>
            <h6>
              Capital: <span>{capital}</span>
            </h6>
          </div>
          <div className="main-content">
            <h6>
              Top Level Domain: <span>{topLevelDomain}</span>
            </h6>
            <h6>
              Currencies: <span>{currencies}</span>
            </h6>
            <h6>
              Languages: <span>{languages}</span>
            </h6>
          </div>
          <div className="border-countries">
            <h6>
              {borders() === null
                ? 'Border Contries: None'
                : 'Border Countries:'}
            </h6>
            {borders() === null ? '' : borders()}
          </div>
        </section>
      </section>
    </>
  );
};

export default CountrycardDetails;
