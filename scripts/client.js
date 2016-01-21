elation.require(['engine.engine', 'engine.things.light', 'janusweb.janusweb'], function() {
  elation.component.add('janusweb.client', function() {
    this.initWorld = function() {
      var things = this.world.load({
        name: 'janusweb',
        type: 'janusweb',
        properties: {
        },
        things: {
          ambient: {
            name: 'ambient',
            type: 'light_ambient',
            properties: {
              color: 0x222222
            }
          },
          sun: {
            name: 'sun',
            type: 'light_directional',
            properties: {
              position: [-20,50,25],
              intensity: 0.2
            }
          },
          point: {
            name: 'point01',
            type: 'light_point',
            properties: {
              position: [22,19,-15],
              intensity: 0.2
            }
          },
          player: {
            name: 'player',
            type: 'player',
            properties: {
              position: [0,0,0],
              mass: 10
            }
          },
        }
      });
    }
  }, elation.engine.client);
});