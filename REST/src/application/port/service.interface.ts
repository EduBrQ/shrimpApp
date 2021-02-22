export interface IService<T> {
    create(item: T): Promise<T>
    getAll(query?: any): Promise<Array<T>>
    getById(id: string): Promise<T>
    update(item: T): Promise<T>
    delete(id:string): Promise<boolean>
}
