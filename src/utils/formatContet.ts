const formatContet = (content:string) => {
  return content.replaceAll("&amp;nbsp;", "").replaceAll("&nbsp;", "").replaceAll("&#39;s", "")
}

export default formatContet