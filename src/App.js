import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import SuperheroesGalleryView from "./views/SuperheroesGalleryView";
import SuperheroInfoView from "./views/SuperheroInfoView";

function App() {
  // const navigate = useNavigate();

  // const __ = () => navigate('/superhero-info');

  return (
    <>
      <Toaster />
      <Routes>
        <Route exact path="/" element={<SuperheroesGalleryView />} />
        <Route exact path="/:id" element={<SuperheroInfoView />} />
      </Routes>
    </>
  );
}

export default App;
