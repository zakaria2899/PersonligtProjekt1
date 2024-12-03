import '../../root.css';
import './CountryDetails.css';
import Button from '../../components/stateless components/button/Button.js';
import CountrycardDetails from '../../components/stateful components/countryCardDetails/countrycardDetails.js';
import Map from '../../components/stateful components/map/Map.js';
const CountryDetails = (props) => {
  return (
    <>
      <section className="country-details">
        <section className="navigate-to-homepage-button-container">
          <Button target="/" />
        </section>
        <CountrycardDetails />
        <Map />
      </section>
    </>
  );
};

export default CountryDetails;
