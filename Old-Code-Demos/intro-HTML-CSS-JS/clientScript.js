function buttonClick() {
    //get the values from the inputs
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let username = document.getElementById("username");
    let password = document.getElementById("password");



    //turn them into a javascript object:
    let user = {
        firstName: firstName.value,
        lastName: lastName.value,
        username: username.value,
        password: password.value
    }

    //console out the object for fact-finding:
    console.log("user object: ", user)

    //turn the user object into JSON:
    console.log("typeof JSON body (before): ", typeof(body))
    var body = JSON.stringify(user)
    console.log("typeof JSON body (after): ", typeof(body))
    console.log("JSON: ", body)

    //call the asynchronous function to POST the task:
    let response = postTask(body)

    //output response (async?)
    //console.log("response: ", response)
}

async function postTask(body) {
    let url = "http://localhost:8080/users"
    let options = {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: body

    }
    let response = await fetch(url, options)
    let responseBody = await response.json()
    console.log(responseBody)
    return response
}