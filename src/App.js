import { createTheme, ThemeProvider } from "@mui/material/styles";
import Layout from "./pages/Layout"; 
import { BrowserRouter as Router } from "react-router-dom";
import Container from "@mui/material/Container";

import './App.css';
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
 
    <Container
      maxWidth="xs"
      style={{
        background: "#fff", 
        padding: 0, 
      }}
    >
      <ThemeProvider theme={theme}>
        <Router>
          <Layout />
        </Router>
      </ThemeProvider>
    </Container>
  );
}

export default App;
