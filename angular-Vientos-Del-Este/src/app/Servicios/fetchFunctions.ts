export const fetchPost = async (url: string, body: object) => {
  console.log(body);
  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }).then(resp => {
        return resp.json()
      }).then(data => {
        return data
      }).catch(error => {
        console.log(error)
      })
} 
export const fetchDelete = async (url: string) => {
fetch(url, {
  method: 'DELETE'
}).then(resp => {
    return resp.json()
  }).then(data => {
    return data
  }).catch(error => {
    console.log(error)
  })
}