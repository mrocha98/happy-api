import { Test, TestingModule } from '@nestjs/testing'
import { OrphanagesController } from './orphanages.controller'

describe('OrphanagesController', () => {
  let controller: OrphanagesController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrphanagesController]
    }).compile()

    controller = module.get<OrphanagesController>(OrphanagesController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
