import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import { useState } from "react";
import ColourCard from "../components/ColourBlock";
import Footer from "../components/Footer";

function Brand() {
    const [hovered, setHovered] = useState<string | null>(null);
  
    return (
<div className="w-full"> 
  <div className="mx-auto max-w-10xl xl:pl-40 lg:pl-10 md:pl-10 md:p-30">
    <Topbar />
    <div className="flex flex-col lg:flex-row gap-10">
    <div className="lg:w-1/4 lg:max-w-[300px] flex-shrink-0">
        <div className="sticky top-10">
          <Sidebar />
        </div>
      </div>
      <div className="space-y-6 w-screen sm:w-auto pl-5 pr-5 break-words whitespace-normal">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-gray-900">Brand</h2>
          <h2 className="text-2xl text-gray-900">Rooted in History, Riding Toward Tomorrow</h2>
          <p>The new visual identity introduced in 2025 reflects the program's development since 2018. Since then, the organization has grown exponentially from a research lab in a university to over 10+ research briefs, 1000+ Cycling Without Age rides in Downsview Park, and connecting over 20+ communities with its Cargo Bike Showcase.</p>       
          <p>This brand aims to be more visually accessible on the web while honouring Downsview's historic place as an aviation powerhouse; the key message being to support and build a more mobility and eco-friendly Northwestern Toronto. </p>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-gray-900">Logomark</h2>
          <p>Hover over the logo’s components to learn what each one represents.</p>
        </div>
        <div className="flex flex-col items-start gap-8 p-4">
        {/* Logo Container */}
        <div className="relative group flex flex-col ">
          <div className="origin-top-left relative ">
            {/* Static greyed-out SVG  */}
            <img src="/GrayLogo.svg" alt="Static Logo" className="w-full h-auto" />

            {/* Colored interactive SVG */}
            <svg
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              viewBox="0 0 209.06 170.8"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* G  */}
              <g className={`transition-opacity duration-300 ${hovered === "G" ? "opacity-100" : "opacity-0"}`}>
                <path id="G" className="fill-[#3A5F3A]" d="M171.35,26.62c-12.32-13.04-28.4-21.83-46.38-25.17-22.42-4.16-45.12.67-63.92,13.58-18.79,12.92-31.43,32.38-35.59,54.8-.72,3.92,1.1,7.87,4.56,9.85,3.66,2.1,7.5,4.29,11.3,6.46,5.89,3.35,13.2-.44,14-7.17.22-1.87.55-3.74.97-5.61,2.92-12.96,10.56-24.47,21.36-32.21,4.23-3.04,8.8-5.39,13.57-7.09.08-.04.15-.07.24-.11,4.52-1.97,9.43-3.5,12.55-4.39h0s4.7-1.42,4.7-1.42c0,0,0,0,0,0l1.92-.58h0s6.16-1.86,6.16-1.86c6-1.8,12.46,1.14,15.03,6.84,0,0,.49,1.15.97,2.25.52,1.18,1.78,1.86,3.05,1.64l34.25-6.01c1.79-.31,2.5-2.49,1.26-3.81Z"/>
                <path id="G-2" data-name="G" className="fill-[#3A5F3A]" d="M190.07,105.96c-4.86.09-9.67-1.14-13.99-3.62-1.53-.88-2.96-1.89-4.26-3.02-1.72-1.48-4.09-1.96-6.23-1.21l-.07.02c-1.86.65-3.31,2.15-3.87,4.05-.7,2.36-1.54,4.67-2.43,6.85v45.68c1.83-1.32,3.63-2.68,5.34-4.12v13.86c0,3.46,2.8,6.26,6.26,6.26h17.69c3.46,0,6.26-2.8,6.26-6.26v-53.87c0-2.58-2.11-4.67-4.69-4.62Z"/>
                <path id="Wave" className="fill-[#3A5F3A]" d="M159.22,109.03c-1.95,4.8-4.11,8.94-5.55,11.51-.23.52-.49,1.02-.8,1.51-3.07,4.91-9.55,14.47-18.43,23.42l-.15.15c-.28.26-6.84,6.49-15.78,11.87-8.92,5.37-19.14,8.21-29.57,8.21h-.09c-.2,0-.4,0-.6,0-1.39,0-1.65,1.98-.3,2.32,1.95.5,3.92.94,5.91,1.31,5.25.97,10.51,1.45,15.74,1.45,17.1,0,33.78-5.15,48.18-15.04.49-.34.96-.7,1.45-1.05v-45.68Z"/>
              </g>

              {/* Wave  */}
              <g className={`transition-opacity duration-300 ${hovered === "Wave" ? "opacity-100" : "opacity-0"}`}>
                <path id="Wave" className="fill-[#3A5F3A]" d="M159.22,109.03c-1.95,4.8-4.11,8.94-5.55,11.51-.23.52-.49,1.02-.8,1.51-3.07,4.91-9.55,14.47-18.43,23.42l-.15.15c-.28.26-6.84,6.49-15.78,11.87-8.92,5.37-19.14,8.21-29.57,8.21h-.09c-.2,0-.4,0-.6,0-1.39,0-1.65,1.98-.3,2.32,1.95.5,3.92.94,5.91,1.31,5.25.97,10.51,1.45,15.74,1.45,17.1,0,33.78-5.15,48.18-15.04.49-.34.96-.7,1.45-1.05v-45.68Z"/>
                <path id="Wave-2" data-name="Wave" className="fill-[#007ACC]" d="M138.41,107.68c-.15,0-.3,0-.45.01-9.87.7-15.91,2.66-21.78,4.57-4.01,1.3-7.54,2.67-12.42,3.58-8.04,2.83-16.18,1.9-22.72.02v9.96c2.66.59,5.38.96,8.03.96.4,0,2.73.29,3.11.21,14.42-.08,19.91-2.84,27.1-5.18,4.57-1.49,8.98-2.92,15.34-3.71-5.13,7.3-13.71,17.96-24.05,24.79-4.21,2.78-9.07,4.4-14.1,4.78-2.28.17-4.8.27-7.63.27s-5.46-.1-7.79-.28v10.07c2.36.16,4.94.25,7.79.25h.09c9.01,0,17.87-2.46,25.59-7.11,8.31-5,14.43-10.84,14.43-10.84,8.34-8.41,14.45-17.43,17.36-22.08.23-.36.4-.76.5-1.18.52-2.19,1.29-8.83-8.4-9.09Z"/>
              </g>

              {/* Wing  */}
              <g className={`transition-opacity duration-300 ${hovered === "Wing" ? "opacity-100" : "opacity-0"}`}>
                <path id="Wing" className="fill-[#007ACC]" d="M81.05,147.65c-8.37-.65-13.54-2.31-18.92-4.06-2.49-.81-5.21-1.86-8.04-2.6-.22-.11-.45-.2-.68-.28-7.78-2.47-13.21-8.02-16.17-11.82,4,1.16,8.74,2.38,13.01,3.08.52.08.7-.66.2-.83-4.91-1.7-7.96-2.25-17.56-8-.09-.06-.18-.11-.26-.16-.03-.02-.05-.03-.08-.05h0c-.14-.08-.29-.15-.44-.22-11.25-4.76-10.9-9.93-10.55-11.37,4.01,1.56,14.32,5.37,22.22,6.61.5.08.7-.62.23-.82-4.65-1.93-13.13-5.63-23.91-12.09-.35-.24-.72-.45-1.12-.61-9.51-4.01-9.23-8.23-8.76-15.23,0-.14.02-.28.03-.42,17.96,10.49,50.39,28.71,51.68,29.44.84.49,9.53,5.46,19.13,7.6v-9.96c-8.02-2.31-13.62-6.06-13.62-6.06-.29-.16-.45-.26-.47-.26-.03-.02-.06-.03-.08-.05-.36-.2-35.96-20.2-53.55-30.53-2.61-1.53-5.76-1.57-8.43-.11-2.73,1.49-4.44,4.23-4.56,7.32-.03.76-.08,1.55-.14,2.38-.45,6.71-1.1,16.56,11.22,23.38-.06,1.78.17,3.93,1.08,6.25,2.06,5.32,6.82,9.72,14.15,13.11,2.44,3.88,9.59,13.73,21.82,18.34.81.3,2.16.7,2.98.93.31.09.62.2.93.31,2.33.88,3.55,1.27,6.66,2.28,5.92,1.92,12.01,3.9,22.02,4.58v-10.07Z"/>
                <path id="Wave-2" data-name="Wave" className="fill-[#007ACC]" d="M138.41,107.68c-.15,0-.3,0-.45.01-9.87.7-15.91,2.66-21.78,4.57-4.01,1.3-7.54,2.67-12.42,3.58-8.04,2.83-16.18,1.9-22.72.02v9.96c2.66.59,5.38.96,8.03.96.4,0,2.73.29,3.11.21,14.42-.08,19.91-2.84,27.1-5.18,4.57-1.49,8.98-2.92,15.34-3.71-5.13,7.3-13.71,17.96-24.05,24.79-4.21,2.78-9.07,4.4-14.1,4.78-2.28.17-4.8.27-7.63.27s-5.46-.1-7.79-.28v10.07c2.36.16,4.94.25,7.79.25h.09c9.01,0,17.87-2.46,25.59-7.11,8.31-5,14.43-10.84,14.43-10.84,8.34-8.41,14.45-17.43,17.36-22.08.23-.36.4-.76.5-1.18.52-2.19,1.29-8.83-8.4-9.09Z"/>
              </g>
                  
              {/* Bike  */}
              <g className={`transition-opacity duration-300 ${hovered === "Bike" ? "opacity-100" : "opacity-0"}`}>
                <path id="Bike" className="fill-[#212121]" d="M81.55,87.96s-.01,0-.02,0c-9.67,2.62-15.66,12.15-14.1,21.83-.13-.07-.24-.13-.31-.18,2.93,4.26,15.69,19.71,38.62,5.81-.63.14-1.28.28-1.96.41,1.51-2.85,2.33-6.07,2.28-9.4l13.85-3.74,25.88-6.99s0,0,0,0c.2-.05.39-.12.58-.2l12.33-3.34c5.12-1.39,9.48-3.24,13.22-5.38,1.66,3.71,4.44,6.79,8.03,8.85,4.5,2.59,9.74,3.27,14.75,1.91,0,0,.02,0,.02,0,5-1.36,9.18-4.58,11.76-9.07,2.95-5.14,3.42-11.23,1.22-16.86-1.25-3.2-3.37-6.03-6.09-8.14-2.67-2.07-5.71-3.37-8.87-3.88,1.9-7.26,1.52-12.83,1.5-13.13-.02-.3-.07-.61-.15-.9-1.69-6.24-7.78-10.12-14.15-9l-50.78,8.85-4.37-9.68c-.99-2.19-3.44-3.31-5.75-2.61l-7.93,2.39c-2.44.74-4.02,3.22-3.44,5.71.63,2.73,3.41,4.31,6.05,3.52l4.06-1.22,18.51,40.96c-8.32,1.82-17.02.66-25.9-3.45-6.56-3.04-11.01-6.74-11.91-7.53l-5.62-6.42c.45-.27.87-.52,1.25-.76.47-.29,1.1-.69,1.39-.82,2.5-.49,4.2-2.87,3.81-5.42-.4-2.62-2.84-4.42-5.46-4.02-1.86.28-3.36,1.22-4.81,2.12-1.22.76-2.48,1.54-3.97,1.97-.02,0-.04.01-.06.02-2,.54-5.5.17-7.27-.2-2.59-.55-5.13,1.1-5.68,3.69-.55,2.59,1.1,5.13,3.69,5.69.48.1,3.52.72,6.97.67l4.71,5.37-4.79,12.32c-.36.08-.72.16-1.07.26ZM180,80.9c4.22-3.85,7.14-8.04,9.17-11.96,0,0,0,0,0,0,1.86-.09,3.71.35,5.37,1.3,2.85,1.64,4.69,4.55,4.93,7.95.09,1.23-.07,2.47-.47,3.64-1.1,3.24-3.62,5.59-6.8,6.45h-.01c-1.59.43-3.27.51-4.86.1-3.8-.98-6.52-3.84-7.33-7.48,0,0,0,0,0,0ZM94.8,82.84c4.07,3.06,12,8.18,22.18,10.65-.15.06-.3.13-.44.2l-12.99,3.51c-2.41-4.27-6.33-7.42-10.86-8.92l2.12-5.44ZM94.12,100.25c4.86,6.13,1.64,14.2-4.93,15.98,0,0,0,0-.01,0-.93.25-1.87.36-2.79.34-.88-.1-1.77-.25-2.67-.43-3.14-.97-5.73-3.49-6.63-6.9-1.4-5.28,1.93-10.67,7.21-12.1,3.6-.97,7.51.19,9.83,3.11Z"/>
              </g>
            </svg>

            {/* Hover Areas */}
            <div className="absolute top-0 left-0 w-full h-full z-10">
              <svg viewBox="0 0 209.06 170.8" className="absolute inset-0 w-full h-full">
                <path d="M171.35,26.62c-12.32-13.04-28.4-21.83-46.38-25.17-22.42-4.16-45.12.67-63.92,13.58-18.79,12.92-31.43,32.38-35.59,54.8-.72,3.92,1.1,7.87,4.56,9.85,3.66,2.1,7.5,4.29,11.3,6.46,5.89,3.35,13.2-.44,14-7.17.22-1.87.55-3.74.97-5.61,2.92-12.96,10.56-24.47,21.36-32.21,4.23-3.04,8.8-5.39,13.57-7.09.08-.04.15-.07.24-.11,4.52-1.97,9.43-3.5,12.55-4.39h0s4.7-1.42,4.7-1.42c0,0,0,0,0,0l1.92-.58h0s6.16-1.86,6.16-1.86c6-1.8,12.46,1.14,15.03,6.84,0,0,.49,1.15.97,2.25.52,1.18,1.78,1.86,3.05,1.64l34.25-6.01c1.79-.31,2.5-2.49,1.26-3.81Z" className="fill-transparent hover:cursor-pointer" onMouseEnter={() => setHovered("G")} onMouseLeave={() => setHovered(null)} />
                <path d="M190.07,105.96c-4.86.09-9.67-1.14-13.99-3.62-1.53-.88-2.96-1.89-4.26-3.02-1.72-1.48-4.09-1.96-6.23-1.21l-.07.02c-1.86.65-3.31,2.15-3.87,4.05-.7,2.36-1.54,4.67-2.43,6.85v45.68c1.83-1.32,3.63-2.68,5.34-4.12v13.86c0,3.46,2.8,6.26,6.26,6.26h17.69c3.46,0,6.26-2.8,6.26-6.26v-53.87c0-2.58-2.11-4.67-4.69-4.62Z" className="fill-transparent hover:cursor-pointer" onMouseEnter={() => setHovered("G")} onMouseLeave={() => setHovered(null)} />
                <path d="M159.22,109.03c-1.95,4.8-4.11,8.94-5.55,11.51-.23.52-.49,1.02-.8,1.51-3.07,4.91-9.55,14.47-18.43,23.42l-.15.15c-.28.26-6.84,6.49-15.78,11.87-8.92,5.37-19.14,8.21-29.57,8.21h-.09c-.2,0-.4,0-.6,0-1.39,0-1.65,1.98-.3,2.32,1.95.5,3.92.94,5.91,1.31,5.25.97,10.51,1.45,15.74,1.45,17.1,0,33.78-5.15,48.18-15.04.49-.34.96-.7,1.45-1.05v-45.68Z" className="fill-transparent hover:cursor-pointer" onMouseEnter={() => setHovered("Wave")} onMouseLeave={() => setHovered(null)} />
                <path d="M138.41,107.68c-.15,0-.3,0-.45.01-9.87.7-15.91,2.66-21.78,4.57-4.01,1.3-7.54,2.67-12.42,3.58-8.04,2.83-16.18,1.9-22.72.02v9.96c2.66.59,5.38.96,8.03.96.4,0,2.73.29,3.11.21,14.42-.08,19.91-2.84,27.1-5.18,4.57-1.49,8.98-2.92,15.34-3.71-5.13,7.3-13.71,17.96-24.05,24.79-4.21,2.78-9.07,4.4-14.1,4.78-2.28.17-4.8.27-7.63.27s-5.46-.1-7.79-.28v10.07c2.36.16,4.94.25,7.79.25h.09c9.01,0,17.87-2.46,25.59-7.11,8.31-5,14.43-10.84,14.43-10.84,8.34-8.41,14.45-17.43,17.36-22.08.23-.36.4-.76.5-1.18.52-2.19,1.29-8.83-8.4-9.09Z" className="fill-transparent hover:cursor-pointer" onMouseEnter={() => setHovered("Wave")} onMouseLeave={() => setHovered(null)} />
                <path d="M81.05,147.65c-8.37-.65-13.54-2.31-18.92-4.06-2.49-.81-5.21-1.86-8.04-2.6-.22-.11-.45-.2-.68-.28-7.78-2.47-13.21-8.02-16.17-11.82,4,1.16,8.74,2.38,13.01,3.08.52.08.7-.66.2-.83-4.91-1.7-7.96-2.25-17.56-8-.09-.06-.18-.11-.26-.16-.03-.02-.05-.03-.08-.05h0c-.14-.08-.29-.15-.44-.22-11.25-4.76-10.9-9.93-10.55-11.37,4.01,1.56,14.32,5.37,22.22,6.61.5.08.7-.62.23-.82-4.65-1.93-13.13-5.63-23.91-12.09-.35-.24-.72-.45-1.12-.61-9.51-4.01-9.23-8.23-8.76-15.23,0-.14.02-.28.03-.42,17.96,10.49,50.39,28.71,51.68,29.44.84.49,9.53,5.46,19.13,7.6v-9.96c-8.02-2.31-13.62-6.06-13.62-6.06-.29-.16-.45-.26-.47-.26-.03-.02-.06-.03-.08-.05-.36-.2-35.96-20.2-53.55-30.53-2.61-1.53-5.76-1.57-8.43-.11-2.73,1.49-4.44,4.23-4.56,7.32-.03.76-.08,1.55-.14,2.38-.45,6.71-1.1,16.56,11.22,23.38-.06,1.78.17,3.93,1.08,6.25,2.06,5.32,6.82,9.72,14.15,13.11,2.44,3.88,9.59,13.73,21.82,18.34.81.3,2.16.7,2.98.93.31.09.62.2.93.31,2.33.88,3.55,1.27,6.66,2.28,5.92,1.92,12.01,3.9,22.02,4.58v-10.07Z" className="fill-transparent hover:cursor-pointer" onMouseEnter={() => setHovered("Wing")} onMouseLeave={() => setHovered(null)} />
                <path d="M81.55,87.96s-.01,0-.02,0c-9.67,2.62-15.66,12.15-14.1,21.83-.13-.07-.24-.13-.31-.18,2.93,4.26,15.69,19.71,38.62,5.81-.63.14-1.28.28-1.96.41,1.51-2.85,2.33-6.07,2.28-9.4l13.85-3.74,25.88-6.99s0,0,0,0c.2-.05.39-.12.58-.2l12.33-3.34c5.12-1.39,9.48-3.24,13.22-5.38,1.66,3.71,4.44,6.79,8.03,8.85,4.5,2.59,9.74,3.27,14.75,1.91,0,0,.02,0,.02,0,5-1.36,9.18-4.58,11.76-9.07,2.95-5.14,3.42-11.23,1.22-16.86-1.25-3.2-3.37-6.03-6.09-8.14-2.67-2.07-5.71-3.37-8.87-3.88,1.9-7.26,1.52-12.83,1.5-13.13-.02-.3-.07-.61-.15-.9-1.69-6.24-7.78-10.12-14.15-9l-50.78,8.85-4.37-9.68c-.99-2.19-3.44-3.31-5.75-2.61l-7.93,2.39c-2.44.74-4.02,3.22-3.44,5.71.63,2.73,3.41,4.31,6.05,3.52l4.06-1.22,18.51,40.96c-8.32,1.82-17.02.66-25.9-3.45-6.56-3.04-11.01-6.74-11.91-7.53l-5.62-6.42c.45-.27.87-.52,1.25-.76.47-.29,1.1-.69,1.39-.82,2.5-.49,4.2-2.87,3.81-5.42-.4-2.62-2.84-4.42-5.46-4.02-1.86.28-3.36,1.22-4.81,2.12-1.22.76-2.48,1.54-3.97,1.97-.02,0-.04.01-.06.02-2,.54-5.5.17-7.27-.2-2.59-.55-5.13,1.1-5.68,3.69-.55,2.59,1.1,5.13,3.69,5.69.48.1,3.52.72,6.97.67l4.71,5.37-4.79,12.32c-.36.08-.72.16-1.07.26Z" className="fill-transparent hover:cursor-pointer" onMouseEnter={() => setHovered("Bike")} onMouseLeave={() => setHovered(null)} />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Info Section */}
        <div className="lg:mt-0 mt-8 relative min-h-[120px] w-full  flex flex-row gap-4">
          <div className="flex flex-col gap-4">
          {/* G */}
          <div className={`transition-all duration-300 p-4 rounded-lg shadow-lg cursor-pointer ${
            hovered === "G" 
              ? "bg-white border-2 border-[#007ACC]" 
              : "bg-gray-100 border-2 border-gray-300"
          }`}
          onMouseEnter={() => setHovered("G")}
          onMouseLeave={() => setHovered(null)}>
            <h2 className={`font-bold text-lg mb-2 transition-colors duration-300 ${
              hovered === "G" ? "text-[#007ACC]" : "text-gray-500"
            }`}>"G" Shape</h2>
            <p className={`transition-colors duration-300 ${
              hovered === "G" ? "text-gray-700" : "text-gray-400"
            }`}>
              Identifies us as a Greenway. Symbolizes the continuous flow of nature and the interconnected pathways that bind our communities together.
            </p>
          </div>

          {/* Wave */}
          <div className={`transition-all duration-300 p-4 rounded-lg shadow-lg cursor-pointer ${
            hovered === "Wave" 
              ? "bg-white border-2 border-[#007ACC]" 
              : "bg-gray-100 border-2 border-gray-300"
          }`}
          onMouseEnter={() => setHovered("Wave")}
          onMouseLeave={() => setHovered(null)}>
            <h2 className={`font-bold text-lg mb-2 transition-colors duration-300 ${
              hovered === "Wave" ? "text-[#007ACC]" : "text-gray-500"
            }`}>Wave</h2>
            <p className={`transition-colors duration-300 ${
              hovered === "Wave" ? "text-gray-700" : "text-gray-400"
            }`}>
              Highlights the secondary role of watersheds and rivers in a greenway, caputring the dynamic movement of water systems that are vital to our ecosystem.
            </p>
          </div>
          </div>

          <div className="flex flex-col gap-4">
          {/* Wing */}
          <div className={`transition-all duration-300 p-4 rounded-lg shadow-lg cursor-pointer ${
            hovered === "Wing" 
              ? "bg-white border-2 border-[#007ACC]" 
              : "bg-gray-100 border-2 border-gray-300"
          }`}
          onMouseEnter={() => setHovered("Wing")}
          onMouseLeave={() => setHovered(null)}>
            <h2 className={`font-bold text-lg mb-2 transition-colors duration-300 ${
              hovered === "Wing" ? "text-[#007ACC]" : "text-gray-500"
            }`}>Wing</h2>
            <p className={`transition-colors duration-300 ${
              hovered === "Wing" ? "text-gray-700" : "text-gray-400"
            }`}>
              Symbolizes moblity freedom and Downsview’s past as a Royal Canadian Air Force base & De Havilland Canada’s manufacturing base.
            </p>
          </div>

          {/* Bicycle */}
          <div className={`transition-all duration-300 p-4 rounded-lg shadow-lg cursor-pointer ${
            hovered === "Bike" 
              ? "bg-white border-2 border-[#007ACC]" 
              : "bg-gray-100 border-2 border-gray-300"
          }`}
          onMouseEnter={() => setHovered("Bike")}
          onMouseLeave={() => setHovered(null)}>
            <h2 className={`font-bold text-lg mb-2 transition-colors duration-300 ${
              hovered === "Bike" ? "text-[#007ACC]" : "text-gray-500"
            }`}>Cargo Bike</h2>
            <p className={`transition-colors duration-300 ${
              hovered === "Bike" ? "text-gray-700" : "text-gray-400"
            }`}>
              Represents sustainable transportation and recreation. The bike element emphasizes our commitment to creating pathways for active, eco-friendly community engagement.
            </p>
          </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
          <h2 className="text-3xl font-bold text-gray-900">Colours</h2>
          <p>The new brand still retains Our Greenway's previous blue and green colour scheme, however are slightly adjusted to increase reading accessibility on the web. These colours (tested with white on <a href="https://webaim.org/resources/contrastchecker/">Web Accessibility In Mind's calculator</a>) all pass Web Content Accessibility Guidelines (WCAG) AA for normal text and WCAG AAA for large text.</p>
        </div>

      <ColourCard
        label="Primary"
        hex="#3A5F3A"
        cymk="76%, 40%, 86%, 33%"
        contrast="7.29:1"
      />
      <div className="flex flex-col md:flex-row gap-4 ">
      <ColourCard
        label="Secondary"
        hex="#007ACC"
        cymk="83%, 47%, 0%, 0%"
        contrast="4.51:1"
      />
      <ColourCard
        label="Secondary"
        hex="#212121"
        cymk="72%, 66%, 65%, 73%"
        contrast="16.1:1:1"
      />
      </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-gray-900">Typeface</h2>
          <h2 className="text-2xl text-gray-900">DM Sans</h2>
          <p>This font will be used for both headings and paragraph usecases. It is licensed under <a href="https://openfontlicense.org/open-font-license-official-text/">SIL Open Font License</a>. For Adobe Illustrator usecases, set tracking to -25.</p>       
          <h3 className="pt-2">
            <a href="https://fonts.google.com/specimen/DM+Sans" className="bg-gray-300 hover:bg-gray-400 text-lg font-medium px-6 py-2 rounded transition">
            <strong className="text-black">Download this font on Google Fonts</strong>
            </a>
            </h3>
        </div>
        <Footer/>
    </div>
    </div>
    </div>
    </div>
    )
  }
  
  export default Brand