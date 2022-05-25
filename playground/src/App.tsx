import React from 'react';
import logo from './logo.svg';
import './App.css';

interface AppProps {
  paragraphText: string,
  headerText: string,

}

function App({paragraphText,headerText}: AppProps) {
  return (
    <>
        <p>{paragraphText}</p>
        <h1>{headerText}</h1>
    </>
  );
}

export default App;
