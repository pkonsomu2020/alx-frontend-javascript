function cleanSet(set, startString) {
  let result = '';
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      result += value.substring(startString.length) + '-';
    }
  });
  // Remove the trailing "-" if present
  if (result.endsWith('-')) {
    result = result.slice(0, -1);
  }
  return result;
}

export default cleanSet;
