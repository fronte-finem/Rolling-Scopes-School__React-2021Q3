// https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
// https://gist.github.com/jed/982883

const TEMPLATE = `${1e7}-${1e3}-${4e3}-${8e3}-${1e11}`;

const transform = (x: number) =>
  x ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (x / 4)));

export function getUUIDv4(): string {
  return TEMPLATE.replace(/[018]/g, (c) => transform(+c).toString(16));
}
