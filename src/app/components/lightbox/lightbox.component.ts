import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent implements OnInit {
  @Input() currentImage!: string
  @Input() thumbnails!: string[]
  @Output() showLightboxEmitter = new EventEmitter<boolean>()
  public currentImageIndex = 0

  constructor() { }

  ngOnInit(): void {
  }

  changeImage(action: string): void {
    if(action === "prev") {
      this.currentImageIndex -= 1
      if(this.currentImageIndex < 0)
      this.currentImageIndex = this.thumbnails.length - 1
    } else if(action === "next") {
      this.currentImageIndex += 1
      if(this.currentImageIndex >= this.thumbnails.length)
      this.currentImageIndex = 0
    }
    this.currentImage = this.thumbnails[this.currentImageIndex].replace('-thumbnail', '')
  }

  closeLightbox(): void {
    this.showLightboxEmitter.emit(false)
  }

}
