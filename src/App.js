import Home from "./pages/Home";
import * as Mtl from "@mui/material";
import { ThemeProvider } from "styled-components";
import MediaProvider from "./Hooks/MediaHook";

function App() {
    const theme = Mtl.createTheme({
        palette: {
            mode: "light",
            primary: {
                main: "#6366f1",
                light: "#818cf8",
                dark: "#4f46e5",
                contrastText: "#ffffff",
            },
            secondary: {
                main: "#ec4899",
                light: "#f472b6",
                dark: "#db2777",
                contrastText: "#ffffff",
            },
            background: {
                default: "#fafafa",
                paper: "#ffffff",
            },
            text: {
                primary: "#1f2937",
                secondary: "#6b7280",
            },
            success: {
                main: "#10b981",
            },
        },
        shape: {
            borderRadius: 16,
        },
        typography: {
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
            ].join(','),
            h3: {
                fontWeight: 800,
                background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
            },
            h4: {
                fontWeight: 700,
                color: '#1f2937',
            },
            h5: {
                fontWeight: 600,
            },
            h6: {
                fontWeight: 600,
            },
        },
        shadows: [
            "none",
            "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
            "0 25px 50px -12px rgba(99, 102, 241, 0.25)",
        ],
        components: {
            MuiPaper: {
                styleOverrides: {
                    root: {
                        backgroundImage: 'linear-gradient(145deg, #ffffff 0%, #fafbfc 100%)',
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: '0 20px 40px rgba(99, 102, 241, 0.15)',
                        },
                    },
                },
            },
        },
    });

    return (
        <Mtl.ThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <Mtl.CssBaseline />
                <Mtl.Box
                    sx={{
                        bgcolor: "background.default",
                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        minHeight: "100vh",
                        py: { xs: 2, sm: 4 },
                        position: "relative",
                        overflow: "hidden",
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                            pointerEvents: "none",
                        },
                    }}
                >
                    <Mtl.Container
                        maxWidth="lg"
                        sx={{
                            p: { xs: 2, sm: 4, md: 6 },
                            bgcolor: "background.paper",
                            borderRadius: 4,
                            boxShadow: 5,
                            position: "relative",
                            zIndex: 1,
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
