import Layout from "./layout/Layout";
import "./App.css";
import CategoryList from "./components/category/CategoryList/CategoryList";
import { CategoryProvider } from "./context/Category.context";

const App = () => {
  return (
    <Layout>
      <CategoryProvider>
        <CategoryList />
      </CategoryProvider>
      {/* <Button variant="default">Click me</Button> */}
    </Layout>
  );
};

export default App;
