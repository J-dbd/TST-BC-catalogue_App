export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;

  brand: string;
  thumbnail: string;
  images: string[];
};

export type ProductsAPIRes = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export type LinkProps = {
  content: string;
  toUrl: string | null;
  onClick?: () => void | null;
  state?: Product[];
};

export type PaginationProps = {
  limit: number;
  skip: number;
  selects: string[];
};
