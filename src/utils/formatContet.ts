const formatContet = (content:string) => {
  return content.replaceAll('&amp;nbsp;', '').replaceAll('&nbsp;', '').replaceAll('&#39;s', '').replaceAll('&amp;lt;', '')
}

export default formatContet