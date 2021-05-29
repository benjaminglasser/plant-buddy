const BASE_URL = 'http://localhost:3001/api/buddies'

function fetchBuddies() {
    return fetch(BASE_URL).then(res => res.json())
}

function createBuddy(data) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'Application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json());
}

function deleteBuddy(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    }).then(res => res.json());

}

// function updateBuddy({ name, schedule, _id }) {
//     return fetch(`${BASE_URL}/${_id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-type': 'Application/json'
//         },
//         body: JSON.stringify({ name, schedule })
//     }).then(res => res.json());
// }

export {
    createBuddy,
    fetchBuddies,
    deleteBuddy,
    // updateBuddy
}