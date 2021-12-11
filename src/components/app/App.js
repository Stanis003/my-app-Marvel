import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../erroeBoundary/ErrorBoundary";
import ComicsList from "../comicsList/comicsList";
import AppBanner from "../appBanner/AppBanner";
import decoration from '../../resources/img/vision.png';

const App = () => {

    const [selectedChar, setChar] = useState(null);

    const onCharSelected = (id) => {
        setChar(id);
    }

    return (
        <Router>
            <div className="app">
                <AppHeader />
                <main>
                    <Routes>
                        <Route exect path="/" element={
                            <>
                                <ErrorBoundary>
                                    <RandomChar />
                                </ErrorBoundary>
                                <div className="char__content">
                                    <ErrorBoundary>
                                        <CharList onCharSelected={onCharSelected} />
                                    </ErrorBoundary>
                                    <ErrorBoundary>
                                        <CharInfo charId={selectedChar} />
                                    </ErrorBoundary>
                                </div>
                                <img className="bg-decoration" src={decoration} alt="vision" />
                            </>
                        }>

                        </Route>
                        <Route exect path="/comics" element={
                            <>
                                <AppBanner />
                                <ComicsList />
                            </>
                        }>
                        </Route>
                    </Routes>


                </main>
            </div>
        </Router>
    )
}


export default App;