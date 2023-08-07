import { Modal } from "../modal";
import { useNavigate } from "react-router-dom";

interface ModalErrorProps {
  toggleModal: () => void;
}

export const ModalErrorTask = ({ toggleModal }: ModalErrorProps) => {
  const navigate = useNavigate()

  const handleCloseAndRedirect = () => {
    toggleModal()
    navigate("/login")
  }

  return (
    <Modal toggleModal={toggleModal} blockClosing>
        Você não está autenticado!
        <button onClick={handleCloseAndRedirect}>Ir para o login</button>
    </Modal>
  );
};
