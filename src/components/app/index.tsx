import Header from "../header";
import Main from "../main";
import Footer from "../footer";
import Modal from "../modal";
import Library from "../../images/library";
import { useAppSelector } from "../../services/hooks";

const App = () => {
  const card = useAppSelector((store) => store.card);

  return (
    <>
      <Library />
      <Header />
      <Main />
      <Footer />
      {card ? <Modal /> : null}
    </>
  );
};

export default App;
