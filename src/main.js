import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {stories,films,photoURL} from './stories.js';
import {ribbonProgress,nearestFrameAngle} from './interaction-math.js';
gsap.registerPlugin(ScrollTrigger);
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const $=s=>document.querySelector(s);
const isHome=!!$('#camera-canvas');
const disposables=[];
if(isHome){
 const rows=$('#case-rows'),fallback=$('#ribbon-fallback');
 stories.forEach((s,i)=>rows.insertAdjacentHTML('beforeend',`<a class="case-row" data-story="${i}" href="/stories/${s.slug}/"><small>${String(i+1).padStart(2,'0')}.</small><span>${s.title}</span><span>${s.category}</span></a>`));
 const ribbonStories=[0,1,2,3,4,0,1,2];
 ribbonStories.forEach((s,i)=>fallback.insertAdjacentHTML('beforeend',`<a href="/stories/${stories[s].slug}/" data-story="${s}" style="--i:${i}" aria-label="Open ${stories[s].title}"><img src="${photoURL(stories[s].cover)}" alt="${stories[s].title}" loading="lazy"></a>`));
 films.forEach((f,i)=>$('#video-panels').insertAdjacentHTML('beforeend',`<button class="video-panel" data-film="${i}" style="--film-aspect:${f.aspect}" aria-label="Play ${f.title}"><video src="/assets/preview-${i}.mp4" poster="/assets/film-${i}.jpg" muted loop playsinline preload="none" aria-hidden="true"></video><div class="film-meta"><span>FILM ${String(i+1).padStart(2,'0')}</span><span>${f.duration}</span></div><h3>${f.title}</h3><span class="play-label">SELECT TO PLAY</span></button>`));
 const previewObserver=new IntersectionObserver(entries=>entries.forEach(e=>{const v=e.target;v.dataset.visible=e.isIntersecting?'1':'0';if(e.isIntersecting&&!reduced&&!$('#film-dialog').open)v.play().catch(()=>{});else v.pause()}),{threshold:.15});
 document.querySelectorAll('.video-panel video').forEach(v=>previewObserver.observe(v));disposables.push(()=>previewObserver.disconnect());
 const dialog=$('#film-dialog'),full=$('#full-film'),playButton=$('#film-play');let selected=null,filmMotion=null,filmState='closed';
 const resumePreviews=()=>document.querySelectorAll('.video-panel video').forEach(v=>{if(v.dataset.visible==='1'&&!reduced&&!document.hidden)v.play().catch(()=>{})});
 const startFilm=()=>{if(filmState!=='playing')return;full.controls=true;playButton.hidden=true;full.play().catch(()=>{if(filmState==='playing')playButton.hidden=false})};
 playButton.addEventListener('click',startFilm);
 document.querySelectorAll('.video-panel').forEach(panel=>panel.addEventListener('click',()=>{
  if(filmState!=='closed')return;
  selected=panel;filmState='opening';const i=Number(panel.dataset.film);document.querySelectorAll('.video-panel video').forEach(v=>v.pause());
  $('#film-dialog-title').textContent=films[i].title;$('#film-caption').textContent=films[i].caption;full.src=`/assets/film-${i}.mp4`;full.poster=`/assets/film-${i}.jpg`;full.style.aspectRatio=films[i].aspect;full.muted=false;full.loop=false;full.controls=false;playButton.hidden=true;dialog.showModal();document.body.classList.add('modal-open');
  const ready=()=>{filmState='playing';startFilm()};
  if(reduced){ready();return}
  const a=panel.querySelector('video').getBoundingClientRect(),b=full.getBoundingClientRect();
  filmMotion=gsap.timeline({onComplete:ready}).fromTo(full,{x:a.left-b.left,y:a.top-b.top,scaleX:a.width/b.width,scaleY:a.height/b.height,rotationY:-17,transformOrigin:'top left'},{x:0,y:0,scaleX:1,scaleY:1,rotationY:0,duration:.75,ease:'power3.inOut',clearProps:'transform,transformOrigin'},0).fromTo('.player-top, #film-caption',{opacity:0},{opacity:1,duration:.25},.5);
 }));
 const closeFilm=()=>{
  if(filmState==='closed'||filmState==='closing')return;
  filmState='closing';filmMotion?.kill();full.pause();full.controls=false;playButton.hidden=true;
  const finish=()=>dialog.close();
  if(reduced||!selected){finish();return}
  const a=selected.querySelector('video').getBoundingClientRect(),b=full.getBoundingClientRect();
  filmMotion=gsap.timeline({onComplete:finish}).to('.player-top, #film-caption',{opacity:0,duration:.15},0).to(full,{x:a.left-b.left,y:a.top-b.top,scaleX:a.width/b.width,scaleY:a.height/b.height,rotationY:-17,transformOrigin:'top left',duration:.55,ease:'power3.inOut'},0);
 };
 $('#film-close').addEventListener('click',closeFilm);dialog.addEventListener('cancel',e=>{e.preventDefault();closeFilm()});dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeFilm()}});
 dialog.addEventListener('close',()=>{filmMotion?.kill();filmState='closed';full.pause();full.removeAttribute('src');full.load();gsap.set(full,{clearProps:'transform,transformOrigin'});gsap.set('.player-top, #film-caption',{clearProps:'opacity'});document.body.classList.remove('modal-open');resumePreviews();selected?.focus()});
 document.addEventListener('visibilitychange',()=>{if(document.hidden){document.querySelectorAll('video').forEach(v=>v.pause())}else if(!dialog.open)resumePreviews()});
 const enq=$('#enquiry-dialog');$('#enquiry-open').addEventListener('click',()=>{enq.showModal();document.body.classList.add('modal-open')});$('#enquiry-close').addEventListener('click',()=>enq.close());enq.addEventListener('close',()=>document.body.classList.remove('modal-open'));
 $('#enquiry-form').addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.target);const message=`Hello Joseph,\n\nMy name is ${d.get('name')}. I'm enquiring about ${d.get('service').toLowerCase()} photography.\n${d.get('date')?'Date: '+d.get('date')+'\n':''}${d.get('location')?'Location: '+d.get('location')+'\n':''}\n${d.get('message')}\n\nYou can reach me at ${d.get('email')}.`;$('#enquiry-message').value=message;$('#email-enquiry').href=`mailto:josephsaadeh.photo@gmail.com?subject=${encodeURIComponent(d.get('service')+' photography enquiry')}&body=${encodeURIComponent(message)}`;e.target.hidden=true;$('#enquiry-result').hidden=false;$('#email-enquiry').focus()});
 $('#edit-enquiry').addEventListener('click',()=>{$('#enquiry-form').hidden=false;$('#enquiry-result').hidden=true;$('#enquiry-form input').focus()});
 $('#copy-enquiry').addEventListener('click',async()=>{try{await navigator.clipboard.writeText($('#enquiry-message').value);$('#copy-status').textContent='Message copied.'}catch{$('#enquiry-message').select();$('#copy-status').textContent='Select and copy the message above.'}});
 // The camera introduction unfolds with the visitor's own scroll.
 if(!reduced){const tl=gsap.timeline({scrollTrigger:{trigger:'.camera-section',start:'top top',end:'bottom bottom',scrub:1}});tl.to('.hero-heading',{y:-75,opacity:0,duration:.35},0).fromTo('.intro-copy',{y:35,opacity:0},{y:0,opacity:1,duration:.3},.3).to('.camera-stage',{xPercent:9,yPercent:innerWidth<700?40:0,scale:innerWidth<700?.72:.85,duration:.6},.1).to('.camera-note',{opacity:0,duration:.25},.45).to('.hero-actions',{opacity:0,pointerEvents:'none',duration:.2},.1);}
 if(!reduced){gsap.from('.collection-image img',{scale:1.08,ease:'none',scrollTrigger:{trigger:'.collection-editorial',start:'top bottom',end:'bottom top',scrub:1}});}
 // The same selected story drives the ribbon, fallback links and case-study index.
 let activeStory=0,syncRibbonSelection=()=>{};
 const highlightStory=(i,source='pointer')=>{activeStory=i;const s=stories[i];$('#ribbon-label').href=`/stories/${s.slug}/`;$('#ribbon-label').innerHTML=`${String(i+1).padStart(2,'0')} / ${s.title}<span>OPEN STORY</span>`;document.querySelectorAll('.case-row,.ribbon-fallback a').forEach(r=>r.classList.toggle('active',Number(r.dataset.story)===i));syncRibbonSelection(i,source)};
 highlightStory(0);document.querySelectorAll('.case-row,.ribbon-fallback a').forEach(r=>{r.addEventListener('pointerenter',()=>highlightStory(Number(r.dataset.story),'case'));r.addEventListener('focus',()=>highlightStory(Number(r.dataset.story),'case'))});
 const chapterSections=[['about','01 / THE PHOTOGRAPHER'],['work','02 / SELECTED STORIES'],['films','03 / IN MOTION'],['collections','04 / THROUGH THE LENS'],['contact','05 / YOUR NEXT CHAPTER']];
 const updateHUD=()=>{const max=document.documentElement.scrollHeight-innerHeight;$('#timeline-progress').style.left=`${max?scrollY/max*100:0}%`;for(const [id,name]of chapterSections)if(document.getElementById(id).getBoundingClientRect().top<innerHeight*.45)$('#chapter').textContent=name};window.addEventListener('scroll',updateHUD,{passive:true});updateHUD();
 if(!reduced)document.querySelectorAll('.still-object').forEach((el,i)=>gsap.fromTo(el,{y:[75,30,55,110][i],rotation:[-5,3,-3,5][i]},{y:[-30,-12,-22,-48][i],rotation:0,ease:'none',scrollTrigger:{trigger:'.contact-section',start:'top bottom',end:'bottom bottom',scrub:1}}));
 // WebGL is optional; real model renders and ordinary links remain when unavailable.
 const createRenderer=canvas=>{try{const context=canvas.getContext('webgl2',{alpha:true,antialias:true,powerPreference:'low-power'});if(!context)return null;const r=new THREE.WebGLRenderer({canvas,context,alpha:true,antialias:true});r.setPixelRatio(Math.min(devicePixelRatio,1.75));r.outputColorSpace=THREE.SRGBColorSpace;return r}catch{return null}};
 const cameraRenderer=createRenderer($('#camera-canvas'));
 if(cameraRenderer){
  const scene=new THREE.Scene(),cam=new THREE.PerspectiveCamera(34,1,.01,100),group=new THREE.Group();scene.add(group);cam.position.set(3.2,2.2,10);cam.lookAt(0,0,0);let visible=true,pointerX=0,pointerY=0;
  const resize=()=>{const rect=$('.camera-stage').getBoundingClientRect();cameraRenderer.setSize(rect.width,rect.height,false);cam.aspect=rect.width/rect.height;cam.updateProjectionMatrix()};resize();const ro=new ResizeObserver(resize);ro.observe($('.camera-stage'));disposables.push(()=>ro.disconnect());
  new GLTFLoader().load('/assets/camera.glb',g=>{const model=g.scene;for(const name of ['hotshoeattachment_GRP','FILMnotANIM_GRP']){const o=model.getObjectByName(name);if(o)o.removeFromParent()}model.updateMatrixWorld(true);const box=new THREE.Box3().setFromObject(model),size=box.getSize(new THREE.Vector3());model.position.sub(box.getCenter(new THREE.Vector3()));group.scale.setScalar(5.1/Math.max(size.x,size.y,size.z));group.add(model);model.traverse(m=>{if(!m.isMesh)return;m.material=new THREE.MeshBasicMaterial({color:0x101010,polygonOffset:true,polygonOffsetFactor:1,polygonOffsetUnits:1});const edges=new THREE.LineSegments(new THREE.EdgesGeometry(m.geometry,23),new THREE.LineBasicMaterial({color:0xb6b2a7,transparent:true,opacity:.9}));m.add(edges)});group.rotation.y=-.35;$('.camera-stage').classList.add('loaded')},undefined,()=>cameraRenderer.dispose());
  if(!reduced)window.addEventListener('pointermove',e=>{pointerX=(e.clientX/innerWidth-.5)*.12;pointerY=(e.clientY/innerHeight-.5)*.08},{passive:true});
  const obs=new IntersectionObserver(e=>{visible=e[0].isIntersecting},{rootMargin:'50px'});obs.observe($('.camera-section'));disposables.push(()=>obs.disconnect());
  cameraRenderer.setAnimationLoop(()=>{if(!visible||document.hidden)return;const rect=$('.camera-section').getBoundingClientRect(),p=THREE.MathUtils.clamp(-rect.top/(rect.height-innerHeight),0,1);group.rotation.y=THREE.MathUtils.lerp(group.rotation.y,-.35+(reduced?0:p*Math.PI*1.5)+pointerX,.06);group.rotation.x=THREE.MathUtils.lerp(group.rotation.x,pointerY,.05);cameraRenderer.render(scene,cam)});disposables.push(()=>{cameraRenderer.setAnimationLoop(null);scene.traverse(o=>{if(o.geometry)o.geometry.dispose();if(o.material){const ms=Array.isArray(o.material)?o.material:[o.material];ms.forEach(m=>m.dispose())}});cameraRenderer.dispose()});
 }
 const ribbonRenderer=createRenderer($('#ribbon-canvas'));
 if(ribbonRenderer){
  const scene=new THREE.Scene(),cam=new THREE.PerspectiveCamera(39,1,.1,100);cam.position.set(0,0,10.8);cam.lookAt(0,0,0);const group=new THREE.Group();scene.add(group);let mesh,texture,visible=false,hoverFrame=-1,selectionAngle=null,selectionProgress=0;
  const resize=()=>{const rect=$('.ribbon-stage').getBoundingClientRect();ribbonRenderer.setSize(rect.width,rect.height,false);cam.aspect=rect.width/rect.height;cam.position.z=innerWidth<700?11:10.8;cam.updateProjectionMatrix()};resize();const ro=new ResizeObserver(resize);ro.observe($('.ribbon-stage'));disposables.push(()=>ro.disconnect());
  const atlas=document.createElement('canvas');atlas.width=4096;atlas.height=384;const ctx=atlas.getContext('2d');
  const images=await Promise.all(ribbonStories.map(i=>new Promise(resolve=>{const img=new Image();img.onload=()=>resolve(img);img.onerror=()=>resolve(null);img.src=photoURL(stories[i].cover)})));
  const paint=()=>{ctx.clearRect(0,0,4096,384);ctx.fillStyle='#ae9064';ctx.fillRect(0,0,4096,384);images.forEach((img,i)=>{const x=i*512;if(img){const ratio=Math.max(500/img.width,280/img.height),w=500/ratio,h=280/ratio;ctx.drawImage(img,(img.width-w)/2,(img.height-h)/2,w,h,x+6,52,500,280)}ctx.fillStyle='#1b1109';ctx.font='15px monospace';ctx.fillText(`${String(i+1).padStart(2,'0')}  J. SAADEH  35mm`,x+28,374);if(ribbonStories[i]===activeStory){ctx.strokeStyle='#ffe0a4';ctx.lineWidth=8;ctx.strokeRect(x+7,53,498,278)}for(let j=0;j<12;j++){ctx.clearRect(x+j*42+8,7,23,29);ctx.clearRect(x+j*42+8,341,23,24)}});if(texture)texture.needsUpdate=true};paint();texture=new THREE.CanvasTexture(atlas);texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=Math.min(4,ribbonRenderer.capabilities.getMaxAnisotropy());
  const segments=320,positions=[],uv=[],indices=[];
  for(let i=0;i<=segments;i++){const t=i/segments,a=t*Math.PI*4.4;for(let j=0;j<2;j++){positions.push(1.8*Math.sin(a),(t-.5)*7.5+(j-.5)*1.15,1.8*Math.cos(a));uv.push(t,j)}}
  for(let i=0;i<segments;i++){const a=i*2;indices.push(a,a+1,a+2,a+1,a+3,a+2)}const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geo.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geo.setIndex(indices);geo.computeVertexNormals();mesh=new THREE.Mesh(geo,new THREE.MeshBasicMaterial({map:texture,side:THREE.DoubleSide,transparent:true,alphaTest:.1}));group.add(mesh);group.rotation.z=-.035;$('.ribbon-stage').classList.add('loaded');
  syncRibbonSelection=(story,source)=>{paint();if(source==='case'){const candidates=ribbonStories.flatMap((s,i)=>s===story?[nearestFrameAngle(group.rotation.y,i)]:[]);selectionAngle=candidates.sort((a,b)=>Math.abs(a-group.rotation.y)-Math.abs(b-group.rotation.y))[0];selectionProgress=getRibbonProgress()}};
  const getRibbonProgress=()=>{const mobile=innerWidth<700,rect=$(mobile?'.ribbon-scroll':'.filmstrip-layout').getBoundingClientRect();return ribbonProgress(rect.top,rect.height,innerHeight,mobile?90:0)};
  const ray=new THREE.Raycaster(),pointer=new THREE.Vector2();
  const frameAt=e=>{const r=$('#ribbon-canvas').getBoundingClientRect();pointer.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);ray.setFromCamera(pointer,cam);const hit=ray.intersectObject(mesh)[0];return hit?.uv?Math.min(7,Math.floor(hit.uv.x*8)):-1};
  $('#ribbon-canvas').addEventListener('pointermove',e=>{const frame=frameAt(e);if(frame!==hoverFrame){hoverFrame=frame;paint();if(frame>=0)highlightStory(ribbonStories[frame]);$('#ribbon-canvas').style.cursor=frame<0?'default':'pointer'}});$('#ribbon-canvas').addEventListener('pointerleave',()=>{hoverFrame=-1;paint()});$('#ribbon-canvas').addEventListener('click',e=>{const frame=frameAt(e);if(frame>=0)openStory(stories[ribbonStories[frame]],e.clientX,e.clientY)});
  const obs=new IntersectionObserver(e=>{visible=e[0].isIntersecting},{rootMargin:'100px'});obs.observe($('.ribbon-stage'));disposables.push(()=>obs.disconnect());
  ribbonRenderer.setAnimationLoop(()=>{if(!visible||document.hidden)return;const p=getRibbonProgress();if(selectionAngle!==null&&Math.abs(p-selectionProgress)>.015)selectionAngle=null;const angle=selectionAngle??(reduced?-.65:p*Math.PI*1.8-.65);group.rotation.y=reduced?angle:THREE.MathUtils.lerp(group.rotation.y,angle,.08);ribbonRenderer.render(scene,cam)});disposables.push(()=>{ribbonRenderer.setAnimationLoop(null);geo.dispose();mesh.material.dispose();texture.dispose();ribbonRenderer.dispose()});
 }
 const rememberPosition=()=>{try{sessionStorage.setItem('joseph-work-scroll',String(scrollY))}catch{}};document.querySelectorAll('a[href^="/stories/"]').forEach(a=>a.addEventListener('click',rememberPosition));
 function openStory(s,x=innerWidth/2,y=innerHeight/2){rememberPosition();if(reduced){location.assign(`/stories/${s.slug}/`);return}const image=document.createElement('img');image.className='story-transition';image.src=photoURL(s.cover);image.alt='';Object.assign(image.style,{position:'fixed',left:`${x-80}px`,top:`${y-100}px`,width:'160px',height:'200px',objectFit:'cover',zIndex:'100',pointerEvents:'none'});document.body.append(image);gsap.to(image,{left:0,top:0,width:innerWidth,height:innerHeight,duration:.55,ease:'power3.inOut',onComplete:()=>location.assign(`/stories/${s.slug}/`)})}
 window.addEventListener('pagehide',e=>{if(!e.persisted)disposables.forEach(f=>f())});window.addEventListener('pageshow',()=>document.querySelectorAll('.story-transition').forEach(el=>el.remove()));
 if(location.hash==='#work'){try{const previous=Number(sessionStorage.getItem('joseph-work-scroll'));if(previous>0)requestAnimationFrame(()=>{window.scrollTo({top:previous,behavior:'instant'});ScrollTrigger.update()})}catch{}}
 ScrollTrigger.refresh();
}
