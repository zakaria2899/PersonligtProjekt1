import './navigationbar.css';
import '../../../root.css';
import lightModeIcon from '../../../assets/images/moon.png';
import darkModeIcon from '../../../assets/images/moon_darkmode.png';

const NavigationBar = (props) => {
  const handleEvents = (remove, add, setItem, boolean) => {
    document.body.classList.remove(remove);
    document.body.classList.add(add);
    localStorage.setItem('theme', setItem);
    props.onClick(boolean);
  };

  const checkTheme = (props) => {
    if (localStorage.getItem('theme') === 'dark') {
      handleEvents('darkmode', 'lightmode', 'light', false);
    } else if (localStorage.getItem('theme') === 'light') {
      handleEvents('lightmode', 'darkmode', 'dark', true);
    }

    if (localStorage.getItem('theme') === null) {
      handleEvents('lightmode', 'darkmode', 'dark', true);
    }
  };

  return (
    <nav>
      <div id="navigation-container">
        <h4>Where in the world?</h4>
        <div id="theme-switcher">
          <img
            src={props.isdark ? darkModeIcon : lightModeIcon}
            alt="Dark mode"
            onClick={() => {
              checkTheme(props);
            }}
          />

          <h6>{props.isdark ? 'Light Mode' : 'Dark Mode'}</h6>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
