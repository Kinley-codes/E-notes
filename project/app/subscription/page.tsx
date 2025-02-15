"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function SubscriptionPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    setLoading(true);
    const token = localStorage.getItem('token');
    const res = await fetch('/api/subscription', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: 300,
        plan: 'monthly'
      }),
    });

    if (res.ok) {
      router.push('/dashboard');
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-md mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Store Subscription</h1>
        <div className="text-center space-y-4">
          <div className="text-4xl font-bold">Nu 300<span className="text-lg text-muted-foreground">/month</span></div>
          <ul className="text-left space-y-2 mb-6">
            <li>✓ Create your own store</li>
            <li>✓ List unlimited products</li>
            <li>✓ Offer services</li>
            <li>✓ Access to analytics</li>
            <li>✓ 24/7 support</li>
          </ul>
          <Button 
            onClick={handleSubscribe} 
            disabled={loading}
            className="w-full"
          >
            {loading ? 'Processing...' : 'Subscribe Now'}
          </Button>
        </div>
      </Card>
    </div>
  );
}