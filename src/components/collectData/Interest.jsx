import React from 'react'
import FadeCard from '../../animations/collectdata/FadeCard'
import { Link } from 'react-router-dom'

const Interest = () => {
  return (
    <FadeCard>
        <div>Interest</div>
        <Link
                    className='bg-btnbg-primary text-colortext-third p-2 w-16 flex items-center justify-center cursor-pointer'
                    to={'/collect-data/main-info'}
                >
                    Prev
                </Link>
    </FadeCard>
  )
}

export default Interest