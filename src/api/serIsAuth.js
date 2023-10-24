import supabase from "./supabase.js";


export const authCheck = async () => {
    const {data: {session}} = await supabase.auth.getSession();
    const isAuth = !!session;
    const id = session?.user.id;
    const role = session?.user.user_metadata.role;
    const userEmail = session?.user.email;

    return { isAuth, id , role, userEmail }
}