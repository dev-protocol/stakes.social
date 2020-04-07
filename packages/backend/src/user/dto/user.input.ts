import { IsNotEmpty } from 'class-validator'
import { Field, InputType } from 'type-graphql'
import { User } from '../user.entity'

@InputType()
export class UserCreateInput implements Partial<User> {
  @Field()
  @IsNotEmpty()
  readonly name: string
}
