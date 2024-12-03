import '../app/App.css';
import '../root.css';
import Searchbar from '../components/stateful components/searchbar/searchbar.js';
import DropdownList from '../components/stateful components/dropdownList/dropdownList.js';

const Home = (props) => {
  return (
    <section className="main-container">
      <div className="search_and_filter_container">
        <Searchbar
          input={props.input}
          onChange={props.onChange}
          filterCountries={props.filterCountries}
          countries={props.countries}
          isdark={props.isdark}
          onClick={props.onClick}
          setInput={props.setInput}
        />

        <DropdownList
          isdark={props.isdark}
          onClick={props.onClick}
          displayByRegion={props.displayByRegion}
          countries={props.countries}
          region={props.region}
        />
      </div>
      <section className="searchbar-and-filter-container"></section>
      <section className="countrycard-container">{props.searchQuery()}</section>
    </section>
  );
};

export default Home;
