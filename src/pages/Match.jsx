import React, { useState } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import MatchTransition from '../animations/match/MatchTransition';

const profiles = [
  {
    id: 1,
    img: "https://img.koreatimes.co.kr/upload/newsV2/images/202309/40b9660377cf43179a9d13d97aa6bb91.jpg/dims/resize/740/optimize",
    name: "IU",
    location: "Yangon, Rangoon",
    age: 20,
    mbti: "ENTJ",
    zodiac: "Virgo",
    miniProfileImg: "https://img.koreatimes.co.kr/upload/newsV2/images/202309/40b9660377cf43179a9d13d97aa6bb91.jpg/dims/resize/740/optimize"
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU2A6WXv5KVcop6w15wyBKoTP9IZ__wtcAtg&s",
    name: "IU",
    location: "Yangon, Rangoon",
    age: 20,
    mbti: "ENTJ",
    zodiac: "Virgo",
    miniProfileImg: "https://img.koreatimes.co.kr/upload/newsV2/images/202309/40b9660377cf43179a9d13d97aa6bb91.jpg/dims/resize/740/optimize"
  },
  {
    id: 3,
    img: "https://www.allkpop.com/upload/2023/05/content/092232/1683685924-20230509-iu.jpg",
    name: "IU",
    location: "Yangon, Rangoon",
    age: 20,
    mbti: "ENTJ",
    zodiac: "Virgo",
    miniProfileImg: "https://img.koreatimes.co.kr/upload/newsV2/images/202309/40b9660377cf43179a9d13d97aa6bb91.jpg/dims/resize/740/optimize"
  }
];

const Match = () => {
  const [visibleProfiles, setVisibleProfiles] = useState(profiles);

  const handleProfileClick = (id) => {
    setVisibleProfiles(visibleProfiles.filter(profile => profile.id !== id));
  };

  return (
    <MatchTransition>
      <div className="card w-[80%] min-h-[500px] relative flex items-center justify-center ">
        {visibleProfiles.map((profile, index) => (
          <div 
            key={profile.id} 
            className={`img w-full md:w-[250px] h-[300px] rounded-3xl overflow-hidden absolute top-12 left-0 scale-90 hover:scale-100 duration-200 cursor-pointer z-${40 - index * 10} shadow-xl ${index === 0 ? '' : `rotate-${index * 6}`}`}
            onClick={() => handleProfileClick(profile.id)}
          >
            <img src={profile.img} alt="profile" className='w-full h-full object-cover' />
            <div className="overlay w-full h-full absolute top-0 left-0" style={{
                background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)'
              }}></div>
            <div className="info absolute bottom-0 p-6 text-white">
              <img src={profile.miniProfileImg} alt="mini profile" className='w-16 h-16 rounded-full object-cover' />
              <h1 className='font-bold text-lg text-white px-3'>{profile.name}</h1>
              <div className="location flex items-center justify-center gap-2 px-3">
                <IoLocationOutline className='text-lg font-bold'/>
                {profile.location} 🇲🇲
              </div>
              <div className="status flex gap-2 text-sm px-3 p-2">
                <div className="age p-1 px-3 rounded-2xl bg-pink-500">{profile.age}</div>
                <div className="mbti p-1 px-3 rounded-2xl bg-green-500">{profile.mbti}</div>
                <div className="zodiac p-1 px-3 rounded-2xl bg-purple-500">{profile.zodiac}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MatchTransition>

  );
};

export default Match;
