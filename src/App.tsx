import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import InitialLoadingWrapper from "./components/loading/LoadingWrapper";

const App = () => (
  <InitialLoadingWrapper>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Index />} />
      </Routes>
    </BrowserRouter>
  </InitialLoadingWrapper>

);

export default App;