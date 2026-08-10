// Connects the app to your Supabase backend
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export const supabase = createClient(
  "https://pgvrfrfmknmpsfufzjzh.supabase.co",
  "sb_publishable_hqlwbvYBa9OkiwY6ywX5Wg_9y2QnlLc"
);
