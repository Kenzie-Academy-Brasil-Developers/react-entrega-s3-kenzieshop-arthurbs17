import MenuNav from "./components/MenuNav";
import Routes from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <MenuNav />
      <Routes />
    </div>
  );
}

export default App;
