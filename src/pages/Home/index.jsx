import React, { useState } from "react";

import { RiFileCopyLine } from "react-icons/ri";

import DropDown from "../../components/DropDown";
import Tabs from "../../components/Tabs";
import Disclosure from "../../components/Disclosure";
import RadioGroup from "../../components/RadioGroup";
import Combobox from "../../components/Combobox";
import Dialog from "../../components/Dialog";

export default function Index() {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    const copyText = "npm install @headlessui/react";
    navigator.clipboard.writeText(copyText);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-violet-400 to-indigo-600 overflow-auto">
      <h1 className="text-[50px] text-white font-bold">
        ✨Headless UI - React JS
      </h1>
      <p className="text-[15px] text-white opacity-60 font-medium mt-3">
        To get started, install Headless UI via npm
      </p>
      <p className="text-[25px] text-white font-semibold mt-3 flex items-center justify-center">
        npm install @headlessui/react
        <button onClick={copyToClipboard} className="ml-2">
          <RiFileCopyLine />
        </button>
        {isCopied && (
          <span className="text-white opacity-60 ml-2">
            Copied to clipboard!
          </span>
        )}
      </p>
      <div className="w-full grid grid-cols-3 gap-x-5 items-center justify-center px-10 mt-10">
        <DropDown />
        <Tabs />
        <Disclosure />
        <RadioGroup />
        <Combobox />
        <Dialog />
      </div>
    </div>
  );
}
