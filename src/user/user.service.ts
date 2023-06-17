import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { Repository } from '@app/data-access'
import { User } from './entity/user.schema'

export abstract class UserService extends Repository<User, 'email'> {
  abstract findOne(key: string): Promise<User>

  abstract findAll(): Promise<User[]>

  abstract create(entity: CreateUserDto): Promise<void>

  abstract update(key: string, entity: UpdateUserDto): Promise<void>

  abstract delete(key: string): Promise<void>
}
