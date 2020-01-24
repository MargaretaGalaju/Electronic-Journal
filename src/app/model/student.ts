export interface Student {
    id: number;
    name: string;
    seqNo: number;
    KPI: number;
    info:[{
        id: number;
        date: string;
        mark: string;
        absence: boolean;
        activity: string;
    },
    {
        id: number;
        date: string;
        mark: string;
        absence: boolean;
        activity: string;
    },
    {
        id: number;
        date: string;
        mark: string;
        absence: boolean;
        activity: string;
    }
],
    // second: string;   
    // three: string;
    // four:  string;
    // five: string;
    // six : string;
    // seven: string;
    // eight: string;
    // nine: string;
    // ten: string;
    // eleven: string;
    // twelve: string;
    // thirteen: string;
    // fourteen: string;
    // fifteen: string;
    courseId: number;
}
