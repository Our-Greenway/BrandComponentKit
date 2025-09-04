import CodeBlock from '../components/CodeBlock'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import Footer from "../components/Footer"

function Nationbuilder() {

  const htmlStarter = `<div class="inner-block">
    <div style="position: relative; width: 100%; max-width: 1000px; margin: auto;">
        <!-- HTML Code -->
    </div>
  </div>`

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
          <h2 className="text-3xl font-bold text-gray-900">Nationbuilder</h2>
          <p className="text-gray-600">We will mainly be using Nationbuilder's template feature, which borrows syntax from Shopify's <a href="https://shopify.github.io/liquid/">Liquid language</a> (which therein is based off standard HTML/CSS/JS). This can be found through </p>
          <img src="NationbuilderTemplate.png"></img>
          <p> Any CSS styles should start with the <code>&lt;style&gt;</code> tag and end with the <code>&lt;/style&gt;</code> tag. Then, paste in the HTML code (one on the left). Additionally, some other components may feature a JavaScript file. Simply copy and paste it (like you did with the CSS and HTML) at the bottom. Enclose it with the <code>&lt;script&gt;</code> tag and end with <code>&lt;/script&gt;</code>.  </p>
       </div>


        <div className="flex flex-col lg:flex-row gap-4">
          <div className="2xl:w-[35rem] xl:w-[25rem] lg:w-[20rem] md:w-[15rem] md:max-h-[25rem] overflow-auto">
            <CodeBlock code={htmlStarter} language="html" />
          </div>
        </div>
        

        <div className="space-y-2">
          <p>Normally content from the FAQ / Content page will not show. To extract content from there, click on the "Source code" button here</p>
          <img src="SourceCode1.png"></img>
          <img src="SourceCode2.png"></img>
          <p>Copy what you see here in the HTML portion. Feel free to extract other tools from this kit. <b>Place anything labeled "HTML" in the div part; anything labeled "CSS" should be between a <code>&lt;style&gt;</code>  tag.</b></p>
        </div>

        <Footer/>

      </div>
    </div>
  </div>
</div>
    )
  }
  
  export default Nationbuilder