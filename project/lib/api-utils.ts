import { NextResponse } from 'next/server';
import { verifyToken } from './auth';

export async function authenticateRequest(request: Request) {
  const token = request.headers.get('Authorization')?.split(' ')[1];
  if (!token) {
    return null;
  }
  return verifyToken(token);
}

export function errorResponse(message: string, status: number = 400) {
  return NextResponse.json({ error: message }, { status });
}