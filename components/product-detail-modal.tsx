"use client"

import { Product } from "@/types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ProductDetailModalProps {
  product: Product
  isOpen: boolean
  onClose: () => void
}

export const ProductDetailModal = ({
  product,
  isOpen,
  onClose,
}: ProductDetailModalProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <Card className="w-full max-w-md bg-gradient-to-br from-indigo-900 to-blue-900 border-4 border-pink-500 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-3xl text-yellow-300">
            {product.name}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-xl border-2 border-cyan-400"
          />

          <p className="text-xl font-bold text-green-400">
            ₹{product.price}
          </p>

          <p className="text-white capitalize">
            Category: {product.category}
          </p>

          <button
            onClick={onClose}
            className="w-full mt-4 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 rounded-xl"
          >
            Close
          </button>
        </CardContent>
      </Card>
    </div>
  )
}


