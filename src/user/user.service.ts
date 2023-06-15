import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from '@app/data-access';
import { User } from './entity/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import encrypter from '@app/tools/helpers/encrypter';

@Injectable()
export class UserService extends Repository<User, 'email'> {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {
    super();
  }

  findOne(key: string): Promise<User> {
    return this.userModel.findOne({ email: key });
  }

  findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  create(entity: CreateUserDto): Promise<void> {
    encrypter.encrypt(entity.password).then((res) => {
      entity.password = res;
      this.userModel.create(entity);
    });
    return;
  }

  update(key: string, entity: UpdateUserDto): Promise<void> {
    this.userModel.updateOne({ email: key }, entity);
    return;
  }

  delete(key: string): Promise<void> {
    this.userModel.deleteOne({ email: key });
    return;
  }
}
