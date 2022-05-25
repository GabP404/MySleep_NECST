import React from "react";
import Home from "./pages/home/Home";
import Upload from "./pages/upload/Upload";
import Polar from "./pages/polar/Polar";
import Details from "./pages/details/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
                            <Route  path="home"  element={<Home />} />
                            <Route index element={<Upload />} />
                            <Route  path="polar" element={<Polar />} />
                            <Route  path="details" element={<Details />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

export default App;
