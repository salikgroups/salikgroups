import { fieldWorkShowcases } from "@/content/media";
import type { FieldWorkShowcase } from "@/types/content";

export function getAllGalleryIds() {
  return fieldWorkShowcases.map((showcase) => showcase.id);
}

export function getGalleryById(id: string): FieldWorkShowcase | null {
  return fieldWorkShowcases.find((showcase) => showcase.id === id) ?? null;
}

export function getGalleryPath(id: string) {
  return `/galleries/${id}`;
}
