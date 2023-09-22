import { BrowserRouter } from "react-router-dom";
import Layout from "./component/layout/layout";
import CssBaseline from '@mui/material/CssBaseline';
import store from "./redux/store/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <BrowserRouter>
        <CssBaseline />
        <Layout />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
