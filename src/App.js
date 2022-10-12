import './App.css';
import {useState} from 'react';
import axios from 'axios'

function App() {

  const [token, setToken] = useState('');
  const [price, setPrice] = useState('');

  function onChangeToken(val){
    setToken(val.target.value);
    setPrice('');
  }

  async function getUSD(){

    //ALSO CHECKOUT THE FIREBASE SDK FOR CAllING CLOUD FUNCTIONS
    //https://firebase.google.com/docs/functions/callable#web-version-9_2
    const res = await axios.get('Firebase Cloud Function Url', 
      { params: 
        { address: token } 
      }
    );
    setPrice(res.data.usd);

  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Search for ERC20 Tokens and get their USD Value
        </p>
        <input className="inputField" onChange={onChangeToken}></input>
        <div className="searchButton" onClick={getUSD}>Get USD Value</div>
        <div className="price">${Number(price).toFixed(2)}</div>
      </header>
    </div>
  );
}

export default App;
