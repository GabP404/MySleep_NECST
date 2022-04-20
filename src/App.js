import React from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClippedDrawer from "./components/clippedDrawer/ClippedDrawer";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        type: "light",
        primary: {
            main: "#8ecae6",
        },
        secondary: {
            main: "#8ee6d6",
        },
        text: {
            primary: "#000000",
        },
    },
    typography: {
        fontFamily: "Nunito",
        fontSize: 13,
        fontWeightRegular: 400,
        fontWeightBold: 600,
    },
});

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/">
                            <Route index element={<Home />} />
                            <Route path="login" element={<Login />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

export default App;
