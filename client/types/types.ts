export interface Category {
  id: number;
  name: string;
  created_at: string | null;
  updated_at: string | null;
  secondary: SecondaryCategory[];
}

export interface SecondaryCategory {
  id: number;
  name: string;
  primary_category_id: number;
  created_at: string | null;
  updated_at: string | null;
}
