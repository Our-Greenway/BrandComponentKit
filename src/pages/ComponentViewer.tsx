import { useParams } from "react-router-dom"
import { useEffect, useState, useRef } from "react"
import { supabase } from "../supabase"
import CodeBlock from '../components/CodeBlock'
import HTMLPreview from '../components/HTMLPreview'

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
        <div className="max-w-7xl mx-auto xl:pl-60 lg:pl-20 md:p-50 space-y-6">
            <div className="space-y-2">
            <h2 className="text-3xl font-bold text-gray-900">{data.title}</h2>
            <p className="text-gray-600">{data.description}</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="xl:w-[45rem] lg:w-[28rem] md:max-h-[25rem] overflow-auto">
                    <CodeBlock code={data.html} language="html" />
                </div>
                <div className="xl:w-[45rem] lg:w-[28rem] md:max-h-[25rem] overflow-auto">
                    <CodeBlock code={data.css} language="css" />
                </div>
            </div>
            <div className="w-full">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Preview</h3>
                <div className="flex justify-start">
                    <HTMLPreview html={data.html_example} css={data.css} />
                </div>
            </div>
        </div>
    )
  }
  
  export default ComponentViewer