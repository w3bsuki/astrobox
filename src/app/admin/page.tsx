import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import {
  Users,
  Package,
  DollarSign,
  ArrowUp,
  ArrowDown,
  ArrowRight,
  ShoppingCart,
  AlertCircle,
} from 'lucide-react';
import { formatPrice } from '@/lib/utils';

// This would come from your backend
const stats = [
  {
    name: 'Total Revenue',
    value: formatPrice(154999.99),
    change: '+12.5%',
    trend: 'up',
    icon: DollarSign,
  },
  {
    name: 'Active Users',
    value: '12,234',
    change: '+2.3%',
    trend: 'up',
    icon: Users,
  },
  {
    name: 'Boxes Opened',
    value: '45,678',
    change: '+8.7%',
    trend: 'up',
    icon: Package,
  },
  {
    name: 'Pending Orders',
    value: '23',
    change: '-5.2%',
    trend: 'down',
    icon: ShoppingCart,
  },
];

const recentOrders = [
  {
    id: 'ORD-001',
    user: 'john@example.com',
    amount: 299.99,
    status: 'completed',
    date: '2024-03-15',
  },
  {
    id: 'ORD-002',
    user: 'sarah@example.com',
    amount: 149.99,
    status: 'processing',
    date: '2024-03-15',
  },
  {
    id: 'ORD-003',
    user: 'mike@example.com',
    amount: 499.99,
    status: 'completed',
    date: '2024-03-14',
  },
];

const alerts = [
  {
    title: 'Low Stock Alert',
    description: 'Premium Tech Box has only 5 items remaining',
    type: 'warning',
  },
  {
    title: 'High Return Rate',
    description: 'Gaming Box showing 15% return rate in last 24h',
    type: 'alert',
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, Admin. Here's what's happening today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.name}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span
                  className={
                    stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                  }
                >
                  {stat.trend === 'up' ? (
                    <ArrowUp className="inline h-4 w-4" />
                  ) : (
                    <ArrowDown className="inline h-4 w-4" />
                  )}{' '}
                  {stat.change}
                </span>{' '}
                from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Recent Orders */}
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Latest transactions across the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.user}</TableCell>
                    <TableCell>{formatPrice(order.amount)}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                          order.status === 'completed'
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-500'
                            : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-500'
                        }`}
                      >
                        {order.status}
                      </span>
                    </TableCell>
                    <TableCell>{order.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="mt-4 flex justify-end">
              <Button variant="outline" size="sm" asChild>
                <a href="/admin/orders">
                  View All Orders
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Alerts & Actions */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Alerts & Actions</CardTitle>
            <CardDescription>Important notifications requiring attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alerts.map((alert, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 rounded-lg border p-4"
                >
                  <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                  <div className="flex-1 space-y-1">
                    <p className="font-medium">{alert.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {alert.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-4">
              <Button className="w-full" asChild>
                <a href="/admin/boxes">Manage Inventory</a>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <a href="/admin/analytics">View Analytics</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 