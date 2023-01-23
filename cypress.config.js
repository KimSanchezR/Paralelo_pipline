
module.exports = ({
  viewportWidth: 1500,
  viewportHeight: 900,
  chromeWebSecurity: false,
  pageLoadTimeout: 9000, //Tiempo de carga de la página al inicio
  defaultCommandTimeout: 15000, //Tiempo de espera (Tiene hasta 15s para cargar el elemento para todos los proyectos aqui es general)
  projectId: "inp2ah", //ID proyecto de dashboard de cypress para integración continua 

  e2e: {
    async setupNodeEvents(on, config) {
      // Esto agrega el cucumber preprocesor a la serie de configuraciones
    },
  }
})