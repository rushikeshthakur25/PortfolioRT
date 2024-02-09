import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/rushikeshthakur25')
            .then(Response => Response.json())
            .then(data => {
                console.log(data);
                setData(data)
            })
    }, [])
    return (
        <div className='bg-gray-600 text-white text-center m-4 p-4 text-3xl'>
            <img src={data.avatar_url} width='10%' alt="" />
            Github Followers: {data.followers}
        </div>
    )
}

export default Github
