import { InjectModel } from '@nestjs/mongoose'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './entity/user.schema'
import { UserService } from './user.service'
import { Model } from 'mongoose'
import encrypter from '@app/tools/helpers/encrypter'

export class UserServiceImpl implements UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {
    this.userModel = userModel
  }

  findOne(key: string): Promise<User> {
    return this.userModel.findOne({ email: key })
  }

  findAll(): Promise<User[]> {
    return this.userModel.find()
  }

  create(entity: CreateUserDto): Promise<void> {
    encrypter.encrypt(entity.password).then((res) => {
      entity.password = res
      this.userModel.create(entity)
    })
    return Promise.resolve()
  }

  update(key: string, entity: UpdateUserDto): Promise<void> {
    this.userModel.updateOne({ email: key }, entity)
    return Promise.resolve()
  }

  delete(key: string): Promise<void> {
    this.userModel.deleteOne({ email: key })
    return Promise.resolve()
  }
}
