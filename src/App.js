import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import SuperheroesGalleryView from "./views/SuperheroesGalleryView";
import SuperheroInfoView from "./views/SuperheroInfoView";
import Container from "./components/Container";
import "./App.css";

function App() {
  return (
    <>
      <Toaster />
      <Container>
        <Routes>
          <Route exact path="/" element={<SuperheroesGalleryView />} />
          <Route exact path="/:id" element={<SuperheroInfoView />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
