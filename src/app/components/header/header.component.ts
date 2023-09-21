import { Component, ElementRef, NgZone, OnInit } from '@angular/core';
import * as THREE from "three";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentIcon: string = 'light_mode';
  // private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  // private renderer: THREE.WebGLRenderer;

  toggleIcon() {
    (this.currentIcon === 'light_mode') ? this.currentIcon = 'dark_mode' : this.currentIcon = 'light_mode';
  }

  private createScene() {
    // this.scene = new THREE.Scene();
  }

  private createCamera() {
    const width = this.el.nativeElement.clientWidth;
    const height = this.el.nativeElement.clientHeight;
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 5;
  }

  private createRenderer() {
    // this.renderer = new THREE.WebGLRenderer();
    // this.renderer.setSize(this.el.nativeElement.clientWidth, this.el.nativeElement.clientHeight);
    // this.el.nativeElement.appendChild(this.renderer.domElement);
  }

  private render() {
    // this.renderer.render(this.scene, this.camera);

    // Add your Three.js scene elements and animations here

    requestAnimationFrame(() => this.render());
  }

  constructor(private ngZone: NgZone, private el: ElementRef) {
    this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // Initialize the camera here
    this.camera.position.z = 5;
   }

  ngOnInit(): void {
    this.createScene();
    this.createCamera();
    this.createRenderer();
    this.render();
  }

}
