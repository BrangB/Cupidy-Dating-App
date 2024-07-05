import React from 'react';
import FadeCard from '../../animations/collectdata/FadeCard';
import { Link, useNavigate } from 'react-router-dom';
import { useDetailInfo } from '../../providers/DetailInfoProvider';
import toast from 'react-hot-toast';

const Interest = () => {
  // Example array of interests
  const interests = [
    'Technology', 'Music', 'Sports', 'Art', 'Science',
    'Cooking', 'Travel', 'Photography', 'Fashion', 'Gaming',
    'Books', 'Movies', 'Fitness', 'History', 'Design',
    'Writing', 'Animals', 'DIY', 'Food', 'Politics',
    'Nature', 'Dance', 'Yoga', 'Entrepreneurship', 'Cars',
    'Space', 'Education', 'Philosophy', 'Psychology', 'Languages'
  ];

  const {detailInfo, setDetailInfo} = useDetailInfo();
  const navigate = useNavigate();

  const addInterest = (interest) => {
    if (detailInfo.interests.includes(interest)) {
      
      const updatedInterests = detailInfo.interests.filter(item => item !== interest);
      setDetailInfo({ ...detailInfo, interests: updatedInterests });
    } else {
      if(detailInfo.interests.length < 10){
        const updatedInterests = [...detailInfo.interests, interest];
        setDetailInfo({ ...detailInfo, interests: updatedInterests });
      }else{
        toast.error("Cannot add more than 10 interests.")
      }

    }
  };

  const handleForm = () => {
    if(detailInfo.interests.length >= 5){
      navigate('/collect-data/zodiac')
      console.log(detailInfo)
    }else{
      toast.error("Please choose at least 5 interests.")
    }
  }

  return (
    <FadeCard>
      <div className='card w-full md:w-[700px] bg-colorbg-primary p-4 py-6 rounded-sm flex flex-col gap-8 overflow-hidden duration-200'>
        <div className="heading flex flex-col gap-2">
          <h1 className='text-2xl font-bold'>Interests</h1>
          <span className='text-colortext-primary font-bold'>{detailInfo.interests.length} / 5+</span>
          <p className='text-gray-500'>Add at least 5 interests to your profile. You'll be able to discuss, engage, and meet like-minded souls in these communities.</p>
        </div>
        <hr />
        <div className="interest w-full flex flex-wrap gap-6 items-center justify-center h-[350px] md:h-[200px] overflow-y-scroll" style={{ scrollbarWidth: 'thin', scrollbarColor: '#4A5568 #CBD5E0', scrollbarTrackColor: '#CBD5E0' }}>
          {interests.map((interest, index) => (
              <span key={index} className={` ${detailInfo.interests.includes(interest) ? 'bg-btnbg-primary text-colortext-third' : 'text-[#707070] bg-colorbg-secondary'} duration-200 font-medium  p-1 px-3 cursor-pointer rounded-md`} onClick={() => addInterest(interest)}>{interest}</span>
          ))}
        </div>
        <div className='w-full flex items-center justify-center gap-6'>
          <Link
            className='bg-btnbg-primary text-colortext-third p-2 w-16 flex items-center justify-center cursor-pointer'
            to={'/collect-data/main-info'}
          >
            Prev
          </Link>
          <button
                    className='bg-btnbg-primary text-colortext-third p-2 w-16 flex items-center justify-center cursor-pointer'
                    onClick={handleForm}
                >
                    Next
                </button>
        </div>
      </div>
    </FadeCard>
  );
};

export default Interest;
