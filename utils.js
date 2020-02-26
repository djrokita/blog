export const textToPost = (text, charNum) => {
  const textArr = text.split(' ')
  if (textArr[charNum]) {
    const fragment = textArr.slice(0, charNum)
    return fragment.join(' ')
  }

  return text
}

export const formatDate = (date) => {
  if (date.includes('T')) {
    return date.split('T')[0]
  }

  return date
}
