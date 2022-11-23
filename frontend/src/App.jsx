import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Container>
        <Header />
        <main className="py-3">
          <h1>hello world</h1>
        </main>
        <Footer />
      </Container>
    </>
  );
}

export default App;
