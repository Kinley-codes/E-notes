import { NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { authenticateRequest, errorResponse } from '@/lib/api-utils';

export async function POST(request: Request) {
  try {
    const auth = await authenticateRequest(request);
    if (!auth) {
      return errorResponse('Unauthorized', 401);
    }

    const { title, description, price } = await request.json();
    
    // Check if user has active subscription
    const subscription = await prisma.subscription.findFirst({
      where: {
        userId: auth.userId,
        status: 'active',
        endDate: { gt: new Date() }
      }
    });

    if (!subscription) {
      return errorResponse('Active subscription required', 403);
    }

    const product = await prisma.product.create({
      data: {
        title,
        description,
        price,
        sellerId: auth.userId
      }
    });

    return NextResponse.json(product);
  } catch (error) {
    return errorResponse('Failed to create product');
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const sellerId = searchParams.get('sellerId');

    const products = await prisma.product.findMany({
      where: sellerId ? { sellerId } : undefined,
      include: {
        seller: {
          select: {
            name: true,
            email: true
          }
        }
      }
    });

    return NextResponse.json(products);
  } catch (error) {
    return errorResponse('Failed to fetch products');
  }
}