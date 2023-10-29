import supabase from './supabase.js'

// export interface ICreateDriveRequestDTO {
//     arrival_time: string;
//     car_name: string;
//     departure_time: string;
//     destination: string;
//     driver_user_id: string;
//     notes: string;
//     source: string;
// }
//
// export interface IConfirmDriRequestDTO {
//     drive_id: string,
//     passenger_id: string,
// }

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
