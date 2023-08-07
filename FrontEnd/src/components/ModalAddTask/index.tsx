import { useForm } from "react-hook-form";
import { ContactData, schema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "../modal";
import { api } from "../../services/api";
import { Contact } from "../card";

interface ModalAddTakkProps {
  toggleModal: () => void;
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
}

export const ModalAddTask = ({
  toggleModal,
  setContacts,
}: ModalAddTakkProps) => {
  const {
    register,
    handleSubmit,
  } = useForm<ContactData>({
    resolver: zodResolver(schema),
    criteriaMode: "all",
  });

  const createContacts = async (data: ContactData) => {
    const response = await api.post<Contact>("/contacts", data);

    setContacts((previusContacts) => [response.data, ...previusContacts]);
  };

  return (
    <Modal toggleModal={toggleModal}>
      <form onSubmit={handleSubmit(createContacts)}>
        <label htmlFor="name" placeholder="Digite o nome aqui">
          Nome
        </label>
        <input type="text" id="name" {...register("name")} />
        <label htmlFor="email" placeholder="Digite o email aqui">
          E-mail
        </label>
        <input type="email" id="email" {...register("email")} />

        <label htmlFor="phoneNumber" placeholder="Digite o número aqui">
          Numero de telefone
        </label>
        <input type="text" id="phoneNumber" {...register("phoneNumber")} />

        <button type="submit">Cadastrar</button>
      </form>
    </Modal>
  );
};
