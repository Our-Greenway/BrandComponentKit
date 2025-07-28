import { useParams } from "react-router-dom"
import { useEffect, useState, useRef } from "react"
import { supabase } from "../supabase"
import CodeBlock from '../components/CodeBlock'
import HTMLPreview from '../components/HTMLPreview'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

function ComponentViewer() {
    const { id } = useParams<{ id: string }>()
    const [data, setData] = useState<any>(null)
  
    useEffect(() => {
      if (!id) return
      supabase
        .from("brandkit")
        .select("*")
        .eq("id", Number(id))
        .single()
        .then(({ data, error }) => {
          if (error) console.error(error)
          else setData(data)
        })
    }, [id])
  
    if (!data) return (
      <div className="flex items-center justify-center min-h-64">
        <div className="text-gray-600">Loading</div>
      </div>
    )
  
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
          <h2 className="text-3xl font-bold text-gray-900">{data.title}</h2>
          <p className="text-gray-600">{data.description}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="2xl:w-[35rem] xl:w-[25rem] lg:w-[20rem] md:w-[15rem] md:max-h-[25rem] overflow-auto">
            <CodeBlock code={data.html} language="html" />
          </div>
          <div className="2xl:w-[35rem] xl:w-[25rem] lg:w-[20rem] md:w-[15rem] md:max-h-[25rem] overflow-auto">
            <CodeBlock code={data.css} language="css" />
          </div>
        </div>

        <div className="2xl:w-[70rem] xl:w-[50rem] lg:w-[40rem] md:w-[15rem] md:max-h-[25rem]">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Preview</h3>
          <div className="flex justify-start">
            <HTMLPreview html={data.html_example} css={data.css} />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
  }
  
  export default ComponentViewer