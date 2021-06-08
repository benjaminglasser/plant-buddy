import './App.css';
import { auth } from './services/firebase';
import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Plant from './components/Plant/Plant'
import NewLeaf from './components/NewLeaf/NewLeaf'
import { createBuddy, fetchBuddies, deleteBuddy, updateBuddy } from './services/buddy-service'
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




  //New Leaf Submit
  async function handleSubmit(e) {
    e.preventDefault();

    const buddy = await createBuddy(leaf.newBuddy)

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

    //handle edit


    // {
    //   leaf.newBuddy.name == buddyToEdit.name ?
    //     console.log(leaf.newBuddy) :
    //     console.log('hi')

    // }
    if (leaf.newBuddy.name !== "") {

      const { _id, name, schedule } = leaf.newBuddy
      try {
        const buddy = await fetch(`http://localhost:3001/api/buddies/${id}`, {
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
    <div>
      <Header user={userState.user} />
      {leaf && (
        <>
          <NewLeaf
            leaf={leaf}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            image={image}
            setImage={setImage}
          />
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
      )}
    </div>
  );
}

export default App;
