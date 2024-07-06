import React, { createContext, useContext, useEffect, useState } from 'react'

const DetailInfoContext = createContext();

const DetailInfoProvider = ({children}) => {

    const initialDetailInfo = {
      fullName: '',
      birthdate: '',
      gender: '',
      location: null,
      interestedIn: '',
      interests: [],
      zodiacSign: '',
      mbti: '',
      profilePhoto: [
        {title: 'photo1', url: ''},
        {title: 'photo2', url: ''},
        {title: 'photo3', url: ''},
        {title: 'photo4', url: ''},
        {title: 'photo5', url: ''},
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