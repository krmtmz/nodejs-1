import axios from "axios"


export default async function getData(num) {

    const userId = await axios(`https://jsonplaceholder.typicode.com/users/${num}`);
        const userIdInfo = userId.data;

    const userPost = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${num}`);
        const userPostInfo = userPost.data;

        const filteredPosts = userPostInfo.filter((post) => post.userId === num && post.id === num);


        const result = {
            userIdInfo,
            filteredPosts,
        };

        return result;
    }
