import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { validate } from 'class-validator'
import { Repository } from 'typeorm'
import { CreateOrphanageDto } from './dtos'
import { OrphanageEntity } from './orphanage.entity'

@Injectable()
export class OrphanagesService {
  constructor(@InjectRepository(OrphanageEntity) private orphanagesRepository: Repository<OrphanageEntity>) {}

  async create(dto: CreateOrphanageDto): Promise<OrphanageEntity> {
    const newOrphanage = new OrphanageEntity()
    newOrphanage.name = dto.name
    newOrphanage.about = dto.about
    newOrphanage.instructions = dto.instructions
    newOrphanage.latitude = Number(dto.latitude)
    newOrphanage.longitude = Number(dto.longitude)
    newOrphanage.open_on_weekends = dto.open_on_weekends
    newOrphanage.opening_hours = dto.opening_hours

    const errors = await validate(newOrphanage)
    if (errors.length) {
      throw new HttpException({ message: 'Validation failed', errors }, HttpStatus.BAD_REQUEST)
    }

    const savedOrphanage = await this.orphanagesRepository.save(newOrphanage)
    return savedOrphanage
  }
}
