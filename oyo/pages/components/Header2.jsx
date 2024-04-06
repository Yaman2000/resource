import React from 'react'

const Header2 = () => {
    const List = [
        {
            name: 'Banglore'
        },
        {
            name: 'Calcutta'
        },
        {
            name: 'Hyderabad'
        },
        {
            name: 'delhi'
        },
        {
            name: 'Mumbai'
        },
        {
            name: 'Chennai'
        },
        {
            name: 'Gurugram'
        },

        {
            name: 'Noida'
        },
        
        {
            name: 'Pune'
        },

        {
            name: 'All Cities'
        },
        
        

    ]
  return (
    <div>
      <div className='flex px-24 bg-gray-400 justify-between items-center'>
{
    List.map((e)=>{
        return (
            <span>{e.name}</span>
        )
    })
}
      </div>
    </div>
  )
}

export default Header2
