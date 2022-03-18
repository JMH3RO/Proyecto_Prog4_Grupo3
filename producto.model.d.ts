import { Entity } from '@loopback/repository';
export declare class Producto extends Entity {
    idproducto?: string;
    nombre: string;
    descripcion?: string;
    preciounitario: number;
    categoria: string;
    constructor(data?: Partial<Producto>);
}
export interface ProductoRelations {
}
export declare type ProductoWithRelations = Producto & ProductoRelations;
