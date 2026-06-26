export function galleryPaths(folder: string, count: number): string[] {
  return Array.from({ length: count }, (_, index) => {
    const num = String(index + 1).padStart(2, "0");
    return `${folder}/${num}.webp`;
  });
}

export function firstGalleryImage(folder: string): string {
  return `${folder}/01.webp`;
}
