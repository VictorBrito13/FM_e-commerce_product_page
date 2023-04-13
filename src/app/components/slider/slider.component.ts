import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() images!: string[]
  public currentImage!: string
  private indexImage = 0
  @Output() imageIndexEmitter = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    this.currentImage = this.images[0].replace('-thumbnail', '')
  }

  changeImage(action: string): void {
    if(action === "prev") {
      this.indexImage -= 1
      if(this.indexImage < 0)
      this.indexImage = this.images.length - 1
    } else if(action === "next") {
      this.indexImage += 1
      if(this.indexImage >= this.images.length)
      this.indexImage = 0
    }
    this.currentImage = this.images[this.indexImage].replace('-thumbnail', '')
    this.emitIndexImage()
  }

  emitIndexImage(): void {
    this.imageIndexEmitter.emit(this.indexImage)
  }

}
