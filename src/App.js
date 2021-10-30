import { useEffect, useState } from "react";
import Table from "./Components/Table Props/Table";
import Header from "./Components/Header/Header";
import "./Style/App.css";
function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="App pb-5">
      <Header scrollPosition={scrollPosition > 200 ? "shadow fixed-top" : ""} />
      <div className="container pt-3">
        <Table />
      </div>
    </div>
  );
}

export default App;
