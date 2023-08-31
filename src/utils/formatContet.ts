import { convert } from 'html-to-text'
import scriptags from 'striptags'

const options = {
  wordwrap: null,
  ignoreHref: true,
  ignoreImage: true,
}

const htmlToText = (html: string) => convert(html, options)

export const formatHtmlText = (html: string) => htmlToText(scriptags(html, [], ''))
