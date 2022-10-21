import { Routes, Route } from "react-router-dom";
import SuperheroesGalleryView from "./views/SuperheroesGalleryView";
import SuperheroInfoView from "./views/SuperheroInfoView";

function App() {
  // const navigate = useNavigate();

  // const __ = () => navigate('/superhero-info');

  return (
    <Routes>
      <Route exact path="/" element={<SuperheroesGalleryView />} />
      <Route exact path="/superhero-info" element={<SuperheroInfoView />} />
    </Routes>
  );
}

export default App;
