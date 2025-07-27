import React from "react";
type FileDownloadProps = {
    fileName: string;
    bgColour?: string;
    header?: string;
};

function FileDownload({ fileName, bgColour = "#FFFFFF", header}: FileDownloadProps) {
    const svgPath = `/${fileName}.svg`;
    const pngPath = `/${fileName}.png`;
    {/*
    const epsPath = `/${fileName}.eps`;
    */}
  
    return (
    <div>
        <h2 className="text-2xl font-medium text-gray-900 pb-3">{header}</h2>
        <div className="rounded-lg overflow-hidden shadow-lg border border-gray-300 bg-white">
        <div className="flex items-center justify-center p-10" style={{ backgroundColor: bgColour, borderBottom: "1px solid #ccc",}}>
            <img src={svgPath} alt="Logo" className="h-24 w-auto" />
        </div>

        <div className="flex text-black justify-around px-4 py-4 gap-4 bg-gray-100">

            <a href={svgPath} download className="bg-gray-300 hover:bg-gray-400 text-lg font-medium px-6 py-2 rounded transition">
            <h3 className="text-black"><strong>SVG</strong></h3>
            </a>
            <a href={pngPath} download className="bg-gray-300 hover:bg-gray-400 text-lg font-medium px-6 py-2 rounded transition">
            <h3 className="text-black"><strong>PNG</strong></h3>
            </a>
            {/*
            <a href={epsPath} download className="bg-gray-300 hover:bg-gray-400 text-lg font-medium px-6 py-2 rounded transition">
            <h3 className="text-black"><strong>EPS</strong></h3>
            </a>
            */}
        </div>
        </div>
    </div>
  );
}

export default FileDownload;
