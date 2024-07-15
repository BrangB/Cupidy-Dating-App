import React, { useRef } from "react";
import { useDetailInfo } from "../../providers/DetailInfoProvider";
import defaultPhoto from '../../assets/defaultPhoto.png';
import FadeCard from "../../animations/collectdata/FadeCard";
import supabase from "../../utils/supabase";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const ProfilePhoto = () => {
  const { detailInfo, setDetailInfo } = useDetailInfo();
  const inputRefs = useRef([...Array(5)].map(() => React.createRef())); // Array of 5 refs for file inputs

  const handleClick = (index) => () => {
    inputRefs.current[index].current.click();
  };

  const navigate = useNavigate();

  const handleChange = async (index, event) => {
    const file = event.target.files[0];
    if (file) {
      // Generate a unique file name with folder path
      const folderName = detailInfo.fullName.replace(/\s+/g, '_');
      const fileName = `${folderName}/${index}_${Date.now()}.${file.name.split('.').pop()}`;
      console.log(fileName);

      toast.promise(
        supabase.storage
          .from('cupidyImg')
          .upload(fileName, file)
          .then(({ error }) => {
            if (error) throw error;

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
            console.log(JSON.stringify(detailInfo));

            return "File uploaded successfully!";
          })
          .catch((error) => {
            throw new Error(`Error: ${error.message}`);
          }),
        {
          loading: 'Uploading file...',
          success: 'File uploaded successfully!',
          error: 'Error uploading file.'
        }
      );
    }
  };

  const handleForm = () => {

    let addPhoto = 0;
    detailInfo.profilePhoto.map(item => {
      if(item.url != ''){
        addPhoto += 1;
      }
      return null 
    })
    if(addPhoto != 0){
      navigate("/dashboard");
      console.log(detailInfo);
    }else{
      toast.error("Please add at least one photo.");
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
