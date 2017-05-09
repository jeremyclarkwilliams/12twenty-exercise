export function toKebabCase(text) {
  if (typeof text === 'string') {
    return text.toLowerCase().replace(' ','-');
  }
  return text;
}

export function capFirstLetter(text) {
  if (typeof text === 'string') {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  return text;
}
