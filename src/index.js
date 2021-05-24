import React from 'react';
import ReactDOM from 'react-dom';
import './Style/index.css';
// import App from './Component/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import './Style/App.css';
import { Switch, Route } from 'react-router';
import PageHome from './Component/PageHome';
import PageSubject from './Component/PageSubject';
import PageReview from './Component/PageReview';
import PageHistory from './Component/PageHistory';

// ReactDOM.render(
//   <React.StrictMode>
//       <BrowserRouter>
//         <PageHome />
//       </BrowserRouter>

//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>

      <Switch>
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
      </Switch>

    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
