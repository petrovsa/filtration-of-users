export const loadUsers = async function () {
    try {
        return await fetch("https://jsonplaceholder.typicode.com/users")
            .then(r => r.json());
    } catch (e) {
        console.error(`1111 ${e.message}`)
    }

}