const chunkMetada = (metada) => {
  console.log('metadata is: ', metada);
  if (metada === undefined) return false;

  const seperator = ',';
  return metada.split(seperator);
};

export default chunkMetada;
