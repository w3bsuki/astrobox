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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { History, ShoppingCart, Gift } from 'lucide-react';
import { formatPrice, formatDate } from '@/lib/utils';

// This would come from your database
const transactions = [
  {
    id: 'T123',
    type: 'purchase',
    description: 'Premium Tech Box Purchase',
    amount: -299.99,
    date: '2024-03-15',
    status: 'completed',
    paymentMethod: 'Visa •••• 4242',
  },
  {
    id: 'T124',
    type: 'purchase',
    description: 'Gaming Essentials Box Purchase',
    amount: -149.99,
    date: '2024-03-14',
    status: 'completed',
    paymentMethod: 'PayPal',
  },
  {
    id: 'T125',
    type: 'refund',
    description: 'Refund - Order #9876',
    amount: 299.99,
    date: '2024-03-13',
    status: 'completed',
    paymentMethod: 'Original Payment Method',
  },
];

const openings = [
  {
    id: 'O123',
    boxName: 'Premium Tech Box',
    itemWon: 'iPhone 15 Pro',
    rarity: 'Legendary',
    value: 999.99,
    date: '2024-03-15',
  },
  {
    id: 'O124',
    boxName: 'Gaming Essentials Box',
    itemWon: 'Gaming Mouse',
    rarity: 'Rare',
    value: 149.99,
    date: '2024-03-14',
  },
];

const rarityColors = {
  Common: 'text-slate-500',
  Uncommon: 'text-green-500',
  Rare: 'text-blue-500',
  Epic: 'text-purple-500',
  Legendary: 'text-orange-500',
} as const;

export default function HistoryPage() {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">History</h1>
          <p className="text-muted-foreground mt-2">
            View your transaction and box opening history
          </p>
        </div>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="transactions">
        <TabsList className="mb-8">
          <TabsTrigger value="transactions" className="flex items-center gap-2">
            <ShoppingCart className="h-4 w-4" />
            Transactions
          </TabsTrigger>
          <TabsTrigger value="openings" className="flex items-center gap-2">
            <Gift className="h-4 w-4" />
            Box Openings
          </TabsTrigger>
        </TabsList>

        {/* Transactions Tab */}
        <TabsContent value="transactions">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <History className="h-5 w-5" />
                Transaction History
              </CardTitle>
              <CardDescription>
                A record of all your purchases and refunds
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Select>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="purchase">Purchases</SelectItem>
                    <SelectItem value="refund">Refunds</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date-desc">Date: Newest First</SelectItem>
                    <SelectItem value="date-asc">Date: Oldest First</SelectItem>
                    <SelectItem value="amount-desc">Amount: High to Low</SelectItem>
                    <SelectItem value="amount-asc">Amount: Low to High</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Payment Method</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>{formatDate(transaction.date)}</TableCell>
                      <TableCell className="font-medium">
                        {transaction.description}
                      </TableCell>
                      <TableCell>{transaction.paymentMethod}</TableCell>
                      <TableCell className="capitalize">
                        {transaction.status}
                      </TableCell>
                      <TableCell className={`text-right ${
                        transaction.amount > 0 ? 'text-green-500' : ''
                      }`}>
                        {formatPrice(transaction.amount)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Box Openings Tab */}
        <TabsContent value="openings">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gift className="h-5 w-5" />
                Box Opening History
              </CardTitle>
              <CardDescription>
                A record of all your mystery box openings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Box</TableHead>
                    <TableHead>Item Won</TableHead>
                    <TableHead>Rarity</TableHead>
                    <TableHead className="text-right">Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {openings.map((opening) => (
                    <TableRow key={opening.id}>
                      <TableCell>{formatDate(opening.date)}</TableCell>
                      <TableCell>{opening.boxName}</TableCell>
                      <TableCell className="font-medium">
                        {opening.itemWon}
                      </TableCell>
                      <TableCell className={rarityColors[opening.rarity as keyof typeof rarityColors]}>
                        {opening.rarity}
                      </TableCell>
                      <TableCell className="text-right">
                        {formatPrice(opening.value)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 