import { INVENTORY, type InventoryVehicle } from './inventory';
export type { InventoryVehicle } from './inventory';

// Fetches live inventory from Blob at request time.
// Falls back to the seed file if Blob is not configured or unreachable.
export async function getInventory(): Promise<InventoryVehicle[]> {
  const blobUrl = process.env.INVENTORY_BLOB_URL;
  if (blobUrl) {
    try {
      const res = await fetch(blobUrl, { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        return data as InventoryVehicle[];
      }
    } catch {
      // fall through to seed
    }
  }
  return INVENTORY;
}
