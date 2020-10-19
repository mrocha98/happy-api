import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm'
import { OrphanagesModule } from './orphanages/orphanages.module'

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), TypeOrmModule.forRoot(), OrphanagesModule]
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
