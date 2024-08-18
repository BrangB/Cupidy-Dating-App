import React, { createContext, useContext, useEffect, useState } from 'react'

const DetailInfoContext = createContext();

const DetailInfoProvider = ({children}) => {

    const initialDetailInfo = {
      user_id: '',
      fullName: '',
      birthdate: '',
      gender: '',
      location: null,
      interestedIn: '',
      interests: [],
      zodiacSign: '',
      mbti: '',
      profilePhoto: [
        {title: 'photo1', url: '', type: "profile"},
        {title: 'photo2', url: '', type: "coverPhoto"},
        {title: 'photo3', url: '', type: "gallery"},
        {title: 'photo4', url: '', type: "gallery"},
        {title: 'photo5', url: '', type: "gallery"},
      ]
    };

    const storedDetailInfo = JSON.parse(localStorage.getItem('detailInfo'));

    const [detailInfo, setDetailInfo] = useState(storedDetailInfo || initialDetailInfo);

    useEffect(() => {
      localStorage.setItem("detailInfo", JSON.stringify(detailInfo))
    }, [detailInfo])

  return (
    <DetailInfoContext.Provider value={{detailInfo, setDetailInfo}}>
        {children}
    </DetailInfoContext.Provider>
  )
}

export default DetailInfoProvider

export const useDetailInfo = () => {
    return useContext(DetailInfoContext)
}