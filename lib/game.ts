import {
    Engine
  , FreeCamera
  , HemisphericLight
  , MeshBuilder
  , Scene
  , Vector3
} from 'babylonjs'

export default class Game {
  private _canvas: HTMLCanvasElement
  private _engine: Engine
  private _scene!: Scene
  private _camera!: FreeCamera

  constructor(canvasElement : HTMLCanvasElement) {
    this._canvas = canvasElement
    this._engine = new Engine(this._canvas, true)
  }

  createScene() : Game {
    this._scene = new Scene(this._engine)

    const cameraPos = new Vector3(0, 5, -10)
    this._camera = new FreeCamera('maincam', cameraPos, this._scene)
    this._camera.setTarget(Vector3.Zero())
    this._camera.attachControl(this._canvas, false)

    const lightPos = new Vector3(0, 1, 0)
    new HemisphericLight('hemlight', lightPos, this._scene)

    const sphereOpts = { segments: 16, diameter: 1 }
    let sphere = MeshBuilder.CreateSphere('mainsphere', sphereOpts, this._scene)
    sphere.position.y = 1

    const groundOpts = { width: 6, height: 6, subdivisions: 2 }
    MeshBuilder.CreateGround('mainground', groundOpts, this._scene)
    return this
  }

  animate() : Game {
    this._engine.runRenderLoop(() => this._scene.render())
    return this
  }
}
