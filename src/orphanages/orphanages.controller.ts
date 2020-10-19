import { Body, Controller, Post } from '@nestjs/common'
import { CreateOrphanageDto } from './dtos'
import { OrphanagesService } from './orphanages.service'

@Controller('orphanages')
export class OrphanagesController {
  constructor(private readonly orphanagesService: OrphanagesService) {}

  @Post()
  async create(@Body() orphangeData: CreateOrphanageDto) {
    console.log(orphangeData)
    return this.orphanagesService.create(orphangeData)
  }
}
