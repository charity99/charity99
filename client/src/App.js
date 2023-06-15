import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Nav from "./pages/nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        {/* <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route> */}
      </BrowserRouter>
    </>
  );
}

export default App;
