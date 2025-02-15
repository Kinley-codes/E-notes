"use client";

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Order {
  id: string;
  totalAmount: number;
  status: string;
  product?: {
    title: string;
  };
  service?: {
    title: string;
  };
}

export default function OrderList() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const token = localStorage.getItem('token');
    const res = await fetch('/api/orders', {
      headers: { Authorization: `Bearer ${token}` }
    });
    if (res.ok) {
      const data = await res.json();
      setOrders(data);
    }
  };

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <Card key={order.id} className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-semibold">
                {order.product?.title || order.service?.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                Order ID: {order.id}
              </p>
            </div>
            <div className="text-right">
              <p className="font-bold">Nu {order.totalAmount}</p>
              <Badge variant={order.status === 'completed' ? 'default' : 'secondary'}>
                {order.status}
              </Badge>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}