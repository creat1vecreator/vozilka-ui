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

export const retrieveDriveRealTime = async () => {

    const response = await fetch('https://xnverdgutnjbhtihzvpq.supabase.co/functions/v1/retrieve-drive-realtime', {
        headers : {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhudmVyZGd1dG5qYmh0aWh6dnBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU1NzMyMTMsImV4cCI6MjAxMTE0OTIxM30.zMu2XCcExUmwIuL36rW3CsalDmFkk-ezxKlfZ1dguzc',
        }
    })
    return response;
}

export const confirmDrive = async (body) => {
    await supabase.functions.invoke('confirm-drive', {
        body,
    });
}
