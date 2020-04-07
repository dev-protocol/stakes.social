import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { UserModule } from './user/user.module'

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: './src/schema.graphql'
    }),
    UserModule
  ]
})
export class AppModule {}
