const baseUrl = 'http://localhost:5174/jsonstore'

export const create = async(gameData) => {
    const response = await fetch(`${baseUrl}/games`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(gameData)
    })

    const result = await response.json();

    return result;
}