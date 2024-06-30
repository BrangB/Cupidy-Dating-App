import React, { createContext, useContext, useState } from 'react'

const DetailInfoContext = createContext();

const DetailInfoProvider = ({children}) => {

    const [detailInfo, setDetailInfo] = useState({
        fullName: '',
        birthdate: '',
        gender: '',
        location: null,
        interestedIn: ''
    })

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