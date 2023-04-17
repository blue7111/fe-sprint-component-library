export const mapStyle = (token) => {
  const styles = {};

  Object.entries(token).forEach(([key, propertyValue]) => {
    if (typeof propertyValue.value === 'number') {
      styles[key] = `${propertyValue.value}px`;
    } else {
      styles[key] = propertyValue.value;
    }
  });

  return styles;
};
