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
    let highlighted = code
      .replace(/(\/\*.*?\*\/)/gs, `<span class="text-gray-500">$1</span>`)
      .replace(/(@[\w-]+)/g, (match, atRule, offset) => {
        const beforeMatch = code.substring(0, offset);
        const openComment = beforeMatch.lastIndexOf('/*');
        const closeComment = beforeMatch.lastIndexOf('*/');
        
        if (openComment > closeComment) {
          return match;
        }
        return `<span class="text-purple-400">${atRule}</span>`;
      })
      .replace(/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g, (match, str, offset) => {
        const beforeMatch = highlighted.substring(0, offset);
        if (beforeMatch.includes('<span class="text-gray-500">') && 
            !beforeMatch.includes('</span>')) {
          return match;
        }
        return `<span class="text-green-400">${str}</span>`;
      })
      .replace(/([a-zA-Z-]+)(\s*:)/g, (match, prop, colon, offset) => {
        const beforeMatch = highlighted.substring(0, offset);
        const inComment = beforeMatch.includes('<span class="text-gray-500">') && 
                         !beforeMatch.includes('</span>');
        const inString = beforeMatch.includes('<span class="text-green-400">') && 
                        !beforeMatch.includes('</span>');
        
        if (inComment || inString) {
          return match;
        }
        return `<span class="text-cyan-300">${prop}</span>${colon}`;
      })
      .replace(/([.#][a-zA-Z_-][a-zA-Z0-9_-]*)/g, (match, selector, offset) => {
        const beforeMatch = highlighted.substring(0, offset);
        const inComment = beforeMatch.includes('<span class="text-gray-500">') && 
                         !beforeMatch.includes('</span>');
        const inString = beforeMatch.includes('<span class="text-green-400">') && 
                        !beforeMatch.includes('</span>');
        
        if (inComment || inString) {
          return match;
        }
        return `<span class="text-yellow-300">${selector}</span>`;
      })
      .replace(/(\{|\})/g, `<span class="text-yellow-400">$1</span>`)
      .replace(/(;)/g, `<span class="text-white">$1</span>`);
      
    return `<pre class="text-white font-mono whitespace-pre">${highlighted}</pre>`;
  }

  return `<pre class="text-white font-mono whitespace-pre">${code}</pre>`;
}

export default highlightCode;