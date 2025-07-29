import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import Footer from "../components/Footer";
import ImageButton from "../components/ImageButton";
function Home() {
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
      <div className="flex-1 space-y-6 px-4 sm:px-6">

          <div className="relative w-full h-[400px]">
            <img src="HomeBanner.jpg" alt="Logo sketches" className="w-full h-full object-cover rounded-xl" />

            <div className="absolute top-10 left-10 bg-[#3A5F3A] text-white p-6 rounded-xl max-w-xl">
              <p className="text-3xl font-semibold">
                Guiding the Look, Feel, and Future of
              </p>
              <p className="text-4xl font-bold mt-1">
                Our Greenway
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <p>This website contains a repository of our brand guidelines, assets, and components to ensure consistency and accessibility between our projects and programs.</p>
            <div className ="pt-8">
              <div className="flex flex-col md:flex-row gap-4">
                <ImageButton image="LogoDevelopment.jpg" bgColour= "#3A5F3A" name= "Brand" link="/brand"/>
                <ImageButton image="WingBackground.svg" bgColour= "#212121" name= "Assets" link="/assets"/>
                <ImageButton image="NationbuilderCover.jpg" bgColour= "#007ACC" name= "Nationbuilder Components" link="/assets"/>
              </div>
            </div>
        </div>
        <Footer/>
        
    </div>
    </div>
    </div>
    </div>
    )
  }
  
  export default Home