import { Repository } from 'typeorm';
import { Types } from '../entities/types.entity';
import { Pagination } from 'nestjs-typeorm-paginate';
export declare class TypesController {
    private readonly typesRepository;
    constructor(typesRepository: Repository<Types>);
    findAllSchedule(id?: number, limit?: number, filter?: string, filterBy?: string, page?: number, orderBy?: 'id', order?: 'ASC' | 'DESC'): Promise<Pagination<Types>>;
    findScheduleById(id: number): Promise<Types | {
        message: string;
    }>;
    createSchedule(types: Types): Promise<Types>;
    update(id: string, types: Types): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
