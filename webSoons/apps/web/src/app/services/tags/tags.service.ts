import { Injectable } from '@angular/core';
import { Tags } from '@Soons/models';
import { GetterSetterService } from '../getterSetter/getter-setter.service';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private getterSetter: GetterSetterService) { }

  get getTags() {
    return this.getterSetter.Tags
  }

  setTags(tags: Tags) {

  }

  deleteTags(tags: Tags) {

  }
}
