import React from 'react'
import FadeCard from '../../animations/collectdata/FadeCard'
import { Link, useNavigate } from 'react-router-dom'
import { useDetailInfo } from '../../providers/DetailInfoProvider'
import toast from 'react-hot-toast'
import aries from '../../assets/zodiac_pic/aries.png'
import gemini from '../../assets/zodiac_pic/gemini1.png'
import cancer from '../../assets/zodiac_pic/cancer1.png'
import leo from '../../assets/zodiac_pic/leo1.png'
import virgo from '../../assets/zodiac_pic/virgo1.png'
import libra from '../../assets/zodiac_pic/libra1.png'
import scorpio from '../../assets/zodiac_pic/scor1.png'
import taurus from '../../assets/zodiac_pic/taurus.png'
import sag from '../../assets/zodiac_pic/sag.png'
import carp from '../../assets/zodiac_pic/capri1.png'
import aqua from '../../assets/zodiac_pic/aqua1.png'
import pisces from '../../assets/zodiac_pic/pisces1.png'

const Zodiac = () => {

  const zodiacSigns = [
    { name: 'Aries', img: aries },
    { name: 'Taurus', img: taurus },
    { name: 'Gemini', img: gemini },
    { name: 'Cancer', img: cancer },
    { name: 'Leo', img: leo },
    { name: 'Virgo', img: virgo },
    { name: 'Libra', img: libra },
    { name: 'Scorpio', img: scorpio },
    { name: 'Sagittarius', img: sag },
    { name: 'Capricorn', img: carp },
    { name: 'Aquarius', img: aqua },
    { name: 'Pisces', img: pisces }
  ];

  const navigate = useNavigate();

    const openWikipediaPage = (url) => {
        window.open(url, '_blank');
    };

    const {detailInfo, setDetailInfo} = useDetailInfo();

    const handleData = () => {
        if(detailInfo.zodiacSign == ''){
            toast.error("Please choose your Sign.")
        }else{
          navigate('/collect-data/mbti')
        }
        console.log(detailInfo)
    }

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
                <img src={sign.img} alt="zodiac" className={`${detailInfo.zodiacSign == sign.name ? 'border-btnbg-primary border-4' : ''} w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full object-cover cursor-pointer duration-150`} onClick={() => setDetailInfo({...detailInfo, zodiacSign: sign.name})}/>
                <span
                    className='text-colortext-secondary duration-200 font-medium p-1 px-3 cursor-pointer rounded-md'
                    onClick={() => openWikipediaPage(`https://en.wikipedia.org/wiki/${sign.name}_(astrology)`)}
                >
                    {sign.name}
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
        <button className='bg-btnbg-primary text-colortext-third p-2 w-16 flex items-center justify-center cursor-pointer' onClick={handleData}>
            Next
        </button>
      </div>
    </div>
  </FadeCard>
  )
}

export default Zodiac