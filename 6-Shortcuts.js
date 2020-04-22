const promise = Promise.reject(new Error('my message'))
    .then(
        (response) => console.log(response)
    ).catch((response) => console.log(response.message))