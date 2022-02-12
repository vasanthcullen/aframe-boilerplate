AFRAME.registerComponent('one-to-nine', {
  dependencies: ['material'],

  init: function () {
    this.el.setAttribute('material', 'src', "https://upload.wikimedia.org/wikipedia/commons/9/90/Number-1_%28dark_green%29.png");

    this.el.addEventListener('click', () => {
      const number = this.el.getAttribute('material').src;
      console.log("clicked!", number)

      if (number == "https://upload.wikimedia.org/wikipedia/commons/9/90/Number-1_%28dark_green%29.png") {
        this.el.setAttribute('material', 'src', "https://upload.wikimedia.org/wikipedia/commons/3/30/Number-2_%28dark_green%29.png");
      } else if (number == "https://upload.wikimedia.org/wikipedia/commons/3/30/Number-2_%28dark_green%29.png") {
        this.el.setAttribute('material', 'src', "https://upload.wikimedia.org/wikipedia/commons/8/84/Number-3_%28dark_green%29.png");
      } else if (number == "https://upload.wikimedia.org/wikipedia/commons/8/84/Number-3_%28dark_green%29.png") {
        this.el.setAttribute('material', 'src', "https://upload.wikimedia.org/wikipedia/commons/a/a5/Number-4_%28dark_green%29.png");
      } else if (number == "https://upload.wikimedia.org/wikipedia/commons/a/a5/Number-4_%28dark_green%29.png") {
        this.el.setAttribute('material', 'src', "https://upload.wikimedia.org/wikipedia/commons/d/da/Number-5_%28dark_green%29.png");
      } else if (number == "https://upload.wikimedia.org/wikipedia/commons/d/da/Number-5_%28dark_green%29.png") {
        this.el.setAttribute('material', 'src', "https://upload.wikimedia.org/wikipedia/commons/2/27/Number-6_%28dark_green%29.png");
      } else if (number == "https://upload.wikimedia.org/wikipedia/commons/2/27/Number-6_%28dark_green%29.png") {
        this.el.setAttribute('material', 'src', "https://upload.wikimedia.org/wikipedia/commons/7/74/Number-7_%28dark_green%29.png");
      } else if (number == "https://upload.wikimedia.org/wikipedia/commons/7/74/Number-7_%28dark_green%29.png") {
        this.el.setAttribute('material', 'src', "https://upload.wikimedia.org/wikipedia/commons/a/a9/Number-8_%28dark_green%29.png");
      } else if (number == "https://upload.wikimedia.org/wikipedia/commons/a/a9/Number-8_%28dark_green%29.png") {
        this.el.setAttribute('material', 'src', "https://upload.wikimedia.org/wikipedia/commons/1/1a/Number-9_%28dark_green%29.png");
      } else if (number == "https://upload.wikimedia.org/wikipedia/commons/1/1a/Number-9_%28dark_green%29.png") {
        this.el.parentNode.removeChild(this.el);
      }
    })
  }
});