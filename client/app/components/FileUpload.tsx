"use client";
import { Upload } from "lucide-react";

const FileUpload = () => {
  const fileUploadBtn = () => {
    const el = document.createElement("input");
    el.setAttribute("type", "file");
    el.setAttribute("accept", "application/pdf");
    el.addEventListener("change", async () => {
      if (el.files) {
        const files = el.files[0];
        if (files) {
          const formData = new FormData();
          formData.append("pdf", files);
          try {
            const res = await fetch(`http://localhost:8000/upload/pdf`, {
              method: "POST",
              body: formData,
            });
            console.log(res);
          } catch (error) {
            console.log("ERROR while uploading pdf", error);
          }
        }
      }
    });
    el.click();
  };

  return (
    <div
      onClick={fileUploadBtn}
      className="w-full text-center p-4 gap-2 border-2 rounded-lg flex items-center justify-center flex-col text-white hover:text-slate-400 transition-all delay-100 duration-100"
    >
      <Upload />
      <h3 className="font-medium text-2xl">Upload your Pdf</h3>
    </div>
  );
};

export default FileUpload;
