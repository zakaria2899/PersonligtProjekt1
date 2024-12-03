import '../../../root.css';
import './QueryMessage.css';

const QueryMessage = (props) => {
  return (
    <h3 className="queryMessage">
      {props.region === ''
        ? props.queryMessage + `" ${props.searchInput} "`
        : props.queryMessage +
          `" ${props.searchInput} "` +
          ' in region ' +
          props.region}
    </h3>
  );
};

export default QueryMessage;
