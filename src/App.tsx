import Layout from "./layout/Layout";
import "./App.css";
import { Button } from "./components/ui/button";
import Card from "./components/ui/card";

function App() {
  return (
    <Layout>
      <Card>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quasi
          deserunt, nobis voluptates accusantium ipsum sint nulla alias fugit
          repellat vel veritatis, corrupti error qui harum. Mollitia ipsam
          recusandae expedita. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Autem quasi deserunt, nobis voluptates accusantium
          ipsum sint nulla alias fugit repellat vel veritatis, corrupti error
          qui harum. Mollitia ipsam recusandae expedita.
        </div>
      </Card>
      <Button variant="default">Click me</Button>
    </Layout>
  );
}

export default App;
