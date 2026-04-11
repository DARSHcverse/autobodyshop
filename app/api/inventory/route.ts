import { NextRequest, NextResponse } from 'next/server';
import { put, head } from '@vercel/blob';
import { INVENTORY } from '../../data/inventory';

export const runtime = 'nodejs';

const BLOB_PATHNAME = 'crown-inventory.json';
const ADMIN_SECRET = process.env.ADMIN_SECRET || 'crown2024';

function checkAuth(req: NextRequest) {
  return req.headers.get('x-admin-secret') === ADMIN_SECRET;
}

// GET — return current inventory (Blob if exists, else seed file)
export async function GET(req: NextRequest) {
  if (!checkAuth(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Try to fetch the live blob first
    const blobUrl = process.env.INVENTORY_BLOB_URL;
    if (blobUrl) {
      const res = await fetch(blobUrl, { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        return NextResponse.json({ inventory: data, source: 'blob' });
      }
    }
  } catch {
    // Fall through to seed
  }

  // Fall back to the seed file
  return NextResponse.json({ inventory: INVENTORY, source: 'seed' });
}

// POST — save updated inventory to Vercel Blob
export async function POST(req: NextRequest) {
  if (!checkAuth(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { inventory } = await req.json();
  if (!Array.isArray(inventory)) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json(
      { error: 'BLOB_READ_WRITE_TOKEN not configured. Add it in Vercel → Storage → Blob.' },
      { status: 503 }
    );
  }

  const blob = await put(BLOB_PATHNAME, JSON.stringify(inventory), {
    access: 'public',
    contentType: 'application/json',
    addRandomSuffix: false,
  });

  return NextResponse.json({ ok: true, url: blob.url, count: inventory.length });
}
