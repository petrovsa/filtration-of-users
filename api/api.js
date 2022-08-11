export const loadTodos = async function () {
    try {
        return await fetch("https://jsonplaceholder.typicode.com/todos")
            .then(r => r.json());
    } catch (e) {
        console.log(`e.message`)
    }

}