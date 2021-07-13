document.addEventListener('copy', (e) => {

    let text = document.getSelection().toString()
    // includes non-ASCII characters
    if (/[^\x00-\x7F]+/.test(text)) {
        e.preventDefault();
        const words = {};
        let i = '';
        text = text.replace(/\w+/g, s => {
            i += '_';
            words[i] = s;
            return i
        })
        if (text.includes('\n'))
            text = text.split('\n').reverse().join('\n');
        text = text.split('').reverse().join('');
        text = text.replace(/_+/g, s => words[s])
        e.clipboardData.setData('text/plain', text);
    }

});
