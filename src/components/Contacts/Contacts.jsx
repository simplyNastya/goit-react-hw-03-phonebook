import PropTypes from 'prop-types';
import styles from './contacts.module.css';

const Contacts = ({ filteredContacts, deleteItem }) => {
  return (
    <div>
      <ul className={styles.list}>
        {filteredContacts().map(contact => {
          return (
            <li className={styles.item} key={contact.id}>
              <p className={styles.itemName}>
                {contact.name}: <span>{contact.number}</span>
              </p>
              <button
                onClick={() => {
                  deleteItem(contact.id);
                }}
                type="submit"
                className={styles.btn}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Contacts;

Contacts.propTypes = {
  filteredContacts: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
