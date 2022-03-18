import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Facturacion } from '../models';
import { FacturacionRepository } from '../repositories';
export declare class FacturacionController {
    facturacionRepository: FacturacionRepository;
    constructor(facturacionRepository: FacturacionRepository);
    create(facturacion: Omit<Facturacion, 'idfactura'>): Promise<Facturacion>;
    count(where?: Where<Facturacion>): Promise<Count>;
    find(filter?: Filter<Facturacion>): Promise<Facturacion[]>;
    updateAll(facturacion: Facturacion, where?: Where<Facturacion>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Facturacion>): Promise<Facturacion>;
    updateById(id: string, facturacion: Facturacion): Promise<void>;
    replaceById(id: string, facturacion: Facturacion): Promise<void>;
    deleteById(id: string): Promise<void>;
}
