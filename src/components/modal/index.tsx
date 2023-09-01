import Preloader from "../preloader";
import { createPortal } from "react-dom";
import styles from './modal.module.css';

const modalRoot = document.querySelector("#root-modal") as Element;

const Modal = () => {
  return createPortal(
    <section className={styles.wrapper}>
      <Preloader/>
    </section>,
    modalRoot!
  );
};

export default Modal;
