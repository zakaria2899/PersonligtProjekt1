import './dropdownList.css';
import '../../../root.css';
import dropdownListIcon from '../../../assets/images/dropdown-icon.png';
import dropdownListDarkmodeIcon from '../../../assets/images/dropdown-darkmode-icon.png';
import FilterOption from '../filteroptions/filterOptions.js';
import { useState } from 'react';

const DropdownList = (props) => {
  const [isListActive, setIsListActive] = useState(false);

  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  return (
    <>
      <section className="dropdown">
        <div
          id={
            props.region === '' ? 'remove-filter-box hide' : 'remove-filter-box'
          }
        >
          <p
            onClick={() => {
              props.onClick('');
              props.displayByRegion(props.countries, '');
            }}
          >
            {props.region !== '' ? 'Remove filter: ' + props.region : ''}
          </p>
        </div>
        <section className="dropdown-list">
          <h4>Filter by region</h4>
          <img
            src={props.isdark ? dropdownListDarkmodeIcon : dropdownListIcon}
            alt="Dropdown list icon"
            onClick={() => {
              if (isListActive) {
                setIsListActive(false);
              } else {
                setIsListActive(true);
              }
            }}
          />
        </section>

        <section
          className={
            isListActive ? 'dropdown-content show' : 'dropdown-content hide'
          }
          id="myDropdown"
        >
          {regions.map((region, index) => {
            return (
              <FilterOption
                nameValue={region}
                region={props.region}
                onClick={props.onClick}
                displayByRegion={props.displayByRegion}
                countries={props.countries}
                isListActive={isListActive}
                setIsListActive={setIsListActive}
                key={index}
              />
            );
          })}
        </section>
      </section>
    </>
  );
};

export default DropdownList;
