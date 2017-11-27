/**
* Canvas
* @type {DOMElement}
*/
var __canvas = document.querySelector('.display__canvas');


/**
* Parameters
*/
var BACKGROUND_COLOR = 0x2b2b2b;
var WIDTH = __canvas.clientWidth;
var HEIGHT = __canvas.clientHeight;


/**
 * Handlers
 */
var __camera = undefined;
var __controls = undefined;
var __renderer = undefined;


/**
 * Objects
 */
var cube = undefined;


/**
* Methods
*/
function createCamera() {
    return new THREE.PerspectiveCamera( 75, WIDTH / HEIGHT, 0.1, 1000 );
}

function createControls(camera) {
    return new THREE.OrbitControls(camera);
}

function createRenderer() {
    var renderer = new THREE.WebGLRenderer(
        {
            canvas: __canvas,
        }
    );

    renderer.setSize(WIDTH, HEIGHT);
    renderer.setClearColor(BACKGROUND_COLOR);

    return renderer;
}

function init() {
    __camera = createCamera();
    __controls = createControls(__camera);
    __renderer = createRenderer();
}

function start() {
    // Aditional Set-up ...
    __camera.position.z = 100;
    __camera.position.y = -70;
    __controls.enableZoom = false;
    __controls.enablePan = false;
    __controls.enableRotation = false;


    Scene.load('main-menu');
    game();
}


/**
* Main Game Loop
*/
function game() {
    requestAnimationFrame(game);
    Scene.active._update();
    __controls.update();
    __renderer.render(Scene.active.scene, __camera);
}


init();
start();
