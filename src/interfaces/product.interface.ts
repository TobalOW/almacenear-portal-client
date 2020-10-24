export default interface Product {
  id: number;
  brand: string;
  sku: string;
  description: string;
  imageUrl: string;
  measurementUnit: string;
  category: {
    id: number;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
}
