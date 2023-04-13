import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent implements OnInit {
  @Input() thumbnails!: string[]
  @Input() currentImage !:string
  @Output() showLightboxEmitter = new EventEmitter<boolean>()
  public currentImageIndex = 0

  constructor() { }

  ngOnInit(): void {
  }

  closeLightbox(): void {
    this.showLightboxEmitter.emit(false)
  }

  getIndexImage(index: number): void {
    this.currentImageIndex = index
  }

}
