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

ReactDOM.render(
    <React.StrictMode>

        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage}>{/* <HomePage /> */}</Route>
                <Route path="/subject" component={SubjectPage}>{/* <SubjectPage /> */}</Route>
                <Route path="/review" component={ReviewPage}>{/* <ReviewPage /> */}</Route>
                <Route path="/history" component={HistoryPage}>{/* <HistoryPage /> */}</Route>
                <Route path="/subjectdetail" component={SubjectDetailPage}>{/* <SubjectDetailPage /> */}</Route>
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
