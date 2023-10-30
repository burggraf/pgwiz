export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      projects: {
        Row: {
          comments: string
          connection_string: string
          created_at: string | null
          id: string
          sort_key: number | null
          title: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          comments: string
          connection_string: string
          created_at?: string | null
          id?: string
          sort_key?: number | null
          title: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          comments?: string
          connection_string?: string
          created_at?: string | null
          id?: string
          sort_key?: number | null
          title?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "projects_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

