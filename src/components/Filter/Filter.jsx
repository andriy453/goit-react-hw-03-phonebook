import PropTypes from 'prop-types';
import '../../components/Filter/Filter.css';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <p className="filter-text">Find contacts by name</p>
      <label className="Filter_Todo">
        <input
          type="text"
          className="filter_inp"
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
};
export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};