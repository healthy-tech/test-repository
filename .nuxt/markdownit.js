import MarkdownIt from 'markdown-it'

const handlePlugin = (plugin) => plugin.default || plugin

export default ({}, inject) => {
  const md = new MarkdownIt('default', {"linkify":false,"breaks":true,"html":true,"typographer":true})

  md.use(handlePlugin(require('markdown-it-div')))

  md.use(handlePlugin(require('markdown-it-attrs')))

  inject('md', md)
}