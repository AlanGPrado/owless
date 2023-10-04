import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as three from 'three';
import { ShareVariableService } from 'src/app/services/share-variable.service';


@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss']
})
export class AnimationComponent implements OnInit, AfterViewInit {
  hex: number = 0;
  @ViewChild('canvas')
  private canvasRef!: ElementRef;

  // Cube properties
  @Input() public rotationSpeedX: number = 0.01;
  @Input() public rotationSpeedY: number = 0.01;
  @Input() public size: number = 200;
  @Input() public texture: string = "assets/cube.png";

  // Stage properties

  @Input() public cameraZ: number = 400;
  @Input() public fieldOfView: number = 1;
  @Input('nearClipping') public nearClippingPlane: number = 1;
  @Input('farClipping') public farClippingPlane: number = 1000;

  // Helper Properties

  private camera!: three.PerspectiveCamera;
  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }
  private loader = new three.TextureLoader();
  private geometry = new three.BoxGeometry(2, 2, 2);
  private material = new three.MeshBasicMaterial({ map: this.loader.load(this.texture) });
  private cube: three.Mesh = new three.Mesh(this.geometry, this.material);
  private renderer!: three.WebGLRenderer
  private scene!: three.Scene;
  private createScene() {
    // Scene
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const bodyClassList = document.body.classList;

          if (bodyClassList.contains('light-mode')) {
            // console.log("DOLLY")
            this.hex = 0xf0e7db;
          } else if (bodyClassList.contains('dark-mode')) {
            // console.log("NEGRA")
            this.hex = 0x202023;
          }

          this.scene.background = new three.Color(this.hex);
        }
      }
    });

    // Configure and start observing changes to the class attribute
    observer.observe(document.body, { attributes: true });

    // Initialize the scene with the initial class state
    const bodyClassList = document.body.classList;
    if (bodyClassList.contains('light-mode')) {
      this.hex = 0xf0e7db;
    } else if (bodyClassList.contains('dark-mode')) {
      this.hex = 0x202023;
    }

    this.scene = new three.Scene();
    this.scene.background = new three.Color(this.hex);
    this.scene.add(this.cube);

    // Camera
    let aspectRatio = this.getAspectRatio();
    this.camera = new three.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPlane,
      this.farClippingPlane
    );
    this.camera.position.z = this.cameraZ;
  }

  // private createScene() {
  //   // Scene
  //   if (document.body.classList.contains('light-mode')) {
  //     console.log("DOLLY")
  //     this.hex = 0xf0e7db;
  //   }
  //   else if (document.body.classList.contains('dark-mode')) {
  //     console.log("NEGRA")
  //     this.hex = 0x202023;
  //   }
  //   this.scene = new three.Scene();
  //   this.scene.background = new three.Color(this.hex);
  //   this.scene.add(this.cube);
  //   // Camera
  //   let aspectRatio = this.getAspectRatio();
  //   this.camera = new three.PerspectiveCamera(
  //     this.fieldOfView,
  //     aspectRatio,
  //     this.nearClippingPlane,
  //     this.farClippingPlane
  //   )
  //   this.camera.position.z = this.cameraZ;
  // }

  private getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  private animateCube() {
    this.cube.rotation.x += this.rotationSpeedX;
    this.cube.rotation.y += this.rotationSpeedY;
    this.cube.rotation.z += 0.01;

  }

  private startRenderingLoop() {
    // Renderer
    this.renderer = new three.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    let component: AnimationComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.animateCube();
      component.renderer.render(component.scene, component.camera);
    }());
  }

  constructor(private sharedService: ShareVariableService) {
  }

  ngAfterViewInit(): void {
    this.createScene();
    this.startRenderingLoop();
  }

  ngOnInit(): void {

  }

}
