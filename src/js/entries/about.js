import '/src/styles/global.scss';

const requireAll = (r) => r.keys().forEach(r);

requireAll(require.context('/src/assets/fonts/', true, /\.woff2$/));
requireAll(require.context('/src/components/', true, /\.scss$/));

const About = () => {
  // Register SW
  // if ('serviceWorker' in navigator) {
  //   window.addEventListener('load', () => {
  //     navigator.serviceWorker
  //       .register('/service-worker.js')
  //       .then((registration) => {
  //         console.log('SW registered: ', registration);
  //       })
  //       .catch((registrationError) => {
  //         console.log('SW registration failed: ', registrationError);
  //       });
  //   });
  // }

  console.log('About page');
};

About();
