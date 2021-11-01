import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { Switch, Route } from 'react-router';
import HomePage from './HomePage';
import SubjectPage from './SubjectPage';
import ReviewPage from './ReviewPage';
import HistoryPage from './HistoryPage';
import SubjectDetailPage from './SubjectDetailPage';
import EditPage from './EditPage';

ReactDOM.render(
    <React.StrictMode>

        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/subject">
                    <SubjectPage />
                </Route>
                {/* <Route path="/review">
                    <ReviewPage />
                </Route> */}
                <Route path="/review/:abbr">
                    <ReviewPage />
                </Route>
                <Route path="/history/:studentId">
                    <HistoryPage />
                </Route>
                <Route path="/subjectdetail/:abbr">
                    <SubjectDetailPage />
                </Route>
                <Route path="/edit/:postId">
                    <EditPage />
                </Route>
            </Switch>
        </BrowserRouter>

        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
