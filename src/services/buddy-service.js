const BASE_URL = 'http://localhost:3001/api/buddies'

function fetchBuddies(uid) {
    return fetch(BASE_URL + '?uid=' + uid).then(res => res.json())
}

function createBuddy(data, uid) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'Application/json'
        },
        body: JSON.stringify({ ...data, uid })
    }).then(res => res.json());
}

function deleteBuddy(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    }).then(res => res.json());

}


export {
    createBuddy,
    fetchBuddies,
    deleteBuddy,

}