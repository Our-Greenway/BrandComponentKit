function highlightCode(code: string, lang: string): string {
  if (lang === 'html') {
    const escaped = code.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const highlighted = escaped
      .replace(/(&lt;!--.*?--&gt;)/gs, `<span class="text-gray-500">$1</span>`)
      .replace(/(&lt;\/?)([\w-]+)((?:\s+[\w-]+=(?:"[^"]*"|'[^']*')?)*)(&gt;)/g, 
        (_: string, openBracket: string, tagName: string, middle: string, closeBracket: string) => {
          const highlightedMiddle = middle.replace(/([\w-]+)=(".*?"|'.*?')/g,
            (_: string, attr: string, val: string) =>
              `<span class="text-cyan-300">${attr}</span>=<span class="text-green-400">${val}</span>`
          );
          return `<span class="text-cyan-300">${openBracket}</span><span class="text-red-300">${tagName}</span>${highlightedMiddle}<span class="text-cyan-300">${closeBracket}</span>`;
        });
    return `<pre class="text-white font-mono whitespace-pre">${highlighted}</pre>`;
  }
  
  if (lang === 'css') {
    const highlighted = code
      .replace(/(\/\*.*?\*\/)/gs, `<span class="text-gray-500">$1</span>`)
      .replace(/(@import\s+[^;]+;)/g, `<span class="text-purple-400">$1</span>`)
      .replace(/(@media\s*\([^)]+\)\s*\{)/g, `<span class="text-purple-400">$1</span>`)
      .replace(/(<\/styles>|<styles>)/g, `<span class="text-red-300">$1</span>`)
      .replace(/(\{|\})/g, `<span class="text-yellow-400">$1</span>`)
      .replace(/(;)/g, `<span class="text-white">$1</span>`);
      
    return `<pre class="text-white font-mono whitespace-pre">${highlighted}</pre>`;
  }

  if (lang === 'js') {
    const escaped = code.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    
    let highlighted = escaped;
    
    highlighted = highlighted.replace(/(\/\/.*$|\/\*[\s\S]*?\*\/)/gm, `<span class="text-gray-500">$1</span>`);
    
    highlighted = highlighted.replace(/("(?:[^"\\]|\\.)*")|('(?:[^'\\]|\\.)*')|(`(?:[^`\\]|\\.)*`)/g, (match) => {
      return match.includes('<span class="text-gray-500">') ? match : `<span class="text-green-400">${match}</span>`;
    });
    
    highlighted = highlighted.replace(/\b(?:const|let|var|if|else|for|while|do|function|return|import|from|export|default|class|extends|super|new|try|catch|finally|throw|switch|case|break|continue|typeof|instanceof|in|of|await|async|static|get|set)\b/g, (match, offset, string) => {
      const beforeMatch = string.substring(0, offset);
      const openSpans = (beforeMatch.match(/<span[^>]*>/g) || []).length;
      const closeSpans = (beforeMatch.match(/<\/span>/g) || []).length;
      
      return openSpans > closeSpans ? match : `<span class="text-purple-400">${match}</span>`;
    });
    
    highlighted = highlighted.replace(/\b([a-zA-Z_][\w]*)\s*(?=\()/g, (match, funcName, offset, string) => {
      const beforeMatch = string.substring(0, offset);
      const openSpans = (beforeMatch.match(/<span[^>]*>/g) || []).length;
      const closeSpans = (beforeMatch.match(/<\/span>/g) || []).length;
      
      return openSpans > closeSpans ? match : match.replace(funcName, `<span class="text-blue-400">${funcName}</span>`);
    });
    
    highlighted = highlighted.replace(/\b\d+(?:\.\d+)?\b/g, (match, offset, string) => {
      const beforeMatch = string.substring(0, offset);
      const openSpans = (beforeMatch.match(/<span[^>]*>/g) || []).length;
      const closeSpans = (beforeMatch.match(/<\/span>/g) || []).length;
      
      return openSpans > closeSpans ? match : `<span class="text-yellow-300">${match}</span>`;
    });
    
    highlighted = highlighted.replace(/([+\-*/%=!<>&|?:.]|==|===|!=|!==|<=|>=|&&|\|\||\.\.\.|=>)/g, (match, offset, string) => {
      const beforeMatch = string.substring(0, offset);
      const openSpans = (beforeMatch.match(/<span[^>]*>/g) || []).length;
      const closeSpans = (beforeMatch.match(/<\/span>/g) || []).length;
      
      return openSpans > closeSpans ? match : `<span class="text-pink-400">${match}</span>`;
    });
   
    return `<pre class="text-white font-mono whitespace-pre">${highlighted}</pre>`;
   }
  return `<pre class="text-white font-mono whitespace-pre">${code}</pre>`;
}

export default highlightCode;