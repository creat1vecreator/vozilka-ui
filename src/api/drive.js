import supabase from './supabase.js'

export const createDrive = async (body) => {

    await supabase.functions.invoke('publish-drive', {
        body: {...body, route: ''},
    })
}

export const retrieveDriveRealTime = async (body) => {

    return await supabase.functions.invoke('retrieve-drive-realtime', {
        body
    })
}

export const confirmDrive = async (body) => {

    return await supabase.functions.invoke('confirm-drive', {
        body,
    });
}

export const getFilteredDrives = async (body) => {
    return await supabase.functions.invoke('get-drives', {
        body
    })
}
