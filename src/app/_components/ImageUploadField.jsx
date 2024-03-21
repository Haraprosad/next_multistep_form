import { useState } from "react";
import Image from "next/image";

export default function ImageUpload({ register, errors }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        {...register("logo")}
        onChange={handleImageChange}
        className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-yellow-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
      />
      {errors.logo?.message && (
        <p className="mt-2 text-sm text-red-400">{errors.logo.message}</p>
      )}
      {selectedImage && (
        <div>
          <Image
            src={selectedImage}
            width={200}
            height={200}
            alt="Picture of the author"
          />
        </div>
      )}
    </div>
  );
}
