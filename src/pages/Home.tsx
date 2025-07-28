import FileDownload from "../components/FileDownload";
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import { useState } from "react";

function Home() {
  
    return (
<div className="w-full"> 
  <div className="mx-auto max-w-10xl xl:pl-40 lg:pl-10 md:pl-10 md:p-30">
    <Topbar />
    <div className="flex flex-col lg:flex-row gap-10">
      <div className="lg:w-1/4">
        <div className="sticky top-10">
          <Sidebar />
        </div>
      </div>
      <div className="space-y-6 pl-5 pr-5">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-gray-900">Guiding the Look, Feel, and Future of Our Greenway</h2>
            <p>This website contains a repository of our brand guidelines, assets, and components to ensure consistency and accessibility between our projects and programs.</p>
        </div>
        
    </div>
    </div>
    </div>
    </div>
    )
  }
  
  export default Home