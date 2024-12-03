import '../../../root.css';
import './searchbar.css';
import searchbarIcon from '../../../assets/images/searchbar.png';
import searchbarDarkModeIcon from '../../../assets/images/searchbar_darkmode.png';
import clearQueryIcon from '../../../assets/images/clear_query.png';

const Searchbar = (props) => {
  return (
    <section className="searchbar-container">
      <img
        src={
          props.isdark && props.input === ''
            ? searchbarDarkModeIcon
            : !props.isDark && props.input === ''
            ? searchbarIcon
            : clearQueryIcon
        }
        alt="Search"
        onClick={() => {
          props.setInput('');
          props.filterCountries(props.countries, '');
        }}
      />
      <input
        type="text"
        value={props.input}
        className="input_field"
        placeholder="Search for a country..."
        onChange={(event) => {
          props.onChange(event.target.value);
          props.filterCountries(props.countries, event.target.value);
        }}
      />
    </section>
  );
};

export default Searchbar;
