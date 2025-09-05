import CodeBlock from '../components/CodeBlock'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import Footer from "../components/Footer"

function Mapping() {
    const cartoDB = `L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://carto.com/attributions">CartoDB</a>',
      }).addTo(map);`
   const downsviewPark = `&lt;iframe src="https://downsview-cwa.vercel.app" width="100%" height="600" style="border: none;" title="Downsview CWA Map"&gt;&lt;/iframe&gt;`
    const greenwayVision = `&lt;iframe src="https://greenway-map.vercel.app/" width="100%" height="600" style="border: none;" title="Greenway Vision Map"&gt;&lt;/iframe&gt;`


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
          <h2 className="text-3xl font-bold text-gray-900">Maps</h2>
          <p className="text-gray-600">Various interactive maps were introduced to be used in a website setting using <a href="https://leafletjs.com/">Leaflet </a> and JavaScript. To embed maps, use the appropriate <code>iframe</code> tag.  </p>
          <p>Leaflet maps are often in the CartoDB "light-all" standard; the code snippet is attached below</p>


        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="2xl:w-[35rem] xl:w-[25rem] lg:w-[20rem] md:w-[15rem] md:max-h-[25rem] overflow-auto">
            <CodeBlock code={cartoDB} language="JS" />
          </div>
        </div>


        <div className="space-y-2">
          <h2 className="text-2xl text-gray-900">Greenway Vision Map</h2>
          <p className="text-gray-600"> A map showing the vision of Finch West with mobility greenways. GitHub repository <a href="https://github.com/Our-Greenway/GreenwayMap">here</a>. </p>
          

        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="2xl:w-[35rem] xl:w-[25rem] lg:w-[20rem] md:w-[15rem] md:max-h-[25rem] overflow-auto">
            <CodeBlock code={greenwayVision} language="HTML" />
          </div>
        </div>

        <iframe src="https://greenway-map.vercel.app/" width="100%" height="600" title="Greenway Vision Map"></iframe>
        


        <div className="space-y-2">
          <h2 className="text-2xl text-gray-900">Downsview Park Cycling Without Age Map</h2>
          <p className="text-gray-600"> A map showing the attractions at Downsview Park during Cycling Without Age rides. GitHub repository <a href="https://github.com/Our-Greenway/DownsviewCWA">here</a>. </p>
          

        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="2xl:w-[35rem] xl:w-[25rem] lg:w-[20rem] md:w-[15rem] md:max-h-[25rem] overflow-auto">
            <CodeBlock code={downsviewPark} language="HTML" />
          </div>
        </div>

        <iframe src="https://downsview-cwa.vercel.app" width="100%" height="600" title="Downsview CWA Map"></iframe>
        



        <Footer/>

      </div>
    </div>
  </div>
</div>
    )
  }
  
  export default Mapping