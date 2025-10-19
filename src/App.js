import Home from "./pages/Home";
import * as Mtl from "@mui/material";
import { ThemeProvider } from "styled-components";
import MediaProvider from "./Hooks/MediaHook";

function App() {
    const theme = Mtl.createTheme({
        palette: {
            mode: "light",
            primary: { main: "#2563eb" },
            secondary: { main: "#7c3aed" },
            background: { default: "#f4f6fb", paper: "#ffffff" },
            text: { primary: "#111827", secondary: "#4b5563" },
        },
        shape: { borderRadius: 12 },
        typography: {
            h3: { fontWeight: 700 },
            h4: { fontWeight: 700 },
        },
    });
    return (
        <Mtl.ThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <Mtl.CssBaseline />
                <Mtl.Box
                    sx={{
                        bgcolor: "background.default",
                        background: "linear-gradient(135deg, #eef2f7 0%, #e7f0ff 100%)",
                        minHeight: "100vh",
                        py: { xs: 2, sm: 4 },
                    }}
                >
                    <Mtl.Container
                        maxWidth="lg"
                        sx={{
                            p: { xs: 2, sm: 3 },
                            bgcolor: "background.paper",
                            borderRadius: 3,
                            boxShadow: 4,
                        }}
                    >
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
