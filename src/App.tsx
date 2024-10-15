import Layout from "./layout/Layout";
import "./App.css";
import CategoryList from "./components/category/CategoryList/CategoryList";
import { CategoryModel } from "./models/Category.model";

const App = () => {
  const categories: CategoryModel[] = [
    {
      id: 1,
      title: "category 1",
      notes: [
        {
          id: 1,
          title: "note 11",
          content: "content 11",
        },
      ],
    },
    {
      id: 2,
      title: "category 2",
      notes: [
        {
          id: 1,
          title: "note 21",
          content: "content 21",
        },
      ],
    },
    {
      id: 3,
      title: "category 3",
      notes: [
        {
          id: 1,
          title: "note 31",
          content: "content 31",
        },
      ],
    },
  ];

  return (
    <Layout>
      <CategoryList categories={categories} />
      {/* <Button variant="default">Click me</Button> */}
    </Layout>
  );
};

export default App;
