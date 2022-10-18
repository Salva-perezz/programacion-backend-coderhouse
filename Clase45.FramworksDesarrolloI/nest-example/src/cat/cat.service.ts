import { Injectable } from '@nestjs/common';
import { Cat } from '../interface/cat.interface';

@Injectable()
export class CatService {
  private readonly cats: Cat[] = [];

  create(catToCreate: Cat): Cat {
    this.cats.push(catToCreate);

    return catToCreate;
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
