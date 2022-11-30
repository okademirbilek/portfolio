import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {CSS3DRenderer,CSS3DObject} from 'three/examples/jsm/renderers/CSS3DRenderer';




//projects data

import data from "./projects.js"
import gsap from 'gsap';
const library = new URL('./assets/library14.glb',import.meta.url);

const waterBaseColor = new URL("./img/Water_002_COLOR.jpg",import.meta.url);
const waterNormalMap = new URL("./img/Water_002_NORM.jpg",import.meta.url);
const waterHeightMap = new URL("./img/Water_002_DISP.png",import.meta.url);
const waterRoughness = new URL("./img/Water_002_ROUGH.jpg",import.meta.url);
const waterAmbientOcclusion = new URL("./img/Water_002_OCC.jpg",import.meta.url);

const drawing=new URL("./img/drawing.JPG",import.meta.url);




//proggresss bar 

const progressBar = document.getElementById('progress-bar')
const loadingManager =new THREE.LoadingManager()
const divInfo=document.querySelector("#info")
const progresslabel=document.querySelector("#progress-label")
const treeDot=document.querySelector(".lds-ellipsis")
loadingManager.onProgress=function(url,loaded,total){
    //console.log(`Started Loading: ${url}`)
    progressBar.value=(loaded/total)*100
    startButton.style.visibility='hidden'; 
    //console.log(progressBar.value);
    if(progressBar.value===100){
        //console.log("%1000000000000000")
        progresslabel.innerHTML="Loaded"
        treeDot.style.visibility="hidden"  
    }
}


loadingManager.onLoad = function ( ) {
	console.log( 'Loading complete!');
    startButton.style.visibility='visible';
};


const proggressBarContainer=document.querySelector('.progress-bar-container');
const startButton= document.getElementById('start-btn');
startButton.addEventListener("click",function(){
    proggressBarContainer.style.display= 'none';
    divInfo.style.visibility="visible"
    document.body.appendChild(renderer.domElement);
    document.body.appendChild(labelRenderer.domElement);
    labelRenderer.domElement.style.pointerEvents='none'    
})


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
const renderer = new THREE.WebGLRenderer({physicallyCorrectLights:true,antialias:true,powerPreference:'high-performance'});
//renderer.outputEncoding = THREE.sRGBEncoding;
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled=true;

//orbiti control etmek icin
// const orbit = new OrbitControls(camera, renderer.domElement);
// //orbit.target = new THREE.Vector3(0, 0, -40);
// orbit.enablePan=false
// orbit.update();
//yataydada azımuth kullan//enablepan false enablezoom false rotation
//outorotate =true outorotatespeed =4 sonra actıon ıcınde cagır controls.update();
//kamera posizyonu
//camera.position.set(-118.4, 90, -1.4);
camera.position.set(36.7490,30.929,84.7292);
camera.rotation.set(-0.07328,0.28583869,0.0206971);
camera.far=300;
camera.fov=45;
camera.zoom=1;
//camera.lookAt(new THREE.Vector3(-60,10,-80))
scene.background = new THREE.Color( 0x000000);

//-*---------------------label renderer for 3d css
const labelRenderer = new CSS3DRenderer();
labelRenderer.setSize(window.innerWidth,900);
labelRenderer.id="label2"
labelRenderer.domElement.style.position='absolute'
labelRenderer.domElement.style.pointerEvents='none'
labelRenderer.domElement.style.top='0px';


//gui to set object properties
// const gui=new dat.GUI();
// scene.add(gui)


//-----------------About me  part-------------------------------------------------------- 
const div2=document.createElement('div');
div2.className="cvdiv"

const text1=document.createElement("h1");
text1.id="home-header";
text1.innerHTML=`
      Hi im Okan
      Demirbilek
`; 

const text2=document.createElement("h1");
text2.id="home-header2";
text2.innerHTML=`
    Front-End Developer
`;

const ptag=document.createElement("p");
ptag.id="about--p";
ptag.textContent=`
        A passionate Front-End Developer trying to learn and 
        implement new things about web applications with JavaScript,
        Reactjs ,Threejs and some other cool libraries and frameworks.
        I enjoy what i'm doing and I want to show you my work.    
                        I hope you enjoy it !
`
;


let myimg=document.createElement("img")
myimg.id="myimg";
myimg.src="https://github.com/okademirbilek/dontdismantleit/blob/main/images/okan.jpg?raw=true"

const linkedin=document.createElement("a");
linkedin.href="https://www.linkedin.com/in/okan-demirbilek-55b314228/";
linkedin.className="fa fa-linkedin";
linkedin.target="__blank";

const github=document.createElement("a");
github.href="https://github.com/okademirbilek";
github.className="fa fa-github";
github.target="__blank";

const mailText=document.createElement("h1");
mailText.id="mailText";
mailText.innerHTML=`Okan_demirbilekgeo@hotmail.com`;

div2.appendChild(myimg);
div2.appendChild(text1);
div2.appendChild(text2);

div2.appendChild(ptag);

div2.appendChild(linkedin);
div2.appendChild(github);

div2.appendChild(mailText);

const divContainer2=new CSS3DObject(div2);
// divContainer2.id="divContainer2"
divContainer2.className="divContainer2";
divContainer2.scale.set(0.1,0.1,0.1)
divContainer2.position.x=75.9;
divContainer2.position.y=19.9;
divContainer2.position.z=66.6;
divContainer2.rotation.y=4.7;
scene.add(divContainer2);

//-------------------------------------Projects Part-------------------------------------------------------- 
let div3;
let divContainer3;
function mainProject(){
    div3=document.createElement('div');
    div3.className="div3";
    data.data.projects.map(item=>{

        return ( 
            
        div3.innerHTML+=`<div key=${item.id} class="map-item">
                                <h3 class="projects--name">${item.name}</h3>
                                <div class="project--img--div">
                                    <img  id=${item.id} class="project--img" src=${item.url} width="150px"  heigth="150px" ><img>
                                </div>
                            </div>
            `
            
            
        )

    })  


    divContainer3=new CSS3DObject(div3);
    //divContainer3.id="divContainer3";
    divContainer3.className="divContainer3";
    divContainer3.scale.set(0.1,0.1,0.1);
    divContainer3.position.x=-78.5;
    divContainer3.position.y=20.2;
    divContainer3.position.z=77;
    divContainer3.rotation.y=1.56;
    scene.add(divContainer3);
    
    

}

mainProject()

let div4;
let divContainer4;

div3.addEventListener( 'click', function ( event ) { 
    for(const i of data.data.projects ){
        if( event.target.id == i.id ) {
            //console.log("clicked",event.target.id)
            div4=document.createElement('div');
            div4.className="project--info--div"
            
    
            div4.innerHTML=   `<div class="project--div2">
                     <button class="back--btn" id="warning">back</button>
                    <p class="project--p2" >${i.name}</p>
                    <img class="project--img2" src=${i.url} width="150px  heigth="150px"><img>
                    <p class="project--inf" >${i.exp} </p>
                    <a class="project--github" target="__blank" href=${i.url2} >Github Link</a>

                </div>
                `

            divContainer4=new CSS3DObject(div4);
            divContainer4.id="divContainer4";
            divContainer4.scale.set(0.1,0.1,0.1);
        
            divContainer4.position.x=-78.5;
            divContainer4.position.y=20.2;
            divContainer4.position.z=77;
            divContainer4.rotation.y=1.56;
            scene.add(divContainer4);  


            console.log("burdayım")
            div4.addEventListener("click",function(event){
                if( event.target.className == "back--btn" ){
                    div4.style.visibility="hidden"   
                }
            })
            
                
        };   
    }    

})
//*********************************************************************************** */ */
const AxesHelper=new THREE.AxesHelper(50);
//scene.add(AxesHelper);

const textureLoader = new THREE.TextureLoader(loadingManager);

///********************drawing************************ */
var material = new THREE.MeshLambertMaterial({
    map: textureLoader.load(drawing.href)
  });
  
  // create a plane geometry for the image with a width of 10
  // and a height that preserves the image's aspect ratio
  var geometry = new THREE.PlaneGeometry(10, 10*.75);
  
  // combine our image geometry and material into a mesh
  var mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
mesh.position.set(-65,69.5,-62);
mesh.scale.set(3,3,3)


//***********************************OBJECTS************************************ */

// DIRECTIONAL LIGHT
const dirLight = new THREE.DirectionalLight(0xffffff, 1.0)
dirLight.position.x += 20
dirLight.position.y += 20
dirLight.position.z += 20
dirLight.castShadow = true
dirLight.shadow.mapSize.width = 4096;
dirLight.shadow.mapSize.height = 4096;
const d = 25;
dirLight.shadow.camera.left = - d;
dirLight.shadow.camera.right = d;
dirLight.shadow.camera.top = d;
dirLight.shadow.camera.bottom = - d;
dirLight.position.z = -30;

let target = new THREE.Object3D();
target.position.z = -30;
dirLight.target = target;
dirLight.target.updateMatrixWorld();

dirLight.shadow.camera.lookAt(0, 0, -30);
scene.add(dirLight);

//add water sphere to scene 

const sphereGeometry =new THREE.SphereBufferGeometry(6,128,128); 
//{ color: 0x0a7d15 }
const sphereMaterial =new THREE.MeshStandardMaterial({
    map: textureLoader.load(waterBaseColor.href), 
    normalMap: textureLoader.load( waterNormalMap.href), 
    displacementMap: textureLoader.load( waterHeightMap.href), displacementScale: 0.01, 
    roughnessMap: textureLoader.load(waterRoughness.href), roughness: 0, 
    aoMap: textureLoader.load(waterAmbientOcclusion.href) 


});

const plane = new THREE.Mesh( sphereGeometry,sphereMaterial);
plane.receiveShadow = true;
plane.position.set(39,47,-59)
plane.scale.set(0.7,0.7,0.7)

scene.add(plane);

const count = sphereGeometry.attributes.position.count;

const position_clone = JSON.parse(JSON.stringify(sphereGeometry.attributes.position.array)) ;
const normals_clone = JSON.parse(JSON.stringify(sphereGeometry.attributes.normal.array)) ;
const damping = 0.2;






//************************************************************ */
// ambient light
scene.add(new THREE.AmbientLight(0xffffff,0.75));


// POINT LIGHT
const light1 = new THREE.PointLight(0xff6666, 1.25, 100);
light1.castShadow = true;
light1.shadow.mapSize.width = 4096;
light1.shadow.mapSize.height = 4096;
scene.add(light1);

const light2 = new THREE.PointLight(0x33ff33, 1.25, 100);
light2.castShadow = true;
light2.shadow.mapSize.width = 4096;
light2.shadow.mapSize.height = 4096;
scene.add(light2);



//***********************FIRST PERSON CONTROLS********** */
// const controls = new FirstPersonControls( camera, renderer.domElement );
// controls.movementSpeed = 8;
// controls.lookSpeed = 0.08;

//MAIN OBJECT SCENE
//add main object to scene 
const assetLoader = new GLTFLoader(loadingManager);
let position = 0;
assetLoader.load(library.href,function(gltf){
    const model=gltf.scene;

    model.scale.set(0.2,0.2,0.2);
    model.position.x=-60
    model.position.z=-40
    model.castShadow = true;
    model.receiveShadow = true;
    scene.add(model)

    //mouse whell functiong to move camera
    window.addEventListener('wheel', function() {
        // console.log(camera.position)
        // console.log(camera.rotation)
        switch(position) {
            case 0:
                moveCamera(-40.56044502123119,37.22627298743988, 65.85183571364873);
                rotateCamera(-1.711076171194553, -1.42687905441128, -1.7125221205946737);
                position = 1;
                break;
            case 1:
                moveCamera(36.7490,30.929,84.7292);
                rotateCamera(-0.07328,0.28583869,0.0206971);
                position = 2;
                break; 
            
            case 2:
                moveCamera(-5.704, 24.283, 28.577);
                rotateCamera(-0.010, -0.100, -0.001);
                position = 3;
                break;

            case 3:
                moveCamera(36.7490,30.929,84.7292);
                rotateCamera(-0.07328,0.28583869,0.0206971);
                position = 4;
                break; 

            case 4:
                moveCamera(9.452, 23.750, 70.4134);
                rotateCamera(-1.125546, 1.51439, 1.124927);
                position = 5;
                break;  
 
                
            case 5:
                moveCamera(36.7490,30.929,84.7292);
                rotateCamera(-0.07328,0.28583869,0.0206971);
                position = 6;
                break; 


            case 6:
                moveCamera(-48.2780,75.81835,1.0000831);
                rotateCamera(-0.1812120,0.190572,0.034692);
                position = 7;
                break; 

            case 7:
                moveCamera(36.7490,30.929,84.7292);
                rotateCamera(-0.07328,0.28583869,0.0206971);
                position = 0;
                break; 

         }



    });


    //click event to move camera
    const homeEvent=document.querySelector("#homeEvent")
    const aboutMeEvent=document.querySelector("#aboutMeEvent")
    const skillsEvent=document.querySelector("#skillsEvent")
    const projectsEvent=document.querySelector("#projectsEvent")
    const hobbiEvent =document.querySelector("#hobbiesEvent")
    console.log(homeEvent)
    aboutMeEvent.addEventListener("click",function(){
        moveCamera(-40.56044502123119,37.22627298743988, 65.85183571364873);
        rotateCamera(-1.711076171194553, -1.42687905441128, -1.7125221205946737);
        position = 1; 
    })
    skillsEvent.addEventListener("click",function(){
        moveCamera(-5.704, 24.283, 28.577);
        rotateCamera(-0.010, -0.100, -0.001);
        position=3;
    })
    projectsEvent.addEventListener("click",function(){
        moveCamera(9.452, 23.750, 70.4134);
        rotateCamera(-1.125546, 1.51439, 1.124927);
        position = 5;
    })


    hobbiEvent.addEventListener("click",function(){
        moveCamera(-48.2780,75.81835,1.0000831);
        rotateCamera(-0.1812120,0.190572,0.034692);
        position = 7;

    })

    homeEvent.addEventListener("click",function(){
        moveCamera(36.7490,30.929,84.7292);
        rotateCamera(-0.07328,0.28583869,0.0206971);
        position = 0;

    })




    //set gsap functions to move camera
    function moveCamera(x, y, z) {
        gsap.to(camera.position, {
            x,
            y,
            z,
            duration: 2
        });
    }

    function rotateCamera(x, y, z) {
        gsap.to(camera.rotation, {
            x,
            y,
            z,

            duration: 2
        });
    }



},undefined,function(error){
    console.error(error);
});




//-------------------- ANIMATE FUNCTION--------------------- 
const clock = new THREE.Clock();
function animate(time){
    //camera controls
    //controls.update(clock.getDelta());

    const now = Date.now() / 1000;
    light1.position.y = 15;
    light1.position.x = Math.cos(now) * 20;
    light1.position.z = Math.sin(now) * 20;

    light2.position.y = 15;
    light2.position.x = Math.sin(now) * 20;
    light2.position.z = Math.cos(now) * 20;



    // SINE WAVE
    const now2 = Date.now() / 200;

    // iterate all vertices
    for (let i = 0; i < count; i++) {
        // indices
        const ix = i * 3
        const iy = i * 3 + 1
        const iz = i * 3 + 2

        // use uvs to calculate wave
        const uX = sphereGeometry.attributes.uv.getX(i) * Math.PI * 16
        const uY = sphereGeometry.attributes.uv.getY(i) * Math.PI * 16

        // calculate current vertex wave height
        const xangle = (uX + now2)
        const xsin = Math.sin(xangle) * damping
        const yangle = (uY + now2)
        const ycos = Math.cos(yangle) * damping

        // set new position
        sphereGeometry.attributes.position.setX(i, position_clone[ix] + normals_clone[ix] * (xsin + ycos))
        sphereGeometry.attributes.position.setY(i, position_clone[iy] + normals_clone[iy] * (xsin + ycos))
        sphereGeometry.attributes.position.setZ(i, position_clone[iz] + normals_clone[iz] * (xsin + ycos))
    }
    sphereGeometry.computeVertexNormals();
    sphereGeometry.attributes.position.needsUpdate = true;

    labelRenderer.render(scene,camera);
    
    requestAnimationFrame(animate);  
    //set the scene in the camera
    renderer.render(scene,camera);
    
}

animate();



//size of the win dow
window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    labelRenderer.setSize(this.window.innerWidth,this.window.innerHeight);
});

      

    

