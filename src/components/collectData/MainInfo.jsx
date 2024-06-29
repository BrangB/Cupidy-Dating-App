import React, { useState } from 'react';
import LocationBtn from '../../animations/animateIcons/LocationBtn';
import toast from 'react-hot-toast';
import FadeCard from '../../animations/collectdata/FadeCard';
import { Link } from 'react-router-dom';

const MainInfo = () => {
    const [btnLoading, setBtnLoading] = useState(false);
    const [address, setAddress] = useState(null);

    const location = () => {
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

    return (
        <FadeCard>
            <div className="w-[600px] h-[400px] bg-colorbg-secondary rounded-xl p-6">
                <div className="inputs space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mb-2">Name: </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name..."
                            className="p-2 border rounded-md outline-none border-colorbg-third"
                        />
                    </div>
                    <div className="flex gap-4 items-center">
                        <button
                            className='bg-btnbg-primary text-colortext-third p-2 w-44 flex items-center justify-center'
                            onClick={location}
                        >
                            {btnLoading ? <LocationBtn /> : 'Current Location'}
                        </button>
                        {address && (
                            <p className='text-colortext-secondary'>
                                {address.locality}, {address.city} - {address.countryName}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="birth-date" className="mb-2">Birth date: </label>
                        <input
                            type="date"
                            id="birth-date"
                            placeholder="Enter your birth date..."
                            className="p-2 border rounded-md outline-none border-colorbg-third"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="gender" className="mb-2">Gender: </label>
                        <select id="gender" className="p-2 border rounded-md outline-none border-colorbg-third">
                            <option value="">Select your gender...</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <Link to={'/collect-data/welcome'}>Prev</Link>
                <Link to={'/collect-data/interest'}>Next</Link>
            </div>
        </FadeCard>
    );
};

export default MainInfo;
