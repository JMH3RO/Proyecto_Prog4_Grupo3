import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Orden } from '../models';
import { OrdenRepository } from '../repositories';
export declare class OrdenController {
    ordenRepository: OrdenRepository;
    constructor(ordenRepository: OrdenRepository);
    create(orden: Omit<Orden, 'idorden'>): Promise<Orden>;
    count(where?: Where<Orden>): Promise<Count>;
    find(filter?: Filter<Orden>): Promise<Orden[]>;
    updateAll(orden: Orden, where?: Where<Orden>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Orden>): Promise<Orden>;
    updateById(id: string, orden: Orden): Promise<void>;
    replaceById(id: string, orden: Orden): Promise<void>;
    deleteById(id: string): Promise<void>;
}
