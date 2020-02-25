export const textToPost = (text, charNum) => {
  const textArr = text.split(' ')
  if (textArr[charNum]) {
    const fragment = textArr.slice(0, charNum)
    return fragment.join(' ')
  }

  return text
}
