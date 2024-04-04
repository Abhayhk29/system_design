import React from 'react'

const MemeCard = ({data}) => {
    const {url, title, author} = data;
  return (
    <div className='p-5 m-5 border-black rounded-lg'>
        <img className="w-64 h-64" src={url} name="image" />
        <p>{author}</p>
    </div>
  )
}

export default MemeCard