export type SelectOption = {
  value: string;
  label: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  category: "electronics" | "clothing" | "shoes" | string;
  image: string;
};
