import CodeBlock from '../components/CodeBlock'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import Footer from "../components/Footer"

function Scrape2TeX() {
    const CLIcmd = `python3 scrape2TeX.py "https://www.ourgreenway.ca/<!-PAGE!->" --out "<!- [OPTIONAL] output file, default: output.tex ->" --images "<!- [OPTIONAL] image directory, default: ./images ->" --header "<!- TYPE OF ARTICLE ->" --date "<!- [OPTIONAL] date of writing, default: today's date ->"    "`
    const installPKG = `pip install beautifulsoup4 requests`

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
          <h2 className="text-3xl font-bold text-gray-900">Scrape2TeX</h2>
          <p className="text-gray-600">Scrape2TeX is a Python to TeX based tool to automate the conversion of legacy research papers hosted on OurGreenway.ca to a mostly PDF printable format. </p>
          <h3 className="text-2xl font-bold text-gray-900">Prequisite tools</h3>
          <p className="text-gray-600">This tool requires</p>
          <ul className="list-disc pl-6">
            <li><a href="https://www.latex-project.org/get/">LaTeX (which includes XeLaTeX)</a></li>
            <li><a href="https://www.python.org/downloads/">Python</a></li>
            <li><a href="https://code.visualstudio.com/">Visual Studio Code</a> (Other IDEs may work but it is mainly built for VSCode)</li>
            <li><a href="https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop">LaTeX Workshop Visual Studio Code</a></li>
          </ul>
          <p className="text-gray-600">To use this tool, go to the GitHub Page and click the green code button. Either download the ZIP, import it via GitHub desktop, or clone with any other .git software.</p>
          <img src="Scrape2TeX1.png"></img>
          <p className="text-gray-600"> Once you got it installed, install required packages using </p>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="2xl:w-[35rem] xl:w-[25rem] lg:w-[20rem] md:w-[15rem] md:max-h-[25rem] overflow-auto">
              <CodeBlock code={installPKG} language="Command Line Interface" />
            </div>
          </div>
          
          <p>Then, follow the instructions in this video below.</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/zX78W-SeGRs?si=Ivghw2PWrn-EfXe7" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <p className="text-gray-600"> The commands templates are attached below:</p>
      </div>

        

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="2xl:w-[35rem] xl:w-[25rem] lg:w-[20rem] md:w-[15rem] md:max-h-[25rem] overflow-auto">
            <CodeBlock code={CLIcmd} language="Command Line Interface" />
          </div>
        </div>
        
        <div className ="space y-2">
        <h3 className="text-2xl font-bold text-gray-900">Web scraping algorithm</h3>
        <p className="text-gray-600">Each page's main content is between <strong><code>&lt;main&gt;</code></strong> to <strong><code>&lt;/main&gt;</code></strong>. Each research brief page <i>mostly</i> works like this:</p>
        <ul className="list-disc pl-6">
          <li><strong><code>&lt;h1&gt;</code></strong> → <code>\\titletext&#123;...&#125;</code> (Main title of the article)</li>
          <li><strong><code>&lt;h3&gt;</code></strong> with "WRITTEN BY:" → <code>\\authortext&#123;...&#125;</code> (Author name)</li>
          <li><strong><code>&lt;h3&gt;</code></strong> with "EDITED BY:" → <code>\\editedtext&#123;...&#125;</code> (Editor name)</li>
          <li><strong><code>&lt;h2&gt;</code></strong> → <code>\\section&#123;...&#125;</code> (Section subheadings)</li>
          <li><strong><code>&lt;p&gt;</code></strong> (normal paragraph) → plain LaTeX paragraph with inline links as <code>\\footnote&#123;\\url&#123;...&#125;&#125;</code></li>
          <li><strong><code>&lt;p&gt;</code></strong> starting with source indicators → put into a reference section (ie. excluded from main body)</li>
          <li><strong><code>&lt;p&gt;</code></strong> after a source indicator → rendered as reference entry under <code>\\section&#123;Sources&#125;</code></li>
          <li><strong><code>&lt;img&gt;</code></strong> → <code>\\includegraphics&#123;...&#125;</code> inside <code>\\begin&#123;figure&#125;...\\end&#123;figure&#125;</code></li>
          <li><strong><code>&lt;a&gt;</code></strong> inside <strong><code>&lt;p&gt;</code></strong> → converted to <code>\\footnote&#123;\\url&#123;...&#125;&#125;</code> if safe. Otherwise defaults as a normal paragraph.</li>
        </ul>
        </div>





        <Footer/>

      </div>
    </div>
  </div>
</div>
    )
  }
  
  export default Scrape2TeX