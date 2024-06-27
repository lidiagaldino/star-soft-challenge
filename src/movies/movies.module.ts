import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { RedisCacheModule } from '../redis-cache/redis-cache.module';
import { Movie } from './entities/movie.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Movie]), RedisCacheModule],
  controllers: [MoviesController],
  providers: [JwtService, MoviesService],
})
export class MoviesModule { }
