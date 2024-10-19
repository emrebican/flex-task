import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import CategoryList from "./components/category/CategoryList/CategoryList";
import NoteList from "./components/note/NoteList/NoteList";
import NoteCreate from "./components/note/NoteCreate/NoteCreate";
import NoteDetail from "./components/note/NoteDetail/NoteDetail";

const App = () => {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<CategoryList />}>
            <Route path=":categoryId/notes" element={<NoteList />}>
              <Route path=":noteId/detail" element={<NoteDetail />} />
            </Route>
            <Route path=":categoryId/note-create" element={<NoteCreate />} />
          </Route>
        </Routes>
      </Router>
    </Layout>
  );
};

export default App;
