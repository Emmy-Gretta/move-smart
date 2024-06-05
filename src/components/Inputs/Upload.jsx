import React, { useState } from 'react';

const UploadPhoto = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="p-4">
        <input
          type="file"
          id="file-input"
          className="hidden"
          accept="image/*"
          onChange={handleImageChange}
        />
        <label
          htmlFor="file-input"
          className="cursor-pointer flex justify-center items-center border border-1 border-[#7f7d7d]  h-[100px] w-[250px] rounded-lg"
        >
          {preview ? (
            <img src={preview} alt="Uploaded Preview" className="object-cover h-full w-full rounded-lg" />
          ) : (
            <span className="text-[#616161] text-xs text-center"><span className='text-xs text-black'>Click to upload or</span> drag and drop <br />
            <span>SVG, PNG or JPG (max: 800px 400px)</span>
            </span>
          )}
        </label>
      </div>
    </div>
  );
}

export default UploadPhoto;
