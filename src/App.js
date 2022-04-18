import React from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClippedDrawer from "./components/clippedDrawer/ClippedDrawer";

import { createTheme } from "@mui/material/styles";

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
        fontSize: 15,
        fontWeightRegular: 400,
        fontWeightBold: 600,
        h1: {
            fontFamily: "Nunito",
        },
        h2: {
            fontFamily: "Nunito",
        },
        h3: {
            fontFamily: "Nunito",
        },
        h4: {
            fontFamily: "Nunito",
        },
        h5: {
            fontFamily: "Nunito",
        },
        overline: {
            fontFamily: "Nunito",
        },
        caption: {
            fontFamily: "Nunito",
        },
        button: {
            fontFamily: "Nunito",
        },
        body2: {
            fontFamily: "Nunito",
        },
        subtitle1: {
            fontFamily: "Nunito",
        },
        subtitle2: {
            fontFamily: "Nunito",
        },
    },
});

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path="login" element={<Login />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
