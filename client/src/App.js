import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/About';
import Stories from './pages/stories';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import './App.css';
import Signup from './components/signup';
import Login from './components/login';

const httpLink = createHttpLink({
  rui: '/graphql'
})

const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem('id_token');
  
  return {
    headers: {
      ...headers,
      authorization: token ? 'Bearer ${token}' : ''
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
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            <Route path='/'
            element={<Home/>}
            />
            <Route path='/about'
            element={<About/>}
            />
            <Route path='/stories'
            element={<Stories/>}
            />
            <Route path='/signup'
            element={<Signup/>}
            />
            <Route path='/login'
            element={<Login/>}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
    
  );
}

export default App;
