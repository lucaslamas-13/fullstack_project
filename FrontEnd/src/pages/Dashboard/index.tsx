import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/useAuth";

export interface Contact {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
}

const Dashboard = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const {loading} = useAuth()

  useEffect(() => {
    (async () => {
      const response = await api.get<Contact[]>("/contacts");

      setContacts(response.data);
    })();
  }, []);
  return (
    <>
      <h1>Dashboard</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>contact.name</li>
        ))}
      </ul>
    </>
  );
};

export default Dashboard;
