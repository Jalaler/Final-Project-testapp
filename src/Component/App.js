import '../Style/App.css';
import React from 'react';

import { Switch, Route } from 'react-router';
import PageHome from './PageHome';
import PageSubject from './PageSubject';
import PageReview from './PageReview';
import PageHistory from './PageHistory';

function App() {
    return (

        <div className="App">

            {/* <Switch>
                <Route path="/" exact>
                    <PageHome />
                </Route>
                <Route path="/subject">
                    <PageSubject />
                </Route>
                <Route path="/review">
                    <PageReview />
                </Route>
                <Route path="/history">
                    <PageHistory />
                </Route>
            </Switch> */}

        </div>

    );
}

export default App;
