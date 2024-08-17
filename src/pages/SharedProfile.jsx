import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const SharedProfile = () => {
  const location = useLocation();
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const pathParts = location.pathname.split("/");
    const id = pathParts[pathParts.length - 1];
    setUserId(id);
    console.log(id);
    // pathname: "/sharedProfile/2342"

    setLoading(true);
    setTimeout(() => {
        axios.get('https://fakestoreapi.com/products/') // api/v1/shareProfile?userId=12
        .then(response => {
          setUserData(response.data);
        })
        .catch(error => {
          console.error("There was an error fetching the data!", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 1000);
  }, [location]);

  return (
    <div className="w-full">
      {loading && (
        <div className="loading w-screen h-screen flex items-center justify-center bg-colorbg-primary fixed top-0 left-0">
          <h1 className="text-[30px] md:text-[50px] italic loading-image text-colortext-primary">
            <span className="text-[40px] md:text-[60px]">C</span>upidy
          </h1>
        </div>
      )}
      {userData && (
        <div className="w-full p-12 flex items-center justify-center">
          <div className="profile flex flex-col items-center justify-center gap-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3QfljjXjMLEeF9r1n0DLeKHfvQVZ4SF6jNQ&s"
              alt="profile Image"
              className="w-36 h-36 object-cover rounded-full"
            />
            {userData && <h1 className="text-xl">This is Brang</h1>}
            {userId && <p>User ID: {userId}</p>}
            <div className="placeholder flex flex-col md:flex-row gap-4">
                <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-[200px] mx-auto">
                <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-slate-200 h-10 w-10"></div>
                    <div class="flex-1 space-y-6 py-1">
                    <div class="h-2 bg-slate-200 rounded"></div>
                    <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                        <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                        <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                        </div>
                        <div class="h-2 bg-slate-200 rounded"></div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-[200px] mx-auto">
                <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-slate-200 h-10 w-10"></div>
                    <div class="flex-1 space-y-6 py-1">
                    <div class="h-2 bg-slate-200 rounded"></div>
                    <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                        <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                        <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                        </div>
                        <div class="h-2 bg-slate-200 rounded"></div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SharedProfile;
