import Home from "./components/Home";

import Houses from "./pages/Houses";
import Wrapper from "./pages/Wrapper";

const App: React.FC = () => {
  return (
    <Wrapper>
      <Home />
      <Houses />
    </Wrapper>
  );
};

export default App;
