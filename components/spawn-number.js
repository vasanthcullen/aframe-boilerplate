AFRAME.registerComponent('spawn-number', {
    schema: {
      default: '',
      parse: AFRAME.utils.styleParser.parse
    },
  
    init: function () {
      const el = this.el;
  
      el.addEventListener("click", evt => {
        console.log("evt.detail.intersection.point", evt.detail.intersection.point);
        // If there is already a spawned number at this position, do nothing
        const spawnedElements = document.getElementsByClassName("spawned");
        if (spawnedElements.length) {
          console.log("no spawn");
          for (i = 0; i < spawnedElements.length; i++) {
            const element = spawnedElements[i];
            const position = element.getAttribute('position');
            
            if (
              position.x === Math.round(evt.detail.intersection.point.x) &&
              position.y === 0.5 &&
              position.z === Math.round(evt.detail.intersection.point.z)
            ) {
              return;
            }
          }
        }

        // Otherwise spawn a number at this position, if the position is on the sudoku grid (x -4 to 4 and z -4 to 4)
        console.log("spawn");
        if (
          Math.round(evt.detail.intersection.point.x) >= -4 && Math.round(evt.detail.intersection.point.x) <= 4 &&
          Math.round(evt.detail.intersection.point.z) >= -4 && Math.round(evt.detail.intersection.point.z) <= 4
        ) {
          const number = document.createElement('a-entity');
          AFRAME.utils.entity.setComponentProperty(number, "mixin", "number");
          AFRAME.utils.entity.setComponentProperty(number, "class", "spawned");
          number.setAttribute('position', {
            x: Math.round(evt.detail.intersection.point.x),
            y: 0.5,
            z: Math.round(evt.detail.intersection.point.z)
          });
    
          el.sceneEl.appendChild(number);
        }

      });
    }
  });