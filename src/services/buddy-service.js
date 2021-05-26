const BASE_URL = 'https://localhost:3001/api/skills'

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
    createBuddy
}