import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Stories from './pages/stories';
import AppNavbar from './components/nav';

import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import {setContext} from '@apollo/client/link/context';

import Signup from './components/signup';
import Login from './components/login';

// import AddStory from './components/addStory';

const httpLink = createHttpLink({
  rui: '/graphql'
})

const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem('id_token');
  
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient ({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <div>
        <AppNavbar />
        <Switch>
          <Route exact path='/'
          component={Home}
          />
          <Route exact path='/about'
          component={About}
          />
          <Route exact path='/stories'
          component={Stories}
          />
          <Route exact path='/signup'
          component={Signup}
          />
          <Route exact path='/login'
          component={Login}
          />
        </Switch>
      </div>
    </Router>
  </ApolloProvider>
  );
}

export default App;
