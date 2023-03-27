import React, { useState } from "react";

const Card = () => {
  const [image, setImage] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setImage(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3] bg-gradient-to-br px-2">
        <div>
            <p className="text-black border w-24 rounded-t-lg py-1 px-2 bg-white" >New Title</p>
        <div className="w-full max-w-md  mx-auto bg-white  shadow overflow-hidden">
          <div className="max-w-md mx-auto">
            <div className="p-4 sm:p-6">
              <input placeholder="New Title"  className="block px-2 py-1 outline-none" />
              <textarea
                placeholder="New description"
                className="font-bold border rounded-lg text-gray-700 text-sm px-2 py-2 leading-7 mb-1 outline-none"
              />
            
       
                <input className="w-96 h-96 bg-pink-300" type="file" onChange={handleImageChange} />
    

              {image && <img className="h-[236px]" src={image} alt="Selected Image" />}

              

            </div>
          </div>
        </div> 
        </div>
        
      </div>

      <div className="flex items-center justify-center w-full">
        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
    </>
  );
};

export default Card;
