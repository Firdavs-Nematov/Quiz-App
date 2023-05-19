import React from "react";
import { Route, Routes } from "react-router-dom";
import { Question, Main, EndPage } from "./";

const App = () => {
    return (
        <div>
            <Routes>
                <Route element={<Question />} path="/question" />
                <Route element={<Main />} path="/" />
                <Route element={<EndPage />} path="endpage" />
            </Routes>
        </div>
    );
};

export default App;
