"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Product } from "@/types"

interface ProductDetailModalProps {
  product: Product
  isOpen: boolean
  onClose: () => void
}

const relatedProducts: Record<string, Array<{ name: string; price: number; brand: string }>> = {
  "1": [
    { name: "MacBook Pro 16\"", price: 2499.99, brand: "Apple" },
    { name: "Dell XPS 13", price: 1299.99, brand: "Dell" },
    { name: "Lenovo ThinkPad", price: 899.99, brand: "Lenovo" },
  ],
  "2": [
    { name: "iPhone 15 Pro", price: 999.99, brand: "Apple" },
    { name: "Samsung Galaxy S24", price: 899.99, brand: "Samsung" },
    { name: "Google Pixel 8", price: 799.99, brand: "Google" },
  ],
  "3": [
    { name: "Premium Cotton T-Shirt", price: 59.99, brand: "Ralph Lauren" },
    { name: "Basic Crew Neck", price: 34.99, brand: "Uniqlo" },
    { name: "Designer T-Shirt", price: 89.99, brand: "Gucci" },
  ],
  "4": [
    { name: "Classic Blue Jeans", price: 129.99, brand: "Levi's" },
    { name: "Skinny Fit Jeans", price: 99.99, brand: "H&M" },
    { name: "Premium Denim", price: 199.99, brand: "Diesel" },
  ],
  "5": [
    { name: "Air Jordan 1", price: 170.00, brand: "Nike" },
    { name: "Adidas Ultraboost", price: 180.00, brand: "Adidas" },
    { name: "New Balance 990", price: 185.00, brand: "New Balance" },
  ],
}

const trendingArticles: string[] = [
  "2024 Fashion Trends: What's Hot This Season",
  "Best Budget Tech Gadgets Under $500",
  "Sustainable Fashion: Eco-Friendly Brands",
  "Sneaker Culture: The Rise of Sneakerheads",
]

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null

  const related = relatedProducts[product.id] || []

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="bg-white w-full max-w-2xl max-h-96 overflow-y-auto">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-4xl mb-2">{product.name}</CardTitle>
              <Badge
                variant={
                  product.category === "electronics"
                    ? "default"
                    : product.category === "shoes"
                    ? "destructive"
                    : "secondary"
                }
              >
                {product.category}
              </Badge>
            </div>
            <button
              onClick={onClose}
              className="text-2xl font-bold text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Price */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Price</h3>
            <p className="text-3xl font-bold text-blue-600">
              ${product.price.toFixed(2)}
            </p>
          </div>

          {/* Related Items */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Top Trending Items in {product.category}
            </h3>
            <div className="space-y-2">
              {related.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.brand}</p>
                  </div>
                  <p className="text-lg font-bold text-green-600">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Trending Articles */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Trending Articles</h3>
            <ul className="space-y-2">
              {trendingArticles.map((article, idx) => (
                <li
                  key={idx}
                  className="p-2 text-blue-600 hover:text-blue-800 cursor-pointer hover:underline"
                >
                  • {article}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
