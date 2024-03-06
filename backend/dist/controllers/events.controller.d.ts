import { Repository } from 'typeorm';
import { Events } from '../entities/events.entity';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Types } from 'src/entities/types.entity';
export declare class EventsController {
    private readonly eventsRepository;
    private readonly typesRepository;
    constructor(eventsRepository: Repository<Events>, typesRepository: Repository<Types>);
    findAllSchedule(id?: number, limit?: number, filter?: string, filterBy?: string, page?: number, orderBy?: 'id', order?: 'ASC' | 'DESC'): Promise<Pagination<Events>>;
    findScheduleById(id: number): Promise<Events | {
        message: string;
    }>;
    createSchedule(events: Events): Promise<Events>;
    update(id: string, events: Events): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
