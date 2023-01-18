import axios from "axios";

async function GetUser(user_id) {
    const { data: user } = (await axios("https://jsonplaceholder.typicode.com/users/" + user_id));

    const { data: post } = (await axios("https://jsonplaceholder.typicode.com/posts/" + user_id));

    try {
        console.log(user);
        console.log(post);
    } catch (e) {
        console.log(e);
    }

};

export default GetUser;