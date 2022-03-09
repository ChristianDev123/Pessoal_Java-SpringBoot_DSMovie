import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from "pages/Listing/listagem";
import Form from "pages/Form/form";
import Navbar from "components/Navbar/navbar";

function App() {
  return (
    <BrowserRouter>

      <Navbar /> {/* Todas as páginas estarão já configuradas para terem este navbar*/}
      
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} /> {/* esta sub rota passa um parametro por get para a página form */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
