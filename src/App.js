import './App.css';
import { auth } from './services/firebase';
import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Plant from './components/Plant/Plant'
import NewLeaf from './components/NewLeaf/NewLeaf'
import { createBuddy, fetchBuddies, deleteBuddy } from './services/buddy-service'



function App() {


  //Main State for leaf info
  const [leaf, setLeaf] = useState({
    buddies: [{}],
    newBuddy: {
      name: "",
      schedule: ""
    }
  })



  //New Leaf Submit
  async function handleSubmit(e) {
    e.preventDefault();

    const buddy = await createBuddy(leaf.newBuddy)

    setLeaf({
      buddies: [...leaf.buddies, buddy],
      newBuddy: {
        name: "",
        schedule: ""
      }
    })
  }

  function handleChange(e) {
    setLeaf((prevState) => ({
      ...prevState,
      newBuddy: {
        ...prevState.newBuddy,
        [e.target.name]: e.target.value
      }
    }))

  }

  // DELETE FUNCTION

  async function handleDelete(id) {

    const buddies = await deleteBuddy(id);

    setLeaf(prevState => ({
      ...prevState,
      buddies,
    }));


  }

  // user state variables
  const [userState, setUserState] = useState({
    user: null
  })

  // initial load of info from backend
  // auth load

  useEffect(function () {

    async function getAppData() {

      const buddies = await fetchBuddies();

      setLeaf(prevState => ({
        ...prevState,
        buddies
      }))
    }

    getAppData();

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
    <div >
      <Header user={userState.user} />
      <NewLeaf leaf={leaf} handleSubmit={handleSubmit} handleChange={handleChange} />
      <Plant
        leaf={leaf}
        setLeaf={setLeaf}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />

    </div>
  );
}

export default App;
