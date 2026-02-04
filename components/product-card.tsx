"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Product } from "@/types"

interface ProductCardProps {
  name: string
  price: number
  category: Product["category"]
  image: string
  onClick: () => void
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  category,
  image,
  onClick,
}) => {
  return (
    <Card
      className="bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-900 border-4 border-pink-500 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-2xl hover:border-yellow-300 overflow-hidden"
      onClick={onClick}
    >
      <div className="w-full h-48 bg-black/30 border-b-4 border-cyan-400 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      <CardHeader>
        <CardTitle className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-pink-400 to-yellow-300">
          {name}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <Badge
          variant={
            category === "electronics"
              ? "default"
              : category === "shoes"
              ? "destructive"
              : "secondary"
          }
          className="text-lg px-4 py-2 font-bold bg-pink-500 text-white border-2 border-yellow-300"
        >
          💫 {category}
        </Badge>

        <p className="text-2xl font-extrabold text-green-400 drop-shadow-[0_0_6px_rgba(34,197,94,0.8)]">
          ₹{price}
        </p>

        <p className="text-yellow-300 hover:text-cyan-300 font-bold text-sm">
          👆 Click to see details →
        </p>
      </CardContent>
    </Card>
  )
}
