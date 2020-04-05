export function mapObject<T>(originalObject: object, allowedFields: Array<String>) {
  const finalObject: Partial<T> = {};

  Object.keys(originalObject).forEach(chave => {
    if (allowedFields.indexOf(chave) !== -1) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      finalObject[chave] = originalObject[chave];
    }
  });

  return finalObject;
}
