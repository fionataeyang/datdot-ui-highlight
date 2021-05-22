const bel = require('bel')
const csjs = require('csjs-inject')
const path = require('path')
const filename = path.basename(__filename)
const hljs = require('highlight.js')

module.exports = snippet

function snippet(option, protocol) {
    const widget = 'ui-highlight'
    const {page, flow, content = '', lang, theme} = option
    const send2Parent = protocol( receive )
    send2Parent({page, from: lang, flow: flow ? `${flow}/${widget}` : widget, type: 'init', filename, line: 11})

    function ui_element(css) {
        hljs.highlightAll()
        const snippet = hljs.highlightAuto(content).value
        const code = bel`<code class="${css.code} language-${lang} hljs"></code>`
        code.innerHTML = snippet
        const element = bel`<div class=${css.snippet}><pre>${code}</pre></div>`
        return element
    }

    /*************************
    * ------ Receivers -------
    *************************/
    function receive(message) {
        const { type } = message
        console.log('message received from main component:', message)
    }

    if (theme) {
        var {
            fontFamily, fontWeight, fontSize, lineHeight, 
            borderWidth, borderColor, borderStyle, borderRadius, 
            padding, margin
        } = theme
    }

    const style = csjs`
    .snippet {}
    .code {
        font-family: ${fontFamily ? fontFamily : 'inherit'};
        font-weight: ${fontWeight ? fontWeight : '300'} !important;
        font-size: ${fontSize ? fontSize : '1.3rem'};
        line-height: ${lineHeight ? lineHeight : '2rem'};
        border-width: ${borderWidth ? borderWidth : '0'};
        border-color: ${borderColor ? borderColor : 'unset'};
        border-style: ${borderStyle ? borderStyle : 'unset'};
        border-radius: ${borderRadius ? borderRadius : '0'};
        padding: ${padding ? padding : '8px 12px'} !important;
        margin: ${margin ? margin : 'inherit'};
    }
    `
    return ui_element(style)
}