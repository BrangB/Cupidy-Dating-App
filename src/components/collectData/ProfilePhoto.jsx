import React, { useRef } from "react";
import { useDetailInfo } from "../../providers/DetailInfoProvider";
import defaultPhoto from '../../assets/defaultPhoto.png';
import FadeCard from "../../animations/collectdata/FadeCard";
import supabase from "../../utils/supabase";
import toast from "react-hot-toast";

const ProfilePhoto = () => {
  const { detailInfo, setDetailInfo } = useDetailInfo();
  const inputRefs = useRef([...Array(5)].map(() => React.createRef())); // Array of 5 refs for file inputs

  const handleClick = (index) => () => {
    inputRefs.current[index].current.click();
  };
  

  const handleChange = async (index, event) => {
    const file = event.target.files[0];
    if (file) {
      // Generate a unique file name with folder path
      const folderName = detailInfo.fullName.replace(/\s+/g, '_');
      const fileName = `${folderName}/${index}_${Date.now()}.${file.name.split('.').pop()}`;
      console.log(fileName);
      
      // Upload the file to Supabase Storage
      const { error } = await supabase.storage
        .from('cupidyImg')
        .upload(fileName, file);
      
      if (error) {
        toast.error(`Error: ${error.message}`);
      } else {
        // Construct the public URL manually
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const publicUrl = `${supabaseUrl}/storage/v1/object/public/cupidyImg/${fileName}`;
        
        // Update the profilePhoto array with the new URL
        const updatedProfilePhoto = [...detailInfo.profilePhoto];
        updatedProfilePhoto[index].url = publicUrl;
  
        setDetailInfo({
          ...detailInfo,
          profilePhoto: updatedProfilePhoto
        });
  
        toast.success(`File uploaded successfully!`);
        console.log(JSON.stringify(detailInfo))
        // You can do something with the public URL, e.g., save it to your database or display it
      }
    }
  };
  
  
  
  

  return (
    <FadeCard>
      <div className="right w-[600px] h-full flex flex-col justify-center p-4">
        <div className="flex flex-wrap justify-center gap-11">
          {detailInfo.profilePhoto.map((photo, index) => (
            <div
              key={index}
              onClick={handleClick(index)}
              className="mt-2 flex flex-col items-center justify-center mr-2 mb-2 relative"
            >
              {photo.url === '' ? (
                <img
                  src={defaultPhoto}
                  className="w-[150px] h-[150px] object-cover rounded-md object-center bg-[#c0c0c0] border-dashed p-2 border-[2px] border-[#414141]"
                  alt={`Placeholder ${index + 1}`}
                />
              ) : (
                <img
                  src={photo.url}
                  className="w-[150px] h-[150px] rounded-md object-cover border-[2px] border-[#f0f0f0]"
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
      </div>
    </FadeCard>
  );
};

export default ProfilePhoto;
