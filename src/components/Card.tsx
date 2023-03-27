import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
const Card = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  };

  return (
    <>
      <div className="flex gap-8 items-center justify-center min-h-screen from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3] bg-gradient-to-br px-2">
        <form onSubmit={handleSubmit}>
          <p className="text-black border w-24 rounded-t-lg py-1 px-2 bg-white">
            New Title
          </p>
          <div className="w-80  mx-auto bg-white  shadow overflow-hidden">
            <div className="max-w-md mx-auto">
              <div className="p-4 sm:p-6">
                <input
                  placeholder="New Title"
                  className="block  px-2 py-1 outline-none"
                //   onChange={() => }
                />
                <textarea
                  placeholder="New description"
                  className="font-bold border w-full rounded-lg text-gray-700 text-sm px-2 py-2 leading-7 mb-1 outline-none"
                />

                {image ? (
                  <img
                    className="h-52 object-contain w-full"
                    src={image}
                    alt="Selected Image"
                  />
                ) : (
                  <div
                    className="flex items-center justify-center w-full "
                    onChange={handleImageChange}
                  >
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-52 border-2 border-dashed border-[#1B2A39] rounded-lg cursor-pointer bg-[#F3A3A5] hover:opacity-80"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          {" "}
                          <BsPlus className="text-9xl text-[#1B2A39]" />{" "}
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                      />
                    </label>
                  </div>
                )}

                <button
                  type="submit"
                  className="block ml-auto bg-[#E0E0E0] hover:opacity-80 py-1 px-2 mt-2"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>

        <div className="h-[446px]">
          <p className="text-black border w-24  rounded-t-lg py-1 px-2 bg-white">
            New Title
          </p>
          <div className="w-80  mx-auto bg-white h-72  shadow overflow-hidden">
            <div className="max-w-md   mx-auto">
              <div className="p-4 sm:p-6 ">
                <p>sadsad</p>
                <p className="h-24">sadsad</p>

                <div className="flex items-center  h-52 bg-gray-300 justify-center w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
