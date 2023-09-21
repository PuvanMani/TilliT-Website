import { BrowserRouter } from "react-router-dom";
import Layout from "./component/layout/layout";
import CssBaseline from '@mui/material/CssBaseline';
function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Layout />
    </BrowserRouter>
  );
}

export default App;
