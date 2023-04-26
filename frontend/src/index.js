import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
<App />
</React.StrictMode>
);

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


//step 1: git add --all
//step 2: git commit -m "Ex" (add a message in the quotes)
//step 3: git push --set-upstream origin main (use this to push things to github)

/* 
To pull 
Step 1: git pull <Username> main (type in the collaborators username)
this will pull all of the collaborators code to your local computer




To run react Type "npm start"

*/