import PropTypes from 'prop-types';
import styles from './filter.module.css';

const Filter = ({ filter, filterItem }) => {
  return (
    <div className={styles.container}>
      <div className={styles.inputGroup}>
        <label className={styles.title}>Find contacts by name</label>
        <input
          type="text"
          value={filter}
          onChange={filterItem}
          className={styles.input}
        />
      </div>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  filterItem: PropTypes.func.isRequired,
};
