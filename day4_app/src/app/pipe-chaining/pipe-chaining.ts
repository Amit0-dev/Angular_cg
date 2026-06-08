import { Component } from '@angular/core';
import {
  DatePipe,
  UpperCasePipe,
  LowerCasePipe,
  TitleCasePipe,
  SlicePipe,
} from '@angular/common';

@Component({
  selector: 'app-pipe-chaining',
  imports: [
    DatePipe,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    SlicePipe,
  ],
  templateUrl: './pipe-chaining.html',
  styleUrl: './pipe-chaining.css',
})
export class PipeChaining {
  blogPost = {
    title: '   angular pipes: a complete guide for modern developers   ',
    publishedAt: new Date('2024-11-15T08:30:00'),
    content:
      'Angular pipes are one of the most useful features for transforming data in templates...',
    tags: ['angular', 'typescript', 'frontend', 'webdev', 'pipes'],
  };
}
