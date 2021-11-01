export function fileExtension(fileName: string): string {
  return splitNameAndExtension(fileName)[1];
}

export function splitNameAndExtension(fileName: string): [string, string] {
  const pieces = fileName.split(".");
  // TODO Handle the case of no extension properly
  const name = pieces.slice(0, pieces.length - 1).join(".");
  const ext = pieces[pieces.length - 1];
  return [name, ext];
}

let maxId = 0;

export function uniqueId(): number {
  ++maxId;
  return maxId;
}

export function saveFile(file: File): void {
  const a = document.createElement("a");
  a.download = file.name;
  a.href = URL.createObjectURL(file);
  a.click();
}

export function minutesAndSeconds(ms: number): [number, number] {
  let seconds = ms / 1000;
  const minutes = Math.floor(seconds / 60);
  seconds = Math.floor(seconds) % 60;
  return [minutes, seconds];
}
