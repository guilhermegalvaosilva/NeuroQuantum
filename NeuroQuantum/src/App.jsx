import Header from "./components/header/Header"; // import com H maiúsculo
import Head from "./components/head/head";
import Main from "./components/main/Main";
import Services from "./components/services/Services";
import Approach from "./components/Approach/Approach";
function App() {
  return (
    <div className="app">
      <Header />
      <Head />

      <Services />
      <Approach />
    </div>
  );
}

export default App;
