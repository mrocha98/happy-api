import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity({ name: 'orphanages' })
export class OrphanageEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ unique: true })
  name: string

  @Column()
  latitude: number

  @Column()
  longitude: number

  @Column()
  about: string

  @Column()
  instructions: string

  @Column()
  opening_hours: string

  @Column()
  open_on_weekends: boolean
}
