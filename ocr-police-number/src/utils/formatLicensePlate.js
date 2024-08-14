export const formatLicensePlate = (text) => {
  console.log('Text for Formatting:', text);
  const regex = /(\b[A-Z]{1,2}\s?\d{1,4}\s?[A-Z]{1,3}\b)/g;
  const matches = text.match(regex);
  if (matches) {
    return matches[0].replace(/\s+/g, ' ').toUpperCase();
  }
  return 'No valid plate found';
};
