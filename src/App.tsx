import { Provider } from "react-redux";
import store from "./store/store";
import HomeView from "./components/home/homeView";

const App = () => {
  return (
    <Provider store={store}>
      <HomeView></HomeView>
    </Provider>
  );
};

export default App;
