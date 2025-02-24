import {
  Card,
  CardContent,
  CardDescription,
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Trophy } from 'lucide-react';
import { formatPrice, formatDate } from '@/lib/utils';

// This would come from your database
const winnings = [
  {
    id: 1,
    itemName: 'iPhone 15 Pro',
    boxName: 'Premium Tech Box',
    rarity: 'Legendary',
    value: 999.99,
    wonDate: '2024-03-15',
    status: 'Shipped',
    trackingNumber: 'USP123456789',
  },
  {
    id: 2,
    itemName: 'Gaming Mouse',
    boxName: 'Gaming Essentials Box',
    rarity: 'Rare',
    value: 149.99,
    wonDate: '2024-03-14',
    status: 'Delivered',
    trackingNumber: 'USP987654321',
  },
  {
    id: 3,
    itemName: 'Mechanical Keyboard',
    boxName: 'Gaming Essentials Box',
    rarity: 'Epic',
    value: 199.99,
    wonDate: '2024-03-13',
    status: 'Processing',
    trackingNumber: null,
  },
];

const rarityColors = {
  Common: 'text-slate-500',
  Uncommon: 'text-green-500',
  Rare: 'text-blue-500',
  Epic: 'text-purple-500',
  Legendary: 'text-orange-500',
} as const;

const statusColors = {
  Processing: 'text-yellow-500',
  Shipped: 'text-blue-500',
  Delivered: 'text-green-500',
} as const;

export default function WinningsPage() {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Winnings</h1>
          <p className="text-muted-foreground mt-2">
            View and manage all your won items
          </p>
        </div>
        <Card className="p-2">
          <p className="text-sm font-medium">Total Value Won</p>
          <p className="text-2xl font-bold">
            {formatPrice(
              winnings.reduce((total, winning) => total + winning.value, 0)
            )}
          </p>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Select>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by box" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Boxes</SelectItem>
            <SelectItem value="tech">Tech Box</SelectItem>
            <SelectItem value="gaming">Gaming Box</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="processing">Processing</SelectItem>
            <SelectItem value="shipped">Shipped</SelectItem>
            <SelectItem value="delivered">Delivered</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date-desc">Date: Newest First</SelectItem>
            <SelectItem value="date-asc">Date: Oldest First</SelectItem>
            <SelectItem value="value-desc">Value: High to Low</SelectItem>
            <SelectItem value="value-asc">Value: Low to High</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Winnings Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5" />
            All Winnings
          </CardTitle>
          <CardDescription>
            A list of all items you've won from mystery boxes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item</TableHead>
                <TableHead>Box</TableHead>
                <TableHead>Rarity</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Won Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Tracking</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {winnings.map((winning) => (
                <TableRow key={winning.id}>
                  <TableCell className="font-medium">
                    {winning.itemName}
                  </TableCell>
                  <TableCell>{winning.boxName}</TableCell>
                  <TableCell className={rarityColors[winning.rarity as keyof typeof rarityColors]}>
                    {winning.rarity}
                  </TableCell>
                  <TableCell>{formatPrice(winning.value)}</TableCell>
                  <TableCell>{formatDate(winning.wonDate)}</TableCell>
                  <TableCell className={statusColors[winning.status as keyof typeof statusColors]}>
                    {winning.status}
                  </TableCell>
                  <TableCell>
                    {winning.trackingNumber ? (
                      <span className="text-sm text-muted-foreground">
                        {winning.trackingNumber}
                      </span>
                    ) : (
                      <span className="text-sm text-muted-foreground">-</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
} 