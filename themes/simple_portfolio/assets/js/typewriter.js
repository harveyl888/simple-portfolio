import params from "@params";

new Typewriter('#typetext', {
  loop: true,
  delay: 150,
  pauseFor: 3000,
  strings: params.textlist,
  autoStart: true
});
