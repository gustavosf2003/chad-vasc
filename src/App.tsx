import { NavLink } from "react-router";
import "./App.css";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout
      className="flex flex-col items-center justify-center"
      currentPageName=""
    >
      <NavLink to="/chadvasc" end>
        ChadVasc
      </NavLink>
    </Layout>
  );
}

export default App;
