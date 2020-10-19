import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { OrphanageEntity } from './orphanage.entity'
import { OrphanagesController } from './orphanages.controller'
import { OrphanagesService } from './orphanages.service'

@Module({
  imports: [TypeOrmModule.forFeature([OrphanageEntity])],
  controllers: [OrphanagesController],
  providers: [OrphanagesService],
  exports: []
})
export class OrphanagesModule {}
