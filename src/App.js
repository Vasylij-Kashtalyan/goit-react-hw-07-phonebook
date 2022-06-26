import Container from "./components/Container";
import Section from "./components/Section";
import Contact from "./components/Contact/Contact";
import Filter from "./components/Filter/Filter";
import Form from "./components/Form/Form";
import { useSelector } from "react-redux";
import { Loader } from "./components/Loader/Loader.jsx";
import Notiflix from "notiflix";

const App = () => {
  const { status, error } = useSelector((state) => state.contacts);

  return (
    <Container>
      {error && Notiflix.Notify.error(error)}
      {status === "loading" && <Loader />}
      <Section title="Phonebok">
        <Form />
      </Section>

      <Filter />

      <Section title="Contact">
        <Contact />
      </Section>
    </Container>
  );
};
export default App;
