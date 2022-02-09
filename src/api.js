const axiosCache = require('axios-cache-adapter')

const api = axiosCache.setup({
    baseURL: process.env.REACT_APP_BASE_URL,
    cache: { maxAge: 120 * 60 * 1000 },
})

async function createSession(email, password) {
    return api.post('/auth/login', { email, password })
}

async function getCharacters(page) {
    if (page) {
        return api.get(`/characters/${page}`)
    }
    return api.get(`/characters`)
}
async function getCharacter(id) {
    return api.get(`/character/${id}`)
}
async function getUser() {
    return api.get('/user')
}

async function deleteUser() {
    return api.delete('/user')
}

async function updateUser(body) {
    return api.put('/user', body)
}
async function createUser(body) {
    return api.post('/user', body)
}

export {
    api,
    createSession,
    getCharacters,
    getCharacter,
    getUser,
    deleteUser,
    updateUser,
    createUser,
}
