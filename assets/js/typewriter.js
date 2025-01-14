import params from "@params";

new Typewriter('#typetext', {
  loop: true,
  delay: params.delay,
  pauseFor: params.pause,
  strings: params.textlist,
  autoStart: true
});
