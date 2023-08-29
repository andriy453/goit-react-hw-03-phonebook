import PropTypes from 'prop-types';
import '../../components/ContactList/ContactList.css';

const ContactList = ({ contacts, OnDelite }) => {
      return (
        <ul className="contact_list">
          { contacts &&  contacts.map(({ id, name, number }) => {
            return (
              <li className="contact_item" key={id}>
                <p className="contact__text">{name}</p>
                <p className="contact__text">{number}</p>
                <button className="btn" onClick={() => OnDelite(id)}>
                  Видалити
                </button>
              </li>
            );
          })}
        </ul>
      );

};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  OnDelite: PropTypes.func.isRequired,
};
