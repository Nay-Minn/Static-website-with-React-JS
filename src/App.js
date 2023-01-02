import "./App.css";
import Navbar from "./components/Navbar";
import data from "./components/data";
import Article from "./components/Article";

function App() {
  const articles = data.map((article) => {
    return <Article key={article.key} {...article} />;
  });

  return (
    <div>
      <Navbar />
      {articles}
    </div>
  );
}

export default App;
