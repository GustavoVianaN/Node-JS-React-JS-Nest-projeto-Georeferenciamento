import { Types } from "./types.entity";
export declare class Events {
    id: number;
    iddevice: number;
    access: string;
    sector: string;
    functionLocal: string;
    typeId: number;
    type: Types;
    situation: boolean;
    motivo: string;
    protocol: number;
    latitude: number[];
    longitude: number[];
    azimuth: number;
    create_at: Date;
    update_at: Date;
}
