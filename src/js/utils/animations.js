// GSAP Animation
// Loading GSAP plugins
gsap.registerPlugin(CSSRulePlugin);

// Texts animation
const triggerAnimation = () => {
  const rule1 = CSSRulePlugin.getRule('.Presentation__headline-text:after');
  const rule2 = CSSRulePlugin.getRule('.Presentation__version-info:after');
  const rule3 = CSSRulePlugin.getRule('.Presentation__special-message:after');

  const timeLine = gsap.timeline({ delay: 1 });

  timeLine
    .to('.Presentation__section-line', { duration: 3.5, scale: 1, transformOrigin: "50% 50%", ease: Power4.easeOut, delay: 1 })
    .to(rule1, { duration: 1, cssRule: { scaleY: 0 } }, "-=1")
    .to(rule2, { duration: 1, cssRule: { scaleY: 0 } })
    .to(rule3, { duration: 1, cssRule: { scaleY: 0 } }, "-=0.5");
}

export default triggerAnimation;
