function cleanUp(string) {
  let cleanString = string.replace(/[^\s\w]/g, "");
  return cleanString.replace(/\s+/g, " ");
}

console.log(cleanUp("---what's my +*& line?"));