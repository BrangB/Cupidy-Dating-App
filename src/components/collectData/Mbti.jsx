import React from 'react'
import { useDetailInfo } from '../../providers/DetailInfoProvider';
import FadeCard from '../../animations/collectdata/FadeCard';
import { Link, useNavigate } from 'react-router-dom';
import pisces from '../../assets/zodiac_pic/pisces1.png'

const Mbti = () => {

    const mbtiTypes = [
        { value: 'ISTJ', label: 'ISTJ - The Inspector' },
        { value: 'ISFJ', label: 'ISFJ - The Protector' },
        { value: 'INFJ', label: 'INFJ - The Advocate' },
        { value: 'INTJ', label: 'INTJ - The Architect' },
        { value: 'ISTP', label: 'ISTP - The Craftsman' },
        { value: 'ISFP', label: 'ISFP - The Artist' },
        { value: 'INFP', label: 'INFP - The Mediator' },
        { value: 'INTP', label: 'INTP - The Thinker' },
        { value: 'ESTP', label: 'ESTP - The Dynamo' },
        { value: 'ESFP', label: 'ESFP - The Entertainer' },
        { value: 'ENFP', label: 'ENFP - The Campaigner' },
        { value: 'ENTP', label: 'ENTP - The Visionary' },
        { value: 'ESTJ', label: 'ESTJ - The Supervisor' },
        { value: 'ESFJ', label: 'ESFJ - The Provider' },
        { value: 'ENFJ', label: 'ENFJ - The Giver' },
        { value: 'ENTJ', label: 'ENTJ - The Commander' }
      ];

      const navigate = useNavigate();

      const {detailInfo, setDetailInfo} = useDetailInfo();

      const handleData = () => {
        if(detailInfo.mbti == ''){
            toast.error("Please choose your mbti type.")
        }else{
          navigate('/collect-data/profilephoto')
        }
        console.log(detailInfo)
    }

      

  return (
    <FadeCard>
    <div className='card w-full md:w-[800px] bg-colorbg-primary p-4 py-6 rounded-sm flex flex-col gap-8 overflow-hidden duration-200'>
      <div className="heading flex flex-col gap-2">
        <h1 className='text-2xl font-bold'>Choose Your MBTI Types</h1>
        <p className='text-gray-500'>Select your MBTI type. Understanding personality types can be insightful!</p>
      </div>
      <hr />
      <div className='flex flex-wrap gap-6 h-[400px] md:h-[300px] items-center justify-center overflow-y-scroll' style={{ scrollbarWidth: 'thin', scrollbarColor: '#4A5568 #CBD5E0', scrollbarTrackColor: '#CBD5E0' }}>
          {mbtiTypes.map((item, index) => (
            <div key={index} className='flex flex-col items-center justify-center gap-3'>
                <img src={pisces} alt="mbti" className={`${detailInfo.mbti == item.value ? 'border-btnbg-primary border-4' : ''} w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full object-cover cursor-pointer duration-150`} onClick={() => setDetailInfo({...detailInfo, mbti: item.value})}/>
                <span
                    className='text-colortext-secondary duration-200 font-medium p-1 px-3 cursor-pointer rounded-md'
                    onClick={() => openWikipediaPage(`https://en.wikipedia.org/wiki/${item.value}`)}
                >
                    {item.label}
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

export default Mbti