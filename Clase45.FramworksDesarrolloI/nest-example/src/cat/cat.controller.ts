import { Controller, Post, Body, Get } from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDTO } from '../dto/create-cat.dto';
import { Cat } from '../interface/cat.interface';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post()
  create(@Body() catToCreate: CreateCatDTO): Cat {
    const createdCat: Cat = this.catService.create(catToCreate);

    return createdCat;
  }

  @Get()
  findAll(): Cat[] {
    return this.catService.findAll();
  }
}
