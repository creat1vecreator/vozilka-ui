import supabase from "./supabase.js";

export const logout = async () =>  {
    try {
        await supabase.auth.signOut()
    }
    catch(e) {
        console.error(e)
    }
}