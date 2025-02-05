import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import DefaultImageIcon from "../icons/DefaultImageIcon";
import { toast } from "react-toastify";
import TrashIcon from "../icons/TrashIcon";

function DragNDropInputImage({
  title = "",
  required = false,
  imageUrlResponse,
  handleUploadImageFile,
  classNameWrapper = "",
  classNameImg = "",
  classNamePlaceHolder = "",
  handleRemoveImageFile = null,
}) {
  const onDrop = useCallback((acceptedFiles) => {
    console.log("🚀 ~ onDrop ~ acceptedFiles:", acceptedFiles);
    if (acceptedFiles && acceptedFiles[0]) {
      handleUploadImageFile(acceptedFiles[0]);
    } else {
      toast.error("Please upload only 1 image");
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({ onDrop, maxFiles: 1, accept: { "image/*": [] } });

  return (
    <div>
      <div className="flex gap-1 mb-1">
        {title && (
          <p className="font-semibold text-sm text-textBlack">{title}</p>
        )}
        {required && <span className="text-red-500">*</span>}
      </div>
      <div
        {...getRootProps()}
        className={`smooth-transform ${classNameWrapper} ${
          isDragReject
            ? "border-2 border-red-500 bg-red-100 cursor-not-allowed"
            : isDragActive
            ? "border-2 border-primary bg-[#2F8DE420]"
            : "border-2 border-gray/20"
        } hover:border-primary relative border-dashed w-full rounded-md cursor-pointer flex flex-col items-center justify-center p-1 outline-none`}
      >
        <input {...getInputProps()} />
        {!imageUrlResponse && <DefaultImageIcon />}
        {imageUrlResponse && (
          <div className="relative w-full h-full">
            <img
              src={imageUrlResponse}
              alt={"avatar"}
              className={`w-full h-full object-cover ${classNameImg}`}
            />
            {handleRemoveImageFile && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveImageFile();
                }}
                className="absolute bottom-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded hover:bg-red-600 z-10"
              >
                <TrashIcon color="#ffffff" width={24} height={24} />
              </button>
            )}
          </div>
        )}
        <div
          className={`absolute top-0 left-0 right-0 bottom-0 bg-bgGray/70 opacity-0 smooth-transform hover:opacity-70 m-[2px] rounded-md ${
            isDragActive && "opacity-70"
          } ${classNamePlaceHolder}`}
        ></div>
      </div>
    </div>
  );
}

export default DragNDropInputImage;
