export const getFileName = (name: string) => {
  return name.split('.').shift();
}