import React, { useState } from 'react';
import LocationBtn from '../../animations/animateIcons/LocationBtn';
import toast from 'react-hot-toast';
import FadeCard from '../../animations/collectdata/FadeCard';
import { Link, useNavigate } from 'react-router-dom';
import { useDetailInfo } from '../../providers/DetailInfoProvider';

const MainInfo = () => {
    const [btnLoading, setBtnLoading] = useState(false);
    const [address, setAddress] = useState(null);

    const { detailInfo, setDetailInfo } = useDetailInfo();

    const navigate = useNavigate();

    const getLocation = () => {
        if (navigator.geolocation) {
            setBtnLoading(true);
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            toast.error('Geolocation is not supported by this browser.');
        }
    };

    const showPosition = (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        const geoURL = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`;

        fetch(geoURL)
            .then(res => res.json())
            .then(data => {
                setAddress(data);
                setDetailInfo({ ...detailInfo, location: data });
                setBtnLoading(false);
            })
            .catch(error => {
                console.error('Error fetching geolocation data:', error);
                setBtnLoading(false);
                toast.error('Failed to fetch location data.');
            });
    };

    const showError = (error) => {
        setBtnLoading(false);
        switch (error.code) {
            case error.PERMISSION_DENIED:
                toast.error('User denied the request for Geolocation.');
                break;
            case error.POSITION_UNAVAILABLE:
                toast.error('Location information is unavailable.');
                break;
            case error.TIMEOUT:
                toast.error('The request to get user location timed out.');
                break;
            case error.UNKNOWN_ERROR:
                toast.error('An unknown error occurred.');
                break;
            default:
                toast.error('An unexpected error occurred.');
        }
    };

    const handleForm = () => {
        if (detailInfo.fullName && detailInfo.birthdate && detailInfo.gender && detailInfo.interestedIn) {
            if(detailInfo.location){
                // toast.success('Step-1 done successfully 🎉');
                navigate('/collect-data/interest')
                console.log(detailInfo);
            }else{
                toast.error("Please generate your location")
            }
        } else {
            toast.error('Please fill in all the fields.');
        }
    };

    return (
        <FadeCard>
            <div className="w-screen md:w-[400px] bg-colorbg-secondary rounded-xl p-6">
                <div className="inputs w-full h-full flex flex-col items-center justify-between gap-4">
                    <div className="flex w-full flex-col">
                        <label htmlFor="name" className="mb-2">Full Name: </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name..."
                            value={detailInfo.fullName}
                            className="p-2 border rounded-sm outline-none border-colorbg-third"
                            onChange={(e) => setDetailInfo({ ...detailInfo, fullName: e.target.value })}
                        />
                    </div>
                    <div className="flex w-full flex-col">
                        <label htmlFor="birth-date" className="mb-2">Birth date: </label>
                        <input
                            type="date"
                            id="birth-date"
                            placeholder="Enter your birth date..."
                            value={detailInfo.birthdate}
                            className="p-2 border rounded-sm outline-none border-colorbg-third"
                            onChange={(e) => setDetailInfo({ ...detailInfo, birthdate: e.target.value })}
                        />
                    </div>
                    <div className="flex w-full flex-col">
                        <label htmlFor="gender" className="mb-2">Gender: </label>
                        <select
                            id="gender"
                            value={detailInfo.gender}
                            className="p-3 border bg-transparent rounded-sm outline-none border-colorbg-third"
                            onChange={(e) => setDetailInfo({ ...detailInfo, gender: e.target.value })}
                        >
                            <option value="">Select your gender...</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="flex w-full flex-col">
                        <label htmlFor="interestedIn" className="mb-2">Interested In: </label>
                        <select
                            id="interestedIn"
                            value={detailInfo.interestedIn}
                            className="p-3 border bg-transparent rounded-sm outline-none border-colorbg-third"
                            onChange={(e) => setDetailInfo({ ...detailInfo, interestedIn: e.target.value })}
                        >
                            <option value="">Select interest...</option>
                            <option value="woman">Woman</option>
                            <option value="man">Man</option>
                        </select>
                    </div>
                    <div className="flex w-full gap-4 mt-3 items-center">
                        <button
                            className='bg-btnbg-primary text-colortext-third py-2 p-3 w-36 flex items-center justify-center'
                            onClick={getLocation}
                        >
                            {btnLoading ? <LocationBtn /> : 'Current Location'}
                        </button>
                        {address && (
                            <p className='text-colortext-secondary'>
                                {address.locality}, {address.city} - {address.countryName}
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <div className="buttons w-full flex items-center justify-center mt-6 gap-4">
                <Link
                    className='bg-btnbg-primary text-colortext-third p-2 w-16 flex items-center justify-center cursor-pointer'
                    to={'/collect-data/welcome'}
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
        </FadeCard>
    );
};

export default MainInfo;
