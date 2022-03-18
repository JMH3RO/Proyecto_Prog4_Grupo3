import { Entity } from '@loopback/repository';
export declare class Facturacion extends Entity {
    idfactura?: string;
    idorden: string;
    total: number;
    metodopago?: string;
    constructor(data?: Partial<Facturacion>);
}
export interface FacturacionRelations {
}
export declare type FacturacionWithRelations = Facturacion & FacturacionRelations;
