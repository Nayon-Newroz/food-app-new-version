import { createTheme, ThemeProvider } from "@mui/material/styles";
import Layout from "./pages/Layout";
import Navigation from "./pages/Navigation";
import { BrowserRouter as Router } from "react-router-dom";

// import './App.css';
const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: purple[500],
  //   },
  //   secondary: {
  //     main: "#11cb5f",
  //   },
  // },
});

function App() {
  return (
    
      <ThemeProvider theme={theme}>
        <Router>
          <Layout />
        </Router>
      </ThemeProvider>
    
  );
}

export default App;
