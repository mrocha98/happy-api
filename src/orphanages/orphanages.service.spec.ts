import { Test, TestingModule } from '@nestjs/testing'
import { OrphanagesService } from './orphanages.service'

describe('OrphanagesService', () => {
  let service: OrphanagesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrphanagesService]
    }).compile()

    service = module.get<OrphanagesService>(OrphanagesService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
