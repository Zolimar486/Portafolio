import Particles from 'react-tsparticles'
import {loadFull} from 'tsparticles'


export default function Particle(){
    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
    return(
      <Particles
      id="tsparticles"
       init={particlesInit}
       loaded={particlesLoaded}
       options={{
         background: {
           color: {
             value: "transparent",
           },
         },
         fpsLimit: 120,
         interactivity: {
           events: {
             onClick: {
               enable: false,
               mode: "push",
             },
             onHover: {
               enable: false,
               mode: "repulse",
             },
             resize: true,
           },
           modes: {
             push: {
               quantity: 4,
             },
             repulse: {
               distance: 200,
               duration: 0.4,
             },
           },
         },
         particles: {
           color: {
             value: "#ffffff",
           },
           links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
           
           number: {
             density: {
               enable: true,
               value_area: 900,
             },
             value: 30,
           },
           opacity: {
             value: 0.5,
           },
           shape: {
             type: "circle",
             stroke:{
              width:6,
              color:"#f9ab00"
             }
           },
           fullScreen:{
            enable:false,
            
           }
           
         },
         detectRetina: true,
       }}
      />
    )
}