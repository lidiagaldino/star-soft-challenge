import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RedisCacheRepository } from '../redis-cache/redis-cache.repository';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private readonly moviesRepository: Repository<Movie>,
    private readonly redisCacheRepository: RedisCacheRepository
  ) { }
  async create(createMovieDto: CreateMovieDto) {
    const movie = this.moviesRepository.create(createMovieDto)
    return await this.moviesRepository.save(movie);
  }

  async findAll() {
    const userCache = await this.redisCacheRepository.getData('all-movies');

    if (userCache) {
      return userCache;
    }

    const movies = await this.moviesRepository.find();
    await this.redisCacheRepository.saveData(movies, 'all-movies');
    return movies;
  }

  async findOne(id: number) {
    const movieCache = await this.redisCacheRepository.getData(`movie-${id}`);
    if (movieCache) {
      return movieCache;
    }

    const movie = await this.moviesRepository.findOne({ where: { id } });
    await this.redisCacheRepository.saveData(movie, `movie-${id}`);
    return movie;
  }

  async update(id: number, updateMovieDto: UpdateMovieDto) {
    const movie = await this.moviesRepository.findOne({ where: { id } })
    return await this.moviesRepository.save({ ...movie, ...updateMovieDto });
  }

  async remove(id: number) {
    const movie = await this.moviesRepository.findOne({ where: { id } })
    await this.moviesRepository.remove(movie);
    return
  }
}
