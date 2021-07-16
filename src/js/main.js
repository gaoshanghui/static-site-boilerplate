// import React Application
import renderApp from './react-app/index';

/* Render React Application */
if (document.getElementById('react-app-root')) renderApp();


/* Intro Page */

// Web Animation
if (document.querySelector('.intro-web-animation')) {
  // Main timeline, other timelines will be added into this one.
  const timelineMain = gsap.timeline({
    delay: 1,
    yoyo: true,
    repeat: -1,
    repeatDelay: 2
  });


  // Timeline creater
  // animate device frame
  function timelineDeviceFrame() {
    const outerDeviceFrame = document.querySelector('#outer');
    const outerDeviceFrameLength = outerDeviceFrame.getTotalLength();
    const innerDeviceFrame = document.querySelector('#inner');
    const innerDeviceFrameLength = innerDeviceFrame.getTotalLength();
    const middelDeviceFrame = document.querySelector('#middle');

    const contentBackground = document.querySelector('#content-background');
    const spotlight = document.querySelector('#spotlight');
    const screenReflection = document.querySelector('#screen-reflection');

    const tl = gsap.timeline();

    tl
      .addLabel('drawDeviceFrameSameTime')
      .fromTo(outerDeviceFrame, { strokeDasharray: outerDeviceFrameLength, strokeDashoffset: outerDeviceFrameLength, opacity: 0, transformOrigin: '50% 50%', rotation: 180, fill: 'none' }, { duration: 1.5, ease: Power4.easeOut, transformOrigin: '50% 50%', strokeDasharray: outerDeviceFrameLength, strokeDashoffset: 0, opacity: 1, fill: '#14212E' }, 'drawDeviceFrameSameTime')
      .fromTo(innerDeviceFrame, { strokeDasharray: innerDeviceFrameLength, strokeDashoffset: innerDeviceFrameLength, opacity: 0 }, { duration: 1.5, ease: Power4.easeOut, strokeDasharray: innerDeviceFrameLength, strokeDashoffset: 0, opacity: 1 }, 'drawDeviceFrameSameTime')
      .from(middelDeviceFrame, { duration: 1, ease: Power4.easeOut, opacity: 0, }, 'drawDeviceFrameSameTime+=0.5')
      .from(contentBackground, { duration: 1, opacity: 0, height: 0 }, 'drawDeviceFrameSameTime+=0.5')
      .addLabel('animateLightAndReflection')
      .from(spotlight, { duration: 1, opacity: 0, height: 0 }, 'animateLightAndReflection')
      .from(screenReflection, { duration: 1, opacity: 0 }, 'animateLightAndReflection' )

    return tl;
  }

  // Timeline creater
  // animate source code and app rendering
  function timelineSourceCode() {
    // source code SVG part
    const codeFunctionOpen = document.querySelector('#function-open');
    const codeFunctionClose = document.querySelector('#function-close');
    const codeFunctionArticle = document.querySelector('#article-part');
    const codeFunctionButton = document.querySelector('#button-part');
    
    // app content part
    const appImageBackground = document.querySelector('#image-background');
    const appImageCrossLines = document.querySelector('#cross-lines');
    const appHeadline = document.querySelector('#headline');
    const appParagraph = document.querySelector('#paragraph');
    const appButton = document.querySelector('#button');

    const tl = gsap.timeline();
    
    tl
      .addLabel('animateFunctionContainer')
      .fromTo(codeFunctionOpen, { opacity: 0, y: 10 }, {duration: 1, ease: Power4.easeOut, opacity: 1, y: 0}, 'animateFunctionContainer')
      .fromTo(codeFunctionClose, { opacity: 0, y: -80 }, {duration: 1, ease: Power4.easeOut, opacity: 1, y: -90}, 'animateFunctionContainer')
      .from(appImageBackground, { duration: 0.5, opacity: 0, height: 0 }, '-=0.5')
      .from(appImageCrossLines, { duration: 0.5, opacity: 0, transformOrigin: "50% 50%", scale: 0 })
      .fromTo(codeFunctionClose, { y: -90 }, {duration: 0.5, ease: Power4.easeOut, y: -20})
      .fromTo(codeFunctionArticle, { opacity: 0, y: 10 }, {duration: 1, ease: Power4.easeOut, opacity: 1, y: 0})
      .addLabel('animateAppArticle')
      .from(appHeadline, { duration: 1, ease: Power4.easeOut, transformOrigin: "0 100%", scaleX: 0 }, 'animateAppArticle-=0.5')
      .from(appParagraph, { duration: 1, ease: Power4.easeOut, transformOrigin: "0 100%", scaleX: 0 }, 'animateAppArticle+=0.4')
      .fromTo(codeFunctionClose, { y: -20 }, {duration: 0.5, ease: Power4.easeOut, y: 0})
      .fromTo(codeFunctionButton, { opacity: 0, y: 10 }, {duration: 1, ease: Power4.easeOut, opacity: 1, y: 0})
      .from(appButton, { duration: 1, ease: Power4.easeOut, transformOrigin: "0 100%", scaleX: 0 }, '-=0.5')

    return tl;
  }

  // Timeline creater
  function timelineSourceCodeCanvas() {
    const sourcecodeCanvas = document.querySelector('#source-code-canvas');

    const tl = gsap.timeline();
    tl
      .fromTo(sourcecodeCanvas, { scale: 0.6, opacity: 0, x:400, rotationY: "90" }, { scale: 1, duration: 3, ease: Power4.easeOut, opacity: 1, x:0, rotationY: '0' })

    return tl;
  }

  // Timeline creater
  // Basic Shapes animation timeline
  function timelineBasicShapes() {
    const triangleCanvas = document.querySelector('#triangle-canvas');
    const squareCanvas = document.querySelector('#square-canvas');
    const ellipseCanvas = document.querySelector('#ellipse-canvas');

    const tl = gsap.timeline()
    tl
    .fromTo(ellipseCanvas, { opacity: 0, rotationY: "90" }, { duration: 1, ease: Power4.easeOut, opacity: 1, rotationY: '0'})
    .fromTo(squareCanvas, { opacity: 0, rotationY: "90" }, { duration: 1, ease: Power4.easeOut, opacity: 1, rotationY: '0'}, '-=0.5')
    .fromTo(triangleCanvas, { opacity: 0, rotationY: "90" }, { duration: 1, ease: Power4.easeOut, opacity: 1, rotationY: '0'}, '-=0.5')

    return tl;
  }

  // Timeline creater
  // Texts animation timeline
  function timelineTexts () {
    const largeTextLine1 = document.querySelector('#large-text-line1');
    const largeTextLine2 = document.querySelector('#large-text-line2');
    const smallTextLine1 = document.querySelector('#small-text-line1');
    const smallTextLine2 = document.querySelector('#small-text-line2');

    const tl = gsap.timeline()
    tl
      .from(largeTextLine1, {duration: 2, opacity: 0, ease: Power4.easeOut, y: 50})
      .from(largeTextLine2, {duration: 2, opacity: 0, ease: Power4.easeOut, y: 50}, '-=1.8')
      .from(smallTextLine1, {duration: 2, opacity: 0, ease: Power4.easeOut, y: 50}, '-=1.8')
      .from(smallTextLine2, {duration: 2, opacity: 0, ease: Power4.easeOut, y: 50}, '-=1.8')

    return tl;
  }

  timelineMain
    .addLabel('startAtSameTime')
    .add(timelineDeviceFrame(), 'startAtSameTime')
    .add(timelineBasicShapes(), 'startAtSameTime')
    .add(timelineTexts(), 'startAtSameTime')
    .add(timelineSourceCodeCanvas(), 'startAtSameTime+=0.5')
    .add(timelineSourceCode(), "-=1.7")

};
