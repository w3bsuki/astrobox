import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Package, Trophy, History, Wallet } from 'lucide-react';
import { formatPrice } from '@/lib/utils';

// This would come from your database
const dashboardData = {
  totalSpent: 1499.95,
  totalWon: 2499.95,
  boxesOpened: 15,
  winRate: 73,
  recentActivity: [
    {
      id: 1,
      type: 'win',
      item: 'iPhone 15 Pro',
      value: 999.99,
      date: '2024-03-15',
      box: 'Premium Tech Box',
    },
    {
      id: 2,
      type: 'purchase',
      item: "Collector's Edition Box",
      value: 499.99,
      date: '2024-03-14',
    },
    {
      id: 3,
      type: 'win',
      item: 'Gaming Mouse',
      value: 149.99,
      date: '2024-03-13',
      box: 'Gaming Essentials Box',
    },
  ],
};

export default function DashboardPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Welcome back! Here's an overview of your activity.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatPrice(dashboardData.totalSpent)}
            </div>
            <p className="text-xs text-muted-foreground">
              Across all purchases
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Won</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatPrice(dashboardData.totalWon)}
            </div>
            <p className="text-xs text-muted-foreground">
              Value of won items
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Boxes Opened</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardData.boxesOpened}</div>
            <p className="text-xs text-muted-foreground">
              Total boxes opened
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardData.winRate}%</div>
            <p className="text-xs text-muted-foreground">
              Average win rate
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Your latest box openings and purchases
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {dashboardData.recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {activity.type === 'win' ? 'Won' : 'Purchased'}{' '}
                      {activity.item}
                    </p>
                    {activity.type === 'win' && (
                      <p className="text-sm text-muted-foreground">
                        from {activity.box}
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">
                      {formatPrice(activity.value)}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {activity.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Button asChild className="w-full">
          <Link href="/boxes">
            <Package className="mr-2 h-4 w-4" />
            Explore Boxes
          </Link>
        </Button>
        <Button asChild variant="secondary" className="w-full">
          <Link href="/dashboard/boxes">
            <Package className="mr-2 h-4 w-4" />
            My Boxes
          </Link>
        </Button>
        <Button asChild variant="secondary" className="w-full">
          <Link href="/dashboard/winnings">
            <Trophy className="mr-2 h-4 w-4" />
            My Winnings
          </Link>
        </Button>
        <Button asChild variant="secondary" className="w-full">
          <Link href="/dashboard/history">
            <History className="mr-2 h-4 w-4" />
            View History
          </Link>
        </Button>
      </div>
    </div>
  );
} 