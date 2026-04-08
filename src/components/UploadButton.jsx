"use client";

import { useRef, useState } from 'react';
import Storyblok from "storyblok-js-client";
import path from 'node:path';

export default function ImageUploadButton() {
  const [status, setStatus] = useState('idle'); // 'idle' | 'uploading' | 'success' | 'error'
  const fileInputRef = useRef(null);

  const storyblok = new Storyblok({
    oauthToken: process.env.PERSONAL_TOKEN,
  });

  const handleButtonClick = () => {
    console.log('handleButtonClick');
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event) => {
    console.log('handleFileChange');
    console.log(event);
    const file = event && event.target && event.target.files && event.target.files.length > 0 ? event.target.files[0] : null;
    if (!file) return;
    console.log(event.target.files);

    // Optional: Basic client-side validation
    if (file.size > 5 * 1024 * 1024) {
      alert("File is too large (Max 5MB)");
      return;
    }

    setStatus('uploading');

    let signedRespObj = await getSRO(file.name);
    console.log('signedRespObj');
    console.log(signedRespObj);
    if(signedRespObj && signedRespObj.response && signedRespObj.response.data) {
      signedRespObj = signedRespObj.response.data
    } else {
      setStatus('error');
      return;
    }

    let uploadResponse = await UploadImage(file,signedRespObj);
    console.log('uploadResponse');
    console.log(uploadResponse);
    if(!uploadResponse) {
      setStatus('error');
      return;
    }

    let finishResponse = await finishUploadImg(signedRespObj);
    console.log('finishResponse');
    console.log(finishResponse);
    if(finishResponse && finishResponse.response && finishResponse.response.data) {
      finishResponse = finishResponse.response.data
    } else {
      setStatus('error');
      return;
    }
    setStatus('success');
    // Reset to idle after 3 seconds
    setTimeout(() => setStatus('idle'), 3000);
  };

  /// Get a Signed Response Object
  const getSRO = async (filename) => {
    try {
      const response = await storyblok.post(`spaces/${process.env.SPACE_ID}/assets/`, {
        "filename": filename,
        "validate_upload": 1
      });
      console.log({ response });
      return { response };
    } catch (error) {
      console.log(error);
      alert(error);
      return null;
    }
  }

  const UploadImage = async (file, signedResponse) => {
    try {
      const arrayBuffer = await file.arrayBuffer();
      console.log("arrayBuffer");
      console.log(arrayBuffer);
      const filename = file.name;

      const form = new FormData();
      for (const [key, value] of Object.entries(signedResponse.fields)) {
        form.append(key, value);
      }
      form.append('file', new Blob([arrayBuffer]), filename);

      const uploadResponse = await fetch(signedResponse.post_url, {
        method: 'POST',
        body: form,
      });
      console.log(uploadResponse);
      return uploadResponse;
    } catch (error) {
      console.log(error);
      alert(error);
      return null;
    }
  }

  /// Finish Upload image
  const finishUploadImg = async (signedRespObj) => {
    try {
      const response = await storyblok.get(`spaces/${process.env.SPACE_ID}/assets/${signedRespObj.id}/finish_upload`);
      console.log({ response });
      return { response };
    } catch (error) {
      console.log(error);
      alert(error);
      return null;
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      {/* Hidden native input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/jpeg,image/png"
        className="hidden"
      />

      {/* The Styled Button */}
      <button
        onClick={handleButtonClick}
        disabled={status === 'uploading'}
        className={`
          relative px-6 py-2 rounded-md font-bold uppercase tracking-widest text-xs transition-all duration-200
          border flex items-center gap-2
          ${status === 'uploading' 
            ? 'bg-stone-800 border-stone-700 text-stone-500 cursor-not-allowed' 
            : 'bg-amber-600 hover:bg-amber-500 border-amber-400 text-stone-950 active:scale-95 shadow-[0_4px_0_0_rgba(180,83,9,1)] active:shadow-none active:translate-y-[2px]'}
          ${status === 'success' ? 'bg-green-600 border-green-400 text-white' : ''}
          ${status === 'error' ? 'bg-red-600 border-red-400 text-white' : ''}
        `}
      >
        {/* Icon/Status Indicator */}
        {status === 'uploading' && (
          <svg className="animate-spin h-4 w-4 text-stone-500" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        
        {/* Button Text */}
        <span>
          {status === 'idle' && "Change Portrait"}
          {status === 'uploading' && "Transmuting..."}
          {status === 'success' && "Portrait Updated!"}
          {status === 'error' && "Upload Failed"}
        </span>
      </button>
    </div>
  );
}