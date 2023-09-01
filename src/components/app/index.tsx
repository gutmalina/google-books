import Header from "../header";
import Main from "../main";
import Footer from "../footer";
import Modal from "../modal";
import Library from "../../images/library";
import { useAppSelector } from "../../services/hooks";

const App = () => {
  const preloader = useAppSelector((store) => store.preloader);

  return (
    <>
      <Library />
      <Header />
      <Main />
      <Footer />
      {preloader ? <Modal /> : null}
    </>
  );
};

export default App;
