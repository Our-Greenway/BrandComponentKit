import React from 'react';
import { useParams } from "react-router-dom"
import { useEffect, useState, useRef } from "react"
import { supabase } from "../supabase"
import FileDownload from "../components/FileDownload";
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

function AssetViewer() {
  
    return (
<div className="w-full overflow-x-hidden">
  <div className="mx-auto max-w-10xl xl:pl-40 lg:pl-10 md:pl-10 md:p-30">
    <Topbar />
    <div className="flex flex-col lg:flex-row gap-10">
      <div className="mr-5">
        <Sidebar />
      </div>
      <div className="space-y-6 pl-5 pr-5">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-gray-900">Assets</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-5 pb-5">
            <FileDownload fileName="OurGreenwayCombinationMarkHorizontal" bgColour="#FFFFFF" header="Horizontal Combination Mark, Colour"/>
            <FileDownload fileName="OurGreenwayCombinationMarkHorizontalWhite" bgColour="#3a5f3a" header="Horizontal Combination Mark, White"/>
        </div>
        <div className="flex flex-col md:flex-row gap-5 pb-5">
            <FileDownload fileName="OurGreenwayCombinationMarkVertical" bgColour="#FFFFFF" header="Vertical Combination Mark, Colour"/>
            <FileDownload fileName="OurGreenwayCombinationMarkVerticalWhite" bgColour="#3a5f3a" header="Vertical Combination Mark, White"/>
        </div>
        
        
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-gray-900 pt-5">Secondary Assets</h2>
          <p>These logos are intended for use only after the combination mark appears. Avoid using secondary logos as standalone primary branding.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 pb-5">
            <FileDownload fileName="OurGreenwayIcon" bgColour="#FFFFFF" header="Icon, Colour"/>
            <FileDownload fileName="OurGreenwayIconWhite" bgColour="#3a5f3a" header="Icon, White"/>
        </div>
        <div className="flex flex-col md:flex-row gap-5 pb-5">
            <FileDownload fileName="OurGreenwayWordmark" bgColour="#FFFFFF" header="Wordmark, Colour"/>
            <FileDownload fileName="OurGreenwayWordmarkWhite" bgColour="#3a5f3a" header="Wordmark, White"/>
        </div>
        <div className="flex flex-col md:flex-row gap-5 pb-5">
            <FileDownload fileName="OurGreenwayWordmarkCentre" bgColour="#FFFFFF" header="Centre Aligned Wordmark, Colour"/>
            <FileDownload fileName="OurGreenwayWordmarkCentreWhite" bgColour="#3a5f3a" header="Centre Aligned  Wordmark, White"/>
        </div>
        <div className="flex flex-col md:flex-row gap-5 pb-5">
            <FileDownload fileName="OurGreenwayWordmarkSingle" bgColour="#FFFFFF" header="Single Lined Wordmark, Colour"/>
        </div>
        <div className="flex flex-col md:flex-row gap-5 pb-5">
            <FileDownload fileName="OurGreenwayWordmarkSingleWhite" bgColour="#3a5f3a" header="Single Lined Wordmark, White"/>
        </div>

        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-gray-900 pt-5">Programs</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-5 pb-5">
            <FileDownload fileName="OurGreenwayCWA" bgColour="#FFFFFF" header="Cycling Without Age Logo, Colour"/>
            <FileDownload fileName="OurGreenwayCWAWhite" bgColour="#3a5f3a" header="Cycling Without Age Logo, White"/>
        </div>
      </div>
    </div>
  </div>
</div>
    )
  }
  
  export default AssetViewer