import React from 'react'
import FadeCard from '../../animations/collectdata/FadeCard'
import { Link } from 'react-router-dom'
import { useDetailInfo } from '../../providers/DetailInfoProvider'
import aries from '../../assets/arieszodiacsign.jpg'

const Zodiac = () => {

    const zodiacSigns = [
        'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo',
        'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn',
        'Aquarius', 'Pisces'
      ];

    const openWikipediaPage = (url) => {
        window.open(url, '_blank');
    };

    const {detailInfo, setDetailInfo} = useDetailInfo();

  return (
    <FadeCard>
    <div className='card w-full md:w-[700px] bg-colorbg-primary p-4 py-6 rounded-sm flex flex-col gap-8 overflow-hidden duration-200'>
      <div className="heading flex flex-col gap-2">
        <h1 className='text-2xl font-bold'>Choose Your Zodiac Sign</h1>
        <p className='text-gray-500'>Select your Zodiac sign. Knowing each other's signs can be fun and insightful!</p>
      </div>
      <hr />
      <div className='flex flex-wrap gap-6 h-[400px] md:h-[300px] items-center justify-center overflow-y-scroll' style={{ scrollbarWidth: 'thin', scrollbarColor: '#4A5568 #CBD5E0', scrollbarTrackColor: '#CBD5E0' }}>
          {zodiacSigns.map((sign, index) => (
            <div key={index} className='flex flex-col items-center justify-center gap-3'>
                <img src={aries} alt="zodiac" className={`${detailInfo.zodiacSigns == sign ? 'border-btnbg-primary border-4' : ''} w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full object-cover cursor-pointer duration-150`} onClick={() => setDetailInfo({...detailInfo, zodiacSigns: sign})}/>
                <span
                    className='text-colortext-secondary duration-200 font-medium p-1 px-3 cursor-pointer rounded-md'
                    onClick={() => openWikipediaPage(`https://en.wikipedia.org/wiki/${sign}_(astrology)`)}
                >
                    {sign}
                </span>
              </div>
          ))}
        </div>
      <div className='w-full flex items-center justify-center gap-6'>
        <Link
          className='bg-btnbg-primary text-colortext-third p-2 w-16 flex items-center justify-center cursor-pointer'
          to={'/collect-data/interest'}
        >
          Prev
        </Link>
        <button
                  className='bg-btnbg-primary text-colortext-third p-2 w-16 flex items-center justify-center cursor-pointer'
              >
                  Next
              </button>
      </div>
    </div>
  </FadeCard>
  )
}

export default Zodiac