// import React Application
import renderApp from './react-app/index';

/* Render React Application */
if (document.getElementById('react-app-root')) renderApp();


/* Demo Page */
// Text animation
// if (document.querySelector('.Presentation')) {
//   import('./utils/animations')
//     .then((module) => {
//       module.default();
//     });
// }

gsap.registerPlugin(CSSRulePlugin);

if (document.querySelector('.Presentation')) {
  // GSAP Animation
  // Loading GSAP plugins

  // Texts animation
  // const triggerAnimation = () => {
  //   const rule1 = CSSRulePlugin.getRule('.Presentation__headline-text:after');
  //   const rule2 = CSSRulePlugin.getRule('.Presentation__version-info:after');
  //   const rule3 = CSSRulePlugin.getRule('.Presentation__special-message:after');

  //   const timeLine = gsap.timeline({ delay: 1 });

  //   timeLine
  //     .to('.Presentation__section-line', { duration: 3.5, scale: 1, transformOrigin: "50% 50%", ease: Power4.easeOut, delay: 1 })
  //     .to(rule1, { duration: 1, cssRule: { scaleY: 0 } }, "-=1")
  //     .to(rule2, { duration: 1, cssRule: { scaleY: 0 } })
  //     .to(rule3, { duration: 1, cssRule: { scaleY: 0 } }, "-=0.5");
  // }

  // triggerAnimation();

  const timeLine = gsap.timeline({ 
    delay: 1,
    yoyo:true, 
    repeat: -1,
    repeatDelay: 2
  });

  // gsap.set('#source-code-container-artboard', {});

  // Device Animation
  timeLine
    .addLabel('deviceFrame')
    .from('#outter', { duration: 2, opacity: 0, transformOrigin: "0 0", scale: 1 }, 'deviceFrame')
    .from('#inner', { duration: 2, opacity: 0, transformOrigin: "0 0",  scale: 1 }, 'deviceFrame')
    .from('#middle', { duration: 2, opacity: 0, transformOrigin: "0 100",  scale: 1 }, 'deviceFrame')
    .addLabel('lightEffect')
    .from('#spotlight', { duration: 2, opacity: 0, transformOrigin: "0 0", scale: 1 }, 'lightEffect')
    .from('#screen-reflection', { duration: 2, opacity: 0, transformOrigin: "0 0", scale: 1 }, 'lightEffect')
    .from('#content-background', { duration: 1, opacity: 0, transformOrigin: "0 0", scaleY: 0 })
    .from('#image-background', { duration: 1, opacity: 0, transformOrigin: "0 0", scaleY: 0 })
    .from('#cross-lines', { duration: 1, transformOrigin: "50% 50%", scale: 0 })
    .from('#headline', { duration: 1, opacity: 0, transformOrigin: "0 100%", scaleX: 0 })
    .from('#paragraph', { duration: 1, opacity: 0, transformOrigin: "0 100%", scaleX: 0 })
    .from('#button', { duration: 1, opacity: 0, transformOrigin: "0 100%", scaleX: 0 })
    // source-code-container
    .addLabel('sourcecode')
    .fromTo('#source-code-container-artboard', {  opacity: 0, x: 50, rotationY: "90"}, { duration: 5, x: -200, opacity: 1, rotationY: '0'}, 'sourcecode')
    .from('#source-code', { duration: 2, opacity: 0, width: 0}, 'sourcecode')
};
