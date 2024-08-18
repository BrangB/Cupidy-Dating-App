import React, { useRef } from "react";
import { useDetailInfo } from "../../providers/DetailInfoProvider";
import defaultPhoto from '../../assets/defaultPhoto.png';
import FadeCard from "../../animations/collectdata/FadeCard";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import { jwtDecode } from "jwt-decode";

const ProfilePhoto = () => {
  const { detailInfo, setDetailInfo } = useDetailInfo();
  const {user, setUser} = useAuth();
  const inputRefs = useRef([...Array(5)].map(() => React.createRef())); // Array of 5 refs for file inputs
  const backendhosturl = import.meta.env.VITE_BACKEND_HOST_URL

  const handleClick = (index) => () => {
    inputRefs.current[index].current.click();
  };


  const navigate = useNavigate();

  const handleChange = async (index, event) => {
    const file = event.target.files[0]; // img file

  
    if(file){

      // toast.promise(
      //   supabase.storage
      //     .from('cupidyImg')
      //     .upload(fileName, file)
      //     .then(({ error }) => {
      //       if (error) throw error;

      //       // Construct the public URL manually
      //       const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      //       const publicUrl = `${supabaseUrl}/storage/v1/object/public/cupidyImg/${fileName}`;

      //       // Update the profilePhoto array with the new URL
      //       const updatedProfilePhoto = [...detailInfo.profilePhoto];
      //       updatedProfilePhoto[index].url = publicUrl;

      //       setDetailInfo({
      //         ...detailInfo,
      //         profilePhoto: updatedProfilePhoto
      //       });
      //       console.log(JSON.stringify(detailInfo));

      //       return "File uploaded successfully!";
      //     })
      //     .catch((error) => {
      //       throw new Error(`Error: ${error.message}`);
      //     }),
      //   {
      //     loading: 'Uploading file...',
      //     success: 'File uploaded successfully!',
      //     error: 'Error uploading file.'
      //   }
      // );

      const formData = new FormData();
      formData.append('file', file);

      const username = detailInfo.fullName.replace(/\s+/g, '');
      formData.append('username', username); // Append the username

      const uploadPhoto = async() => {
        try {
          // Send the file data directly to the backend using fetch
          const response = await fetch("http://localhost:3000/test", {
            method: 'POST',
            body: formData,
          });
      
          // Check if the response is successful
          if (response.ok) {
            const result = await response.json();
            console.log(result)
            const updatedProfilePhoto = [...detailInfo.profilePhoto];
            updatedProfilePhoto[index].url = result.blobUrl;

            setDetailInfo({
              ...detailInfo,
              profilePhoto: updatedProfilePhoto
            });

            return "File uploaded successfully!";
          } else {
            console.error('Error uploading file:', response.statusText);
          }
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      }

      toast.promise(
        uploadPhoto(), {
          loading: 'Uploading file...',
          success: () => {
            return 'File uploaded successfully!'
          },
          error: 'Error uploading file.'
        }
      )
    }


    
  };

  const uploadPhoto = async(token) => {
    try {
      const response = await fetch(`${backendhosturl}/api/v1/user/upload_photos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token.access_token}`
        },
        body: JSON.stringify({
          "user_id": detailInfo.user_id,
          "photos": detailInfo.profilePhoto
        })
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Upload failed: ${errorText}`);
      }
  
      const result = await response.json();
      return result; // Return the result if needed
    } catch (error) {
      console.error('Error uploading photo:', error);
      throw error; // thow the error to be caught in insertData
    }
  }
  
  const insertData = async () => {
    const token = JSON.parse(localStorage.getItem("jwt"));
  
    if (token) {
      const decodedToken = jwtDecode(token.access_token);
      setDetailInfo({...detailInfo, user_id: decodedToken.user_id});
      console.log(decodedToken);
  
      try {
        // Wait for photo upload to complete
        await uploadPhoto(token);
  
        // Proceed with the next API call after the photo is uploaded
        const response = await fetch(`${backendhosturl}/api/v1/user/detailinfo`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token.access_token}`
          },
          body: JSON.stringify({
            user_id: detailInfo.user_id,
            full_name: detailInfo.fullName,
            birthdate: detailInfo.birthdate,
            gender: detailInfo.gender,
            interested_in: detailInfo.interestedIn,
            interests: detailInfo.interests,
            zodiac_sign: detailInfo.zodiacSign,
            mbti: detailInfo.mbti,
            country_name: detailInfo.location.countryName,
            city: detailInfo.location.city,
            locality: detailInfo.location.locality
          })
        });
  
        if (!response.ok) {
          const errorText = await response.text();
          console.log('Error Response:', errorText);
  
          let errorMessage;
          try {
            const errorData = JSON.parse(errorText);
            errorMessage = errorData.error || 'Unknown error occurred';
          } catch {
            errorMessage = 'Error parsing error response';
          }
  
          throw new Error(errorMessage);
        }
  
        const data = await response.json();
        console.log(data);
        return { info: data };
  
      } catch (err) {
        console.error('Fetch Error:', err);
        throw err;
      }
    }
  };

const handleForm = () => {
    let addPhoto = 0;
    detailInfo.profilePhoto.map(item => {
        if (item.url !== '') {
            addPhoto += 1;
        }
        return null;
    });

    if (addPhoto == 5) {
        toast.promise(
            insertData(),
            {
                loading: 'Saving your data...',
                success: ()=>{
                  navigate('/dashboard');
                  return 'Data saved successfully!'
                },
                error: (err) => `Error: ${err.message}`
            }
        );
    } else {
        toast.error("Please upload all photos.");
    }
};

  return (
    <FadeCard>
      <div className="right w-full md:w-[700px] bg-colorbg-primary h-full flex flex-col items-center justify-center p-6 gap-6 ">
        <div className="heading flex flex-col gap-2 w-full">
          <div className="h relative">
            <h1 className='text-2xl font-bold'>Profile Pictures</h1>
            <span className='w-44 h-1 bg-btnbg-primary absolute -bottom-1'></span>
          </div>
          <p className="text-gray-500">Please add at least one-photo.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 p-6 md:p-8 w-full md:w-[500px]">
          {detailInfo.profilePhoto.map((photo, index) => (
            <div
              key={index}
              onClick={handleClick(index)}
              className=" flex flex-col items-center justify-center mr-2 relative cursor-pointer"
            >
              {photo.url === '' ? (
                <img
                  src={defaultPhoto}
                  className={`${index == 0 ? "w-[200px] h-[200px] md:w-[200px] md:h-[200px] " : "w-[120px] h-[120px] md:w-[100px] md:h-[100px] "}  object-cover rounded-md bg-[#c0c0c0] border-dashed p-2 border-[2px] border-[#414141]`}
                  alt={`Placeholder ${index + 1}`}
                />
              ) : (
                <img
                  src={photo.url}
                  className={`${index == 0 ? "w-[200px] h-[200px] md:w-[200px] md:h-[200px] " : "w-[120px] h-[120px] md:w-[100px] md:h-[100px] "}  object-cover rounded-md bg-[#c0c0c0] border-[#414141]`}
                  alt={`Profile ${index + 1}`}
                />
              )}
              <input
                type="file"
                ref={inputRefs.current[index]}
                onChange={(event) => handleChange(index, event)}
                style={{ display: "none" }}
              />
            </div>
          ))}
        </div>
        <div className="w-full flex items-center justify-center gap-6">
          <Link
            className="bg-btnbg-primary text-colortext-third p-2 w-16 flex items-center justify-center cursor-pointer"
            to={"/collect-data/mbti"}
          >
            Prev
          </Link>
          <button
            className="bg-btnbg-primary text-colortext-third p-2 w-16 flex items-center justify-center cursor-pointer"
            onClick={handleForm}
          >
            Next
          </button>
        </div>
      </div>
    </FadeCard>
  );
};

export default ProfilePhoto;



