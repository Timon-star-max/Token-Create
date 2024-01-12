import { cookies } from 'next/headers'
import { createClient } from '@supabase/supabase-js';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_SERVICE_KEY || ''
);



// Supabase admin/service_role client for use in server-side code
export const getServiceRoleServerSupabaseClient = () =>
    createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || '',
        process.env.NEXT_PUBLIC_SUPABASE_SERVICE_KEY || '',
        {
            auth: {
                persistSession: false
            }
        }
    )