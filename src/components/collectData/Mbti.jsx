import React from 'react';
import { useDetailInfo } from '../../providers/DetailInfoProvider';
import FadeCard from '../../animations/collectdata/FadeCard';
import { Link, useNavigate } from 'react-router-dom';
import ISTJ from '../../assets/mbti/ISTJ.png';
import testing from '../../assets/mbti/ENFJ.svg';
import ISFJ from '../../assets/mbti/ISFJ.png';
import INFJ from '../../assets/mbti/INFJ.png';
import INTJ from '../../assets/mbti/INTJ.png';
import ISTP from '../../assets/mbti/ISTP.png';
import ISFP from '../../assets/mbti/ISFP.png';
import INFP from '../../assets/mbti/INFP.png';
import INTP from '../../assets/mbti/INTP.png';
import ESTP from '../../assets/mbti/ESTP.png';
import ESFP from '../../assets/mbti/ESFP.png';
import ENFP from '../../assets/mbti/ENFP.png';
import ENTP from '../../assets/mbti/ENTP(1).png';
import ESTJ from '../../assets/mbti/ESTJ.png';
import ESFJ from '../../assets/mbti/ESFJ.png';
import ENFJ from '../../assets/mbti/ENFJ.png';
import ENTJ from '../../assets/mbti/ENTJ.png';
import defaultImg from '../../assets/defaultPhoto.png';

const Mbti = () => {
  const mbtiTypes = [
    { value: 'ISTJ', label: 'ISTJ - The Inspector', img: ISTJ },
    { value: 'ISFJ', label: 'ISFJ - The Protector', img: ISFJ },
    { value: 'INFJ', label: 'INFJ - The Advocate', img: INFJ },
    { value: 'INTJ', label: 'INTJ - The Architect', img: INTJ },
    { value: 'ISTP', label: 'ISTP - The Craftsman', img: ISTP },
    { value: 'ISFP', label: 'ISFP - The Artist', img: ISFP },
    { value: 'INFP', label: 'INFP - The Mediator', img: INFP },
    { value: 'INTP', label: 'INTP - The Thinker', img: INTP },
    { value: 'ESTP', label: 'ESTP - The Dynamo', img: ESTP },
    { value: 'ESFP', label: 'ESFP - The Entertainer', img: ESFP },
    { value: 'ENFP', label: 'ENFP - The Campaigner', img: ENFP },
    { value: 'ENTP', label: 'ENTP - The Visionary', img: ENTP },
    { value: 'ESTJ', label: 'ESTJ - The Supervisor', img: ESTJ },
    { value: 'ESFJ', label: 'ESFJ - The Provider', img: ESFJ },
    { value: 'ENFJ', label: 'ENFJ - The Giver', img: ENFJ },
    { value: 'ENTJ', label: 'ENTJ - The Commander', img: ENTJ },
  ];

  const navigate = useNavigate();
  const { detailInfo, setDetailInfo } = useDetailInfo();

  const handleData = () => {
    if (detailInfo.mbti === '') {
      toast.error('Please choose your MBTI type.');
    } else {
      navigate('/collect-data/profilephoto');
    }
    console.log(detailInfo);
  };

  const handleImageError = (event) => {
    event.target.src = defaultImg;
  };

  return (
    <FadeCard>
      <div className='card w-full md:w-[800px] h-screen bg-colorbg-primary p-4 py-6 rounded-sm flex flex-col gap-8 overflow-hidden duration-200'>
        <div className="heading flex flex-col gap-2">
          <h1 className='text-2xl font-bold'>Choose Your MBTI Types</h1>
          <p className='text-gray-500'>Select your MBTI type. Understanding personality types can be insightful!</p>
        </div>
        <hr />
        <div className='flex flex-wrap gap-6 items-center justify-center overflow-y-scroll' style={{ scrollbarWidth: 'thin', scrollbarColor: '#4A5568 #CBD5E0', scrollbarTrackColor: '#CBD5E0' }}>
          {mbtiTypes.map((item, index) => (
            <div key={index} className='flex flex-col items-center justify-center gap-3'>
              <img
                src={item.img}
                alt={item.value}
                className={`${detailInfo.mbti === item.value ? 'border-btnbg-primary border-4' : ''} w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full object-cover cursor-pointer duration-150`}
                onClick={() => setDetailInfo({ ...detailInfo, mbti: item.value })}
                onError={handleImageError}
                loading="lazy"
              />
              <span className='text-colortext-secondary duration-200 font-medium p-1 px-3 cursor-pointer rounded-md'>
                {item.label}
              </span>
            </div>
          ))}
        </div>
        <div className='w-full flex items-center justify-center gap-6'>
          <Link className='bg-btnbg-primary text-colortext-third p-2 w-16 flex items-center justify-center cursor-pointer' to={'/collect-data/zodiac'}>
            Prev
          </Link>
          <button className='bg-btnbg-primary text-colortext-third p-2 w-16 flex items-center justify-center cursor-pointer' onClick={handleData}>
            Next
          </button>
        </div>
      </div>
    </FadeCard>
  );
};

export default Mbti;
