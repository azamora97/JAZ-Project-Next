import { Ticketstatus } from "../interface";

const STATUS: Ticketstatus[] = ["TODO", "IN-PROGRESS", "DONE"];

export const getNextStatus = (status: Ticketstatus) => {
    const index = STATUS.indexOf(status);
    return STATUS[index + 1] || status;
}