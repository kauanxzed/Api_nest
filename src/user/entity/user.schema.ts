import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

@Schema()
export class User {
  @Prop()
  name: string

  @Prop()
  age: number

  @Prop({ required: true })
  email: string

  @Prop({ required: true })
  password: string
}

export type UserDocument = HydratedDocument<User>

export const UserSchema = SchemaFactory.createForClass(User)
