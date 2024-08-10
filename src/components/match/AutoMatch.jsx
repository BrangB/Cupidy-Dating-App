import React, { useState } from 'react'
import { IoLocationOutline } from "react-icons/io5";
import FindUser from '../../animations/animateIcons/FindUser';

const AutoMatch = () => {

    const [loading, setLoading] = useState(false)

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
          id: 4,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU2A6WXv5KVcop6w15wyBKoTP9IZ__wtcAtg&s",
          name: "IU",
          location: "Yangon, Rangoon",
          age: 20,
          mbti: "ENTJ",
          zodiac: "Virgo",
          miniProfileImg: "https://img.koreatimes.co.kr/upload/newsV2/images/202309/40b9660377cf43179a9d13d97aa6bb91.jpg/dims/resize/740/optimize"
        },
        {
          id: 5,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU2A6WXv5KVcop6w15wyBKoTP9IZ__wtcAtg&s",
          name: "IU",
          location: "Yangon, Rangoon",
          age: 20,
          mbti: "ENTJ",
          zodiac: "Virgo",
          miniProfileImg: "https://img.koreatimes.co.kr/upload/newsV2/images/202309/40b9660377cf43179a9d13d97aa6bb91.jpg/dims/resize/740/optimize"
        },
        {
          id: 6,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU2A6WXv5KVcop6w15wyBKoTP9IZ__wtcAtg&s",
          name: "IU",
          location: "Yangon, Rangoon",
          age: 20,
          mbti: "ENTJ",
          zodiac: "Virgo",
          miniProfileImg: "https://img.koreatimes.co.kr/upload/newsV2/images/202309/40b9660377cf43179a9d13d97aa6bb91.jpg/dims/resize/740/optimize"
        },
        {
          id: 7,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU2A6WXv5KVcop6w15wyBKoTP9IZ__wtcAtg&s",
          name: "IU",
          location: "Yangon, Rangoon",
          age: 20,
          mbti: "ENTJ",
          zodiac: "Virgo",
          miniProfileImg: "https://img.koreatimes.co.kr/upload/newsV2/images/202309/40b9660377cf43179a9d13d97aa6bb91.jpg/dims/resize/740/optimize"
        },
        {
          id: 8,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU2A6WXv5KVcop6w15wyBKoTP9IZ__wtcAtg&s",
          name: "IU",
          location: "Yangon, Rangoon",
          age: 20,
          mbti: "ENTJ",
          zodiac: "Virgo",
          miniProfileImg: "https://img.koreatimes.co.kr/upload/newsV2/images/202309/40b9660377cf43179a9d13d97aa6bb91.jpg/dims/resize/740/optimize"
        },
        {
          id: 9,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU2A6WXv5KVcop6w15wyBKoTP9IZ__wtcAtg&s",
          name: "IU",
          location: "Yangon, Rangoon",
          age: 20,
          mbti: "ENTJ",
          zodiac: "Virgo",
          miniProfileImg: "https://img.koreatimes.co.kr/upload/newsV2/images/202309/40b9660377cf43179a9d13d97aa6bb91.jpg/dims/resize/740/optimize"
        },
        {
          id: 10,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU2A6WXv5KVcop6w15wyBKoTP9IZ__wtcAtg&s",
          name: "IU",
          location: "Yangon, Rangoon",
          age: 20,
          mbti: "ENTJ",
          zodiac: "Virgo",
          miniProfileImg: "https://img.koreatimes.co.kr/upload/newsV2/images/202309/40b9660377cf43179a9d13d97aa6bb91.jpg/dims/resize/740/optimize"
        }
      ];

      const refreshUser = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000);
      }

  return (
    <>
        {loading && <div className="loading"><FindUser /></div>}
        {!loading &&         
        <div className="w-full p-6">
          <button className='bg-btnbg-primary text-colortext-third p-2 rounded-md' onClick={refreshUser}>Refresh</button>
        </div>}
        {!loading &&         
        <div className='w-full flex items-center justify-center flex-wrap gap-5'>
          {profiles.map((profile, index) => (
            <div
              key={profile.id}
              className={`img w-full md:w-[200px] h-[250px] rounded-3xl overflow-hidden scale-90 hover:scale-100 duration-200 cursor-pointer shadow-xl`}
              
            >
              <img src={profile.img} alt="profile" className='w-full h-full object-cover' />
              <div className="overlay w-full h-full absolute top-0 left-0" style={{
                  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)'
                }}></div>
              <div className="info absolute bottom-0 p-2 text-white">
                <img src={profile.miniProfileImg} alt="mini profile" className='w-16 h-16 rounded-full object-cover' />
                <h1 className='font-bold text-lg text-white px-3'>{profile.name}</h1>
                <div className="location flex items-center justify-center gap-2 px-3">
                  <IoLocationOutline className='text-lg font-bold'/>
                  {profile.location} 🇲🇲
                </div>
                <div className="status flex gap-2 text-sm px-1">
                  <div className="age p-1 px-2 rounded-xl bg-pink-500">{profile.age}</div>
                  <div className="mbti p-1 px-2 rounded-xl bg-green-500">{profile.mbti}</div>
                  <div className="zodiac p-1 px-2 rounded-xl bg-purple-500">{profile.zodiac}</div>
                </div>
              </div>
            </div>
          ))}
        </div>}
    </>
  )
}

export default AutoMatch