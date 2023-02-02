import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Stories from './pages/stories';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import './App.css';
import Signup from './components/signup';
import Login from './components/login';

const client = new ApolloClient ({
  uri: '/graphql',
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
