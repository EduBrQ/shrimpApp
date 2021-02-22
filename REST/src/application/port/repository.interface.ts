/**
 * Interface Repository
 * 
 * @template T 
 * @author Lucas Rocha <lucas.rocha@nutes.uepb.edu.br>
 * @version 1.0
 * @copyright Copyright (c) 2018, NUTES/UEPB. 
 */
export interface IRepository<T> {
    save(item: T): Promise<T>
    getAll(query?: any): Promise<Array<T>>
    getById(id: string): Promise<T>
    update(item: T): Promise<T>
    delete(id: string): Promise<boolean>
}
