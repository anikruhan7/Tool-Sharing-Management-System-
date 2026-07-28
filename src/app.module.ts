import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ToolsModule } from './tools/tools.module';
// import { ToolsModule } from './tools/tools.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'tiger',
      database: 'tool_sharing_db',

      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    ToolsModule,
  ],
})
export class AppModule {}