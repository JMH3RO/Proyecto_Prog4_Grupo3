import { Entity } from '@loopback/repository';
export declare class Orden extends Entity {
    idorden?: string;
    nummesa: number;
    producto: object[];
    subtotal: number;
    isv: number;
    total: number;
    estado?: string;
    constructor(data?: Partial<Orden>);
}
export interface OrdenRelations {
}
export declare type OrdenWithRelations = Orden & OrdenRelations;
