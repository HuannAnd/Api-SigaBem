async function getApiResponse() {
    try {
        const data = await fetch("http://localhost:3001/get-location")
        const json = await data.json()
    } catch (error) {
        const err = error
      console.error("error message")  
    }
}