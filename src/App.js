import './App.css';
import { auth } from './services/firebase';
import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Plant from './components/Plant/Plant'

function App() {

  const [leaf, setLeaf] = useState({
    plants: [{ name: "Fred", schedule: 7 }, { name: "bob", schedule: 2 }],
    newPlant: {
      name: "",
      days: "5"
    }
  })

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



  return (
    <div>
      <Header user={userState.user} />
      <Plant leaf={leaf} setLeaf={setLeaf} />
    </div>
  );
}

export default App;
