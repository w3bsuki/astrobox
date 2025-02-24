import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  Package,
  Users,
  ShoppingCart,
  BarChart,
  Settings,
  LogOut,
  Menu,
  X,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  {
    name: 'Dashboard',
    href: '/admin',
    icon: LayoutDashboard,
    description: 'Overview of platform metrics',
  },
  {
    name: 'Box Management',
    href: '/admin/boxes',
    icon: Package,
    description: 'Manage mystery boxes and items',
  },
  {
    name: 'User Management',
    href: '/admin/users',
    icon: Users,
    description: 'Manage user accounts',
  },
  {
    name: 'Orders',
    href: '/admin/orders',
    icon: ShoppingCart,
    description: 'View and manage orders',
  },
  {
    name: 'Analytics',
    href: '/admin/analytics',
    icon: BarChart,
    description: 'Platform statistics and reports',
  },
  {
    name: 'Settings',
    href: '/admin/settings',
    icon: Settings,
    description: 'Platform configuration',
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen">
      {/* Sidebar */}
      <div className="hidden lg:flex lg:w-72 lg:flex-col">
        <div className="flex flex-col gap-2 border-r px-6 py-4 h-screen">
          {/* Logo */}
          <div className="flex h-16 items-center border-b">
            <Link href="/admin" className="flex items-center gap-2">
              <span className="text-xl font-bold">Astrobox Admin</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                  item.href === '/admin'
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground'
                )}
              >
                <item.icon className="mr-3 h-5 w-5 shrink-0" />
                <div className="flex-1">
                  <p>{item.name}</p>
                  <p className="text-xs text-muted-foreground hidden group-hover:block">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </nav>

          {/* Admin Info */}
          <div className="border-t p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="h-9 w-9 rounded-full bg-primary/10" />
                <div>
                  <p className="text-sm font-medium">Admin User</p>
                  <p className="text-xs text-muted-foreground">admin@astrobox.com</p>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed top-0 z-40 flex h-16 w-full items-center gap-x-4 border-b bg-background px-4">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
        <div className="flex flex-1 justify-end md:hidden">
          <Button variant="ghost" size="icon">
            <LogOut className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="h-full py-8 lg:py-10 px-4 lg:px-8">
          {children}
        </div>
      </div>
    </div>
  );
} 