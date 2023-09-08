import { createPortal } from "react-dom";
import styles from "./modal.module.css";
import CardDetails from "../card-details";
import IconClose from "../../images/icon-close";
import { useAppDispatch } from "../../services/hooks";
import { deleteCard } from "../../services/reducers";

const modalRoot = document.querySelector("#root-modal") as Element;

const Modal = () => {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(deleteCard())
  }


  return createPortal(
    <section className={styles.wrapper}>
      <IconClose onClick={handleClick}/>
      <CardDetails />
    </section>,
    modalRoot!
  );
};

export default Modal;
