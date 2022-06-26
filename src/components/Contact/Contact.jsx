import { useDispatch, useSelector } from "react-redux";
// import { removeContact } from "../../redux/contacts/actions";
import { AiOutlineDelete } from "react-icons/ai";
import s from "./Contact.module.css";
import { useEffect } from "react";
import {
  fetchContacts,
  removeContact,
} from "../../redux/contacts/phonebookOperation";

const Contacts = () => {
  const { filter, entities } = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const contacts = entities.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={s.list}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id} className={s.item}>
            {contact.name}: {contact.number}
            <button
              key={contact.id}
              name={contact.name}
              className={s.btn}
              type="button"
              onClick={() => dispatch(removeContact(contact.id))}
            >
              <AiOutlineDelete className={s.ImSearch} />
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default Contacts;
