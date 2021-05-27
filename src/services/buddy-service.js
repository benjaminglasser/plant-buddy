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

export {
    createBuddy,
    fetchBuddies
}