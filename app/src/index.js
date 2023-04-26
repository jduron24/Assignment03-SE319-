import React from 'react';
import ReactDOM from 'react-dom/client';
// init React :
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
// render something HTML :
function getMethodById(id) {
    fetch('http://localhost:3000/' + id)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var container = document.getElementById("showData");
            container.innerHTML = JSON.stringify(data, undefined, 2);
        });
};

function postMethod() {
    fetch('http://localhost:3000/addUser', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
            "user600": {
                "name": "Abraham600",
                "password": "password600",
                "profession": "teacher",
                "id": 600,
            }
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var container = document.getElementById("showData");
            container.innerHTML = JSON.stringify(data);
        });
}

function deleteMethod() {
    console.log("Lets do Delete ....");
    fetch('http://localhost:3000/deleteUser', {
        method: "DELETE",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
            "user600": {
                "id": 600
            }
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((err) => console.log("Errror:" + err))
}


root.render(
<div>
<h1>Get Method.</h1>
    <button onclick="getMethod()">Show All users</button>

    <h1>Post Method. </h1>
    <button onclick="postMethod()">Post user</button>

    <h1>DELETE Method .</h1>
    <button onclick="deleteMethod()">Delete</button>

</div>
);