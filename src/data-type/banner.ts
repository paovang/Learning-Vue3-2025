export interface IFormBanner {
  imageFile: File | null;
  imageUrl: string;
  name: string;
  type: string;
  link?: string;
  id?: number;
}

export interface IBanner {
  banners: [] | { id: number; name: string }[];
  isLoading: boolean;
}
