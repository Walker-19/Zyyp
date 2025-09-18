import supabase from "@/api"

export const rechargeur_verification = supabase.from('rechargeur_verification');

export const user_supabase = supabase.from('user');


export const scooter_supabase = supabase.from('scooters');