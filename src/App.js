import './App.css';
import { auth } from './services/firebase';
import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Plant from './components/Plant/Plant'
import NewLeaf from './components/NewLeaf/NewLeaf'
import { createBuddy, fetchBuddies, deleteBuddy } from './services/buddy-service'
import { login } from './services/firebase';
import $ from 'jquery'



function App() {

  const [image, setImage] = useState('')

  //Main State for leaf info
  const [leaf, setLeaf] = useState({
    buddies: [],
    newBuddy: {
      name: "",
      schedule: "",
      img: "",
    }
  })

  // user state variable
  const [userState, setUserState] = useState({
    user: null,
  })

  // const [loading, setLoading] = useState(false);


  //New Leaf Submit
  async function handleSubmit(e) {
    e.preventDefault();

    const buddy = await createBuddy(leaf.newBuddy, userState.user.uid)

    setLeaf({
      buddies: [...leaf.buddies, buddy],
      newBuddy: {
        name: "",
        schedule: "",
        img: "",
      }
    })

    setImage('')
    // TODO: set form to empty string
    $('.text').val('');
    $('.text').val('');
    $('.submit')


  }

  function handleChange(e) {
    setLeaf((prevState) => ({
      ...prevState,
      newBuddy: {
        ...prevState.newBuddy,
        [e.target.name]: e.target.value,

      }
    }))



  }

  function handleEdit(id) {
    const buddyToEdit = leaf.buddies.find(leaf => leaf._id === id)

    setLeaf(prevState => ({
      ...prevState,
      newBuddy: {
        name: buddyToEdit.name,
        schedule: buddyToEdit.schedule
      }
    }))

    // console.log(leaf.newBuddy.name)
  }

  async function handleUpdate(id) {

    if (leaf.newBuddy.name !== "") {

      const { name, schedule } = leaf.newBuddy
      try {
        const buddy = await fetch(`https://plant-buddy-backend.herokuapp.com/api/buddies/${id}`, {
          method: 'PUT',
          headers: {
            'Content-type': 'Application/json'
          },
          body: JSON.stringify({ name, schedule })
        }).then(res => res.json())

        setLeaf({
          buddy,
          newBuddy: {
            name: "",
            schedule: "",
            img: ""
          }
        })



      } catch (error) {
        console.log(error)
      }
    }
    // handle update

  }



  // DELETE FUNCTION

  async function handleDelete(id) {

    const buddies = await deleteBuddy(id);

    setLeaf(prevState => ({
      ...prevState,
      buddies,
    }));


  }



  // initial load of info from backend
  // auth load

  useEffect(function () {

    async function getAppData() {

      if (!userState.user) return;

      const buddies = await fetchBuddies(userState.user.uid);

      setLeaf(prevState => ({
        ...prevState,
        buddies
      }))
      // setLoading(true)
    }

    getAppData();



    // for auth observer
    const unsubscribe = auth.onAuthStateChanged(user =>
      setUserState({ user })
    );

    // clean up function
    return function () {
      // clean up subscriptions
      unsubscribe();
    }
  }, [userState.user])



  return (
    <div>
      {/* {loading ? ( */}
      <>
        <Header user={userState.user} />
        {userState.user ? (
          <>
            <NewLeaf
              leaf={leaf}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              image={image}
              setImage={setImage}
            />
            <>
              <Plant
                leaf={leaf}
                setLeaf={setLeaf}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                handleEdit={handleEdit}
              />
            </>
          </>
        ) : <p className="message" onClick={login}><span>Login</span></p>}
      </>
      {/* ) : <p className="message" >Loading...</p>} */}
    </div>
  );
}

export default App;
