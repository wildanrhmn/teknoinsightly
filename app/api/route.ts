import { NextResponse, NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function GET(request: NextRequest) {
    const token = await getToken({ req: request });
    console.info(token)
    const response = await fetch(`${process.env.NEXT_API_URL}user`);
    const data = await response.json();

    return NextResponse.json(data);
}