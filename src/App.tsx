import Layout from "./layout/Layout";
import "./App.css";
import CategoryList from "./components/category/CategoryList/CategoryList";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NoteList from "./components/note/NoteList/NoteList";

const App = () => {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<CategoryList />}>
            <Route path=":categoryId/notes" element={<NoteList />} />
          </Route>
          {/* <CategoryList /> */}
        </Routes>
      </Router>
    </Layout>
  );
};

export default App;
