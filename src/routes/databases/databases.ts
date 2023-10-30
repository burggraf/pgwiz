import { supabase } from '$services/supabase.service';
export const getProjects = async () => {
    const { data, error } = await supabase.from('projects').select('*');
    if (error) {
        console.log('error', error);
        return [];
    }
    return data;
}
export const getProject = async (id: string) => {
    const { data, error } = await supabase.from('projects').select('*').eq('id', id).single();
    return { data, error };
}

export const saveProject = async (project: any) => {
    const { data, error } = await supabase.from('projects').upsert(project);
    return { data, error };
}