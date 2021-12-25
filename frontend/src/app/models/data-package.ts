export interface DataPackage {
    slice(): import("./sensor").Sensor[];

    statusCode: number;
    
    status: string;

    message: string;

    data: object;
}
