import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./layout/Layout";
import CategoryList from "./components/category/CategoryList/CategoryList";
import NoteList from "./components/note/NoteList/NoteList";

const App = () => {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<CategoryList />}>
            <Route path=":categoryId/notes" element={<NoteList />} />
          </Route>
        </Routes>
      </Router>
    </Layout>
  );
};

export default App;
