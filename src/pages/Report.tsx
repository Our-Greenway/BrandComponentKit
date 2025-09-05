import CodeBlock from '../components/CodeBlock'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import Footer from "../components/Footer"

function Report() {

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
          <h2 className="text-3xl font-bold text-gray-900">Heuristic Evaluation and Final Status Report</h2>
          <p>View the report <a href="https://drive.google.com/file/d/1Au0UoPkbvwaPJbo4Sts76s46T5gRYa3q/view?usp=sharing">here</a>.</p>
          <iframe src="https://drive.google.com/file/d/1Au0UoPkbvwaPJbo4Sts76s46T5gRYa3q/preview" 
                width="100%" 
                height="600" >
        </iframe>


        </div>



        <Footer/>

      </div>
    </div>
  </div>
</div>
    )
  }
  
  export default Report