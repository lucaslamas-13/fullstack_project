import { useEffect, useState } from "react";
import { Board, BoardHeader, BoardLi } from "./style";
import { api } from "../../services/api";
import { ModalAddTask } from "../ModalAddTask";

export interface Contact {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
}

export const Card = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await api.get<Contact[]>("/contacts");

      setContacts(response.data);
    })();
  }, []);

  const toggleModal = () => setIsOpenModal(!isOpenModal);

  return (
    <>
      {
          isOpenModal && <ModalAddTask toggleModal={toggleModal} setContacts={setContacts}/>
        }
      <Board>
        <BoardHeader>
          <h2>Contacts</h2>
          <button type="button" onClick={toggleModal}>+</button>
        </BoardHeader>

        {contacts.map((contact) => (
          <BoardLi key={contact.id}>
            <p>{contact.name}</p>
          </BoardLi>
        ))}
      </Board>
    </>
  );
};
