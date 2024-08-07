import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const mockNoticias = [
      { header: 'flamengo vs palmeiras', src: '', alt: ''},
      { header: 'badminton', src: '', alt: ''},
      { header: 'volei de praia', src: '', alt: ''},
      { header: 'noticia chocante', src: '', alt: ''},
    ]
    return NextResponse.json(mockNoticias);
  } catch (error) {
    console.log('[NOTICIAS_GET]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
}