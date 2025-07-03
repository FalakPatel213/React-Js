import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/FalakPatel213')
    //         .then(res => res.json())
    //         .then(data => {
    //             setData(data)
    //         })
    // })



    return (
        <div className='flex justify-evenly text-center m-4 p-4 text-3xl'>
            <img src={data.avatar_url} alt="Git  Profile" width={300}/>
            Github followers: {data.followers}
        </div>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/FalakPatel213');
    return response.json();
}