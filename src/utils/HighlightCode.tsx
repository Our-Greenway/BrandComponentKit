function highlightCode(code: string, lang: string): string {
  if (lang === 'html') {
    const escaped = code.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const highlighted = escaped
      .replace(/(&lt;!--.*?--&gt;)/gs, `<span class="text-gray-500">$1</span>`)
      .replace(/(&lt;\/?)([\w-]+)((?:\s+[\w-]+=(?:"[^"]*"|'[^']*')?)*)(&gt;)/g, 
        (_, openBracket, tagName, middle, closeBracket) => {
          const highlightedMiddle = middle.replace(/([\w-]+)=(".*?"|'.*?')/g,
            (_, attr: string, val: string) =>
              `<span class="text-cyan-300">${attr}</span>=<span class="text-green-400">${val}</span>`
          );
          return `<span class="text-cyan-300">${openBracket}</span><span class="text-red-300">${tagName}</span>${highlightedMiddle}<span class="text-cyan-300">${closeBracket}</span>`;
        });
    return `<pre class="text-white font-mono whitespace-pre">${highlighted}</pre>`;
  }
  if (lang === 'css') {
    const highlighted = code
      .replace(/(\/\*.*?\*\/)/gs, `<span class="text-gray-500">$1</span>`)
      .replace(/(@import\s+)/g, `<span class="text-gray-400">$1</span>`)
      .replace(/(".*?"|'.*?')/g, `<span class="text-cyan-300">$1</span>`)
      .replace(/(;)/g, `<span class="text-white">$1</span>`)
      .replace(/(\{|\})/g, `<span class="text-yellow-400">$1</span>`);
    return `<pre class="text-white font-mono whitespace-pre">${highlighted}</pre>`;
  }

  return `<pre class="text-white font-mono whitespace-pre">${code}</pre>`;
}

export default highlightCode;