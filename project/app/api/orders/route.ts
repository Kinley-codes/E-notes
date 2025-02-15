import { NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { authenticateRequest, errorResponse } from '@/lib/api-utils';

export async function POST(request: Request) {
  try {
    const auth = await authenticateRequest(request);
    if (!auth) {
      return errorResponse('Unauthorized', 401);
    }

    const { productId, serviceId, quantity = 1 } = await request.json();

    if (!productId && !serviceId) {
      return errorResponse('Product or service ID required');
    }

    const item = productId 
      ? await prisma.product.findUnique({ where: { id: productId } })
      : await prisma.service.findUnique({ where: { id: serviceId } });

    if (!item) {
      return errorResponse('Item not found', 404);
    }

    const order = await prisma.order.create({
      data: {
        userId: auth.userId,
        productId,
        serviceId,
        totalAmount: item.price * quantity,
        status: 'pending'
      }
    });

    return NextResponse.json(order);
  } catch (error) {
    return errorResponse('Failed to create order');
  }
}

export async function GET(request: Request) {
  try {
    const auth = await authenticateRequest(request);
    if (!auth) {
      return errorResponse('Unauthorized', 401);
    }

    const orders = await prisma.order.findMany({
      where: { userId: auth.userId },
      include: {
        product: true,
        service: true
      }
    });

    return NextResponse.json(orders);
  } catch (error) {
    return errorResponse('Failed to fetch orders');
  }
}