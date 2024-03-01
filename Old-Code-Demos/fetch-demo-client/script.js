/*
This function is designed to act when the click event is detected or "heard" by the event 
listener on the button. Both this method and the one below are designed to do the same thing
but with different implementations. Both methods get the data from the input fields then
prepare and send a request, finally acting on the response when it arrives.
*/
async function buttonClick() {
    //We grab the data from the inputs, note the value property is what actually containes the data in the field.
    let integerA = document.getElementById("integerA").value;
    let integerB = document.getElementById("integerB").value;

    /*
    We are assembling an object to transmit as JSON in our request body. This needs to match

    */
    let body = {
        integers: [integerA, integerB]
    }

    let url = "http://localhost:8080/add"
    let options = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    let response = await fetch(url, options);
    let responseObject = await response.json();

    //Do something...
    let div = document.getElementById("responseDiv");
    div.innerHTML = responseObject.fullAnswer;
}

function buttonClickWithPromiseChaining() {
    let integerA = document.getElementById("integerA").value;
    let integerB = document.getElementById("integerB").value;

    let body = {
        integers: [integerA, integerB]
    }

    let url = "http://localhost:8080/add"
    let options = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(url, options)
    .then((response)=>{//.then for the server response
        console.log(response.json().then((body)=>{//.then for consuming the byte stream that holds the body
            console.log(body)
        }))
    })
    .catch((error)=>{alert(error)})
    //let responseObject = await response.json();

}

function manipulateDom(content) {
    let div = document.getElementById("responseDiv");
    div.innerHTML = content;
}