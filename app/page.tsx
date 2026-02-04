"use client"

import { useState, useMemo } from "react"
import { ProductCard } from "@/components/product-card"
import { ProductDetailModal } from "@/components/product-detail-modal"
import { SelectControl } from "@/components/select-control"
import { Product, SelectOption } from "@/types"

const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Laptop",
    price: 999.99,
    category: "electronics",
    image: "/laptop.jpg",
  },
  {
    id: "2",
    name: "Smartphone",
    price: 699.99,
    category: "electronics",
    image: "/smartphone.jpg",
  },
  {
    id: "3",
    name: "T-Shirt",
    price: 29.99,
    category: "clothing",
    image: "/tshirt.jpg",
  },
  {
    id: "4",
    name: "Pant",
    price: 79.99,
    category: "clothing",
    image: "/pants.jpg",
  },
  {
    id: "5",
    name: "Casual Sneakers",
    price: 89.99,
    category: "shoes",
    image: "/sneakers.jpg",
  },
]

const categoryOptions: SelectOption[] = [
  { value: "all", label: "All Products" },
  { value: "electronics", label: "Electronics" },
  { value: "clothing", label: "Clothing" },
  { value: "shoes", label: "Shoes" },
]

const sortOptions: SelectOption[] = [
  { value: "default", label: "Default" },
  { value: "price-asc", label: "Price Low to High" },
  { value: "price-desc", label: "Price High to Low" },
]

export default function Home() {
  const [filterCategory, setFilterCategory] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("default")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  const filteredAndSortedProducts = useMemo(() => {
    let products = [...sampleProducts]

    // Filter by category
    if (filterCategory !== "all") {
      products = products.filter((p) => p.category === filterCategory)
    }

    // Sort products
    if (sortBy === "price-asc") {
      products.sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-desc") {
      products.sort((a, b) => b.price - a.price)
    }

    return products
  }, [filterCategory, sortBy])

  return (
    <div className="min-h-screen bg-cover bg-fixed py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundImage: "url('/bg.jpg')" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-6xl font-black text-center mb-12 text-yellow-300 drop-shadow-2xl">
          ✨ Product Catalog ✨
        </h1>

        {/* Filters and Sorting */}
        <div className="bg-blue-900/60 backdrop-blur-md rounded-2xl shadow-2xl p-6 mb-8 border-4 border-cyan-400">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SelectControl
              selectLabel="Filter by Category:"
              value={filterCategory}
              onValueChange={setFilterCategory}
              options={categoryOptions}
              groupLabel="Categories"
              placeholder="Select a category"
            />
            <SelectControl
              selectLabel="Sort by:"
              value={sortBy}
              onValueChange={setSortBy}
              options={sortOptions}
              groupLabel="Sort Options"
              placeholder="Select a sort option"
            />
          </div>
        </div>

        {/* Products Grid */}
        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                category={product.category}
                image={product.image}
                onClick={() => handleProductClick(product)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white/90 rounded-lg shadow p-12 text-center">
            <p className="text-gray-500 text-lg">
              No products found for the selected category.
            </p>
          </div>
        )}

        {/* Product Detail Modal */}
        {selectedProduct && (
          <ProductDetailModal
            product={selectedProduct}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </div>
  )
}
