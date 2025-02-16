fetch('http://localhost:8081/items/type/media', {
    method: 'GET',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2N2EyNmQxOTc5MTg3NDVlMWZjYTFkYTgiLCJpYXQiOjE3Mzg5NjIwNTh9.c6hzXDp-biqDVcQ6REox3LfJyAItunm6MS3-pZqadaQ'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))