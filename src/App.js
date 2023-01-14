import GlobalStyle from "./assets/GlobalStyle";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Wedo from "./components/Wedo";
import Nature from "./components/Nature";
import Product from "./components/Product";
import CSCenter from "./components/CSCenter";
import Others from "./components/Others";
import Footer from "./components/Footer";
import Top from "./components/Top";
import Topbtn from "./components/Topbtn";

function App() {
  // const path = process.env.PUBLIC_URL;
  const path = `https://cksgml529.github.io/react_coco`;
  return (
    <div className="App">
      <GlobalStyle />
      <Topbtn path={path}/>
      <Top />
      <Header />
      <Banner path={path} />
      <Wedo path={path} />
      <Nature />
      <Product path={path} />
      <CSCenter path={path} />
      <Others />
      <Footer path={path} />
    </div>
  );
}

export default App;
