const API_URL = "";

async function login(data) {
    const res = await fetch(`${API_URL}/login`);
    const user = await res.json();

    return user;
}

async function logout() {
    const res = await fetch(`${API_URL}/logout`);
    await res.json();
}

async function getTicketInfo(id) {
    const res = await fetch(`${API_URL}/ticket/${id}`);
    const data = await res.json();

    return data;
}

export { login, logout, getTicketInfo };
