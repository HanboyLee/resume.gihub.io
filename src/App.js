import Home from "./pages/Home";
import * as Mtl from "@mui/material";
import { ThemeProvider } from "styled-components";

function App() {
    const theme = Mtl.createTheme({});
    return (
        <Mtl.ThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <Mtl.Container maxWidth="lg" style={{ background: "#aaa" }}>
                    <Mtl.CssBaseline />
                    <Home />
                </Mtl.Container>
            </ThemeProvider>
        </Mtl.ThemeProvider>
    );
}

export default App;
