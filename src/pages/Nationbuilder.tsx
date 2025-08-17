import CodeBlock from '../components/CodeBlock'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import Footer from "../components/Footer"

function Nationbuilder() {
    const boilerplate=`/* START - Our Greenway 2025 Brand Refresh Boilerplate */
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

  /* Light mode (default) */
  .navbar-buttons-theme,
  .theme-signup-block,
  .theme-connect-block,
  .theme-connect-secondary-block,
  .theme-connect-tertiary-block,
  .headline-block,
  .btn-secondary,
  .theme-secondary,
  .theme-secondary-variables {
    --bg: #3A5F3A;
    --bg-adjust: #3A5F3A;
    --bg-dark: #3A5F3A;
    --bg-medium: #3A5F3A;
    --bg-light: #3A5F3A;
    --text-light: #3A5F3A;
    --text-light-adjust: #3A5F3A;
    --accent-bg: #3A5F3A;
    --accent-bg-adjust: #3A5F3A;
    --accent-btn-bg: #3A5F3A;
    --accent-btn-bg-adjust: #3A5F3A;
    --invert-text: #3A5F3A;
    --invert-text-adjust: #3A5F3A;
    --color-text: #3A5F3A;
    --color-text-adjust: #3A5F3A;
  }

  :root {
    --link: #3A5F3A;
    --link-adjust: #3A5F3A;
    --link-light: #3A5F3A;
    --link-light-adjust: #3A5F3A;
    --emphasis: #3A5F3A;
    --emphasis-adjust: #3A5F3A;
    --banner-heading: #3A5F3A;
    --banner-subheading: #3A5F3A;
    --banner-preheading: #3A5F3A;
  }

  /* Dark mode overrides - text only */
  @media (prefers-color-scheme: dark) {
    h1, h2, h3, h4, h5, h6 {
      color: #FFFFFF !important;
    }

    a {
      color: #FFFFFF !important;
    }

    .text-primary {
      color: #FFFFFF !important;
    }

    .text-success {
      color: #FFFFFF !important;
    }
  }

  /* Other styles */
  [style*="78cc76"] {
    color: #3A5F3A !important;
    background-color: #3A5F3A !important;
    border-color: #3A5F3A !important;
  }

  [style*="8cd48b"] {
    color: #3A5F3A !important;
    background-color: #3A5F3A !important;
    border-color: #3A5F3A !important;
  }

  body, button, input, select, textarea {
    font-family: 'DM Sans', sans-serif !important;
    color: #212121;
    background-color: #FFFFFF;
  }

  h1, h2, h3, h4, h5, h6, a {
    font-family: 'DM Sans', sans-serif !important;
    color: #3A5F3A;
    text-transform: none !important;
    letter-spacing: -0.5px;
  }

  .btn-primary,
  .bg-primary,
  .text-primary {
    background-color: #3A5F3A !important;
    border-color: #3A5F3A !important;
    color: #FFFFFF !important;
  }

  .btn-info,
  .bg-info,
  .text-info {
    background-color: #007ACC !important;
    border-color: #007ACC !important;
    color: #FFFFFF !important;
  }

  .btn-success,
  .bg-success,
  .text-success {
    background-color: #3A5F3A !important;
    border-color: #3A5F3A !important;
    color: #FFFFFF !important;
  }

  .text-dark {
    color: #212121 !important;
  }

  .bg-dark {
    background-color: #212121 !important;
    color: #FFFFFF !important;
  }

  .text-light {
    color: #FFFFFF !important;
  }

  .bg-light {
    background-color: #FFFFFF !important;
    color: #212121 !important;
  }

  a {
    color: #007ACC;
    font-family: 'DM Sans', sans-serif !important;
  }

  a:hover {
    text-decoration: underline;
  }

  /* END - Our Greenway 2025 Brand Refresh Boilerplate */
  
  
  /*... other styles */
  </styles>

  `

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
      <div className="space-y-6 pl-5 pr-5">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-gray-900">Nationbuilder</h2>
          <p className="text-gray-600">We will mainly be using Nationbuilder's template feature. This can be found through </p>
          <img src="NationbuilderTemplate.png"></img>
          <p>Copy the CSS (the one on the right) first. It should start with the styles tag and end with the /styles tag. Then, paste in the HTML code (one on the left). </p>
       </div>


        <div className="flex flex-col lg:flex-row gap-4">
          <div className="2xl:w-[35rem] xl:w-[25rem] lg:w-[20rem] md:w-[15rem] md:max-h-[25rem] overflow-auto">
            <CodeBlock code={htmlStarter} language="html" />
          </div>
          <div className="2xl:w-[35rem] xl:w-[25rem] lg:w-[20rem] md:w-[15rem] md:max-h-[25rem] overflow-auto">
            <CodeBlock code={boilerplate} language="css"/>
          </div>
        </div>
        

        <div className="space-y-2">
          <p>Normally content from the FAQ / Content page will not show. To extract content from there, click on the "Source code" button here</p>
          <img src="SourceCode1.png"></img>
          <img src="SourceCode2.png"></img>
          <p>Copy what you see here in the HTML portion. Feel free to extract other tools from this kit. <b>Place anything labeled "HTML" in the div part; anything labeled "CSS" should be between a styles tag.</b></p>
        </div>

        <Footer/>

      </div>
    </div>
  </div>
</div>
    )
  }
  
  export default Nationbuilder