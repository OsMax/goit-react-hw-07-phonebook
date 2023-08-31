import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/selectors';
import { deletePhone } from 'redux/operations';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(filterContacts);

  const deletItem = id => dispatch(deletePhone(id));

  return (
    <div className={css.listContainer}>
      <ul className={css.contactList}>
        {contacts.map(contact => (
          <li className={css.listItem} key={contact.id}>
            <div className={css.contactInfo}>
              <span className={css.contactName}>{contact.name}: </span>
              <span className={css.contactNumber}>{contact.phone}</span>
            </div>
            <button
              className={css.deletButton}
              onClick={() => deletItem(contact.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
