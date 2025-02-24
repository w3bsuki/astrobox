import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Package, ArrowRight } from 'lucide-react';
import { formatPrice } from '@/lib/utils';

const boxes = [
  {
    id: 'premium-tech',
    name: 'Premium Tech Box',
    description: 'High-end electronics and gadgets',
    price: 299.99,
    tier: 'Premium',
    image: '/boxes/tech-box.jpg',
    totalItems: 150,
    remainingItems: 87,
  },
  {
    id: 'collectors-edition',
    name: "Collector's Edition Box",
    description: 'Rare collectibles and limited editions',
    price: 499.99,
    tier: 'Limited',
    image: '/boxes/collectors-box.jpg',
    totalItems: 50,
    remainingItems: 12,
  },
  {
    id: 'gaming-essentials',
    name: 'Gaming Essentials Box',
    description: 'Popular gaming gear and accessories',
    price: 149.99,
    tier: 'Standard',
    image: '/boxes/gaming-box.jpg',
    totalItems: 200,
    remainingItems: 156,
  },
  {
    id: 'mystery-electronics',
    name: 'Mystery Electronics Box',
    description: 'Surprise electronics and accessories',
    price: 99.99,
    tier: 'Standard',
    image: '/boxes/electronics-box.jpg',
    totalItems: 300,
    remainingItems: 243,
  },
];

export default function BoxesPage() {
  return (
    <div className="container py-10">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
          Mystery Boxes
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover our curated collection of mystery boxes, each filled with
          exciting surprises and valuable items.
        </p>
      </section>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Select>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by tier" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Tiers</SelectItem>
            <SelectItem value="standard">Standard</SelectItem>
            <SelectItem value="premium">Premium</SelectItem>
            <SelectItem value="limited">Limited Edition</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="popularity">Most Popular</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Boxes Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {boxes.map((box) => (
          <Card key={box.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                {box.name}
              </CardTitle>
              <CardDescription>{box.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Price</span>
                  <span className="font-medium">
                    {formatPrice(box.price)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tier</span>
                  <span className="font-medium">{box.tier}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Remaining</span>
                  <span className="font-medium">
                    {box.remainingItems} / {box.totalItems}
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/boxes/${box.id}`}>
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
} 