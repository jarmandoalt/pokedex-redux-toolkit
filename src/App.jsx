import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import CrudApi from "./components/CrudApi";

function App() {
  return (
    <Provider store={store}>
      <div className="App"></div>
        <CrudApi/>

    </Provider>
  );
}

export default App;
