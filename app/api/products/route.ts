import { supabase } from "@/lib/db";
import { json } from "@/lib/utils";
export const dynamic = "force-dynamic";

export async function GET() {
  const { data, error } = await supabase
    .from("Products")
    .select("id,name,price")
    .order("id");
  if (error) return json({ error: error.message }, 500);
  return json({ items: data ?? [] });
}
