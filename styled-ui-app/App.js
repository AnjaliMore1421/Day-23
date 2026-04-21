import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <Layout toggleTheme={() => setDark(!dark)} dark={dark}>
        <Dashboard />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
