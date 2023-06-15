export abstract class Repository<T, K extends keyof T> {
  abstract findOne(key: T[K]): Promise<T>;
  abstract findAll(): Promise<T[]>;
  abstract create(entity: Omit<T, K>): Promise<void>;
  abstract update(key: T[K], entity: Partial<T>): Promise<void>;
  abstract delete(key: T[K]): Promise<void>;
}
