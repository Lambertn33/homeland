import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Houses from "./pages/Houses";

const App: React.FC = () => {
  return (
    <div className="bg-white max-w-[90rem] mx-auto">
      <Header />
      <Home />
      <Houses />
      <Footer />
    </div>
  );
};

export default App;
