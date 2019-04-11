import rangeSort from './util/rangeSort';

export default block => {
  const blockText = [...block.text];

  const entities = block.entityRanges.sort(rangeSort);
  const styles = block.inlineStyleRanges.sort(rangeSort);

  return Object.assign({}, block, {
    text: blockText,
    inlineStyleRanges: styles,
    entityRanges: entities,
  });
};
