import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'movie' })
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string
  @Column()
  description: string
  @Column()
  year: number
  @Column()
  rating: number
  @Column()
  duration: number
}
