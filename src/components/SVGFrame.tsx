import { useState, useEffect } from 'react';
const SVGFrameViewer = ({ svgPaths = [] }: { svgPaths?: string[] }) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [svgContents, setSvgContents] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSVGs = async () => {
      if (!svgPaths.length) return;
      setLoading(true);
      try {
        const contents = await Promise.all(
          svgPaths.map(path => fetch(path).then(r => r.text()))
        );
        const scaledContents = contents.map(content => 
          content.replace('<svg', '<svg style="max-width: 100%; max-height: 100%; width: 100%; height: auto; object-fit: contain;"')
        );
        setSvgContents(scaledContents);
      } catch (error) {
        console.error('Error loading SVGs:', error);
      }
      setLoading(false);
    };
    loadSVGs();
  }, [svgPaths]);

  if (!svgPaths.length) return <div className="p-8 text-center">No frames</div>;
  if (loading) return <div className="p-8 text-center">Loading frames...</div>;

  return (
    <div className="w-full max-w-2xlborder rounded">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      <div className="bg-gray-50 w-full overflow-auto p-2" style={{ minHeight: '300px' }}>
        <div className="w-full h-full flex items-start justify-center">
          <div dangerouslySetInnerHTML={{ __html: svgContents[currentFrame] }} />
        </div>
      </div>
      <div className="p-4 bg-white border-t">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => setCurrentFrame(Math.max(0, currentFrame - 1))} disabled={currentFrame === 0} className="p-2 border rounded hover:bg-gray-100 disabled:opacity-50"><i className="fas fa-chevron-left"></i></button>
          <button onClick={() => setCurrentFrame(Math.min(svgContents.length - 1, currentFrame + 1))} disabled={currentFrame === svgContents.length - 1} className="p-2 border rounded hover:bg-gray-100 disabled:opacity-50"><i className="fas fa-chevron-right"></i></button>
          <span className="text-sm">{currentFrame + 1} / {svgContents.length}</span>
        </div>
        <input type="range" min="0" max={svgContents.length - 1} value={currentFrame} onChange={e => setCurrentFrame(parseInt(e.target.value))} className="w-full" style={{accentColor: '#3A5F3A'}}/>
      </div>
    </div>
  );
};
  
export default SVGFrameViewer;