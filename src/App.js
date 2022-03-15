import Home from "./pages/Home";
import * as Mtl from "@mui/material";
import { ThemeProvider } from "styled-components";
import MediaProvider from "./Hooks/MediaHook";

function App() {
    const theme = Mtl.createTheme({});
    return (
        <Mtl.ThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <Mtl.Box style={{ background: "#000" }}>
                    <Mtl.Container
                        maxWidth="lg"
                        style={{
                            padding: 0,
                            background: "radial-gradient(circle, rgba(135,135,149,1) 14%, rgba(176,176,176,1) 69%)",
                        }}
                    >
                        <Mtl.CssBaseline />
                        <MediaProvider>
                            <Home />
                        </MediaProvider>
                    </Mtl.Container>
                </Mtl.Box>
            </ThemeProvider>
        </Mtl.ThemeProvider>
    );
}

export default App;
