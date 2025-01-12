import React, { useEffect, useState } from 'react'

const Github = () => {
    const [data,setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/Kavya1729')
        .then(res => res.json())
        .then(data =>{
            //  console.log(data);
             setData(data)
            })
    }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github followers: {data.followers}
        <img src={data.avatar_url} alt='avatar' className='rounded-full w-32 h-32 mx-auto'/>
        </div>
  )
}

export default Github
