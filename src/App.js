import './App.css';
import { auth } from './services/firebase';
import { useState, useEffect } from 'react'
import Header from './components/Header/Header'

function App() {

  // user state variables
  const [userState, setUserState] = useState({
    user: null
  })

  useEffect(function () {

    // for auth

    const unsubscribe = auth.onAuthStateChanged(user =>
      setUserState({ user })
    );

    // clean up function

    return function () {
      // clean up subscriptions
      unsubscribe();
    }

  }, [])

  console.log(userState);

  return (
    <div className="App">
      <Header user={userState.user} />
    </div>
  );
}

export default App;
