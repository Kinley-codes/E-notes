import { NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { authenticateRequest, errorResponse } from '@/lib/api-utils';

export async function POST(request: Request) {
  try {
    const auth = await authenticateRequest(request);
    if (!auth) {
      return errorResponse('Unauthorized', 401);
    }

    const { amount, plan } = await request.json();

    // Calculate subscription end date (1 month from now)
    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + 1);

    const subscription = await prisma.subscription.create({
      data: {
        userId: auth.userId,
        status: 'active',
        endDate
      }
    });

    return NextResponse.json(subscription);
  } catch (error) {
    return errorResponse('Failed to create subscription');
  }
}