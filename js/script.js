
/**
 * Make any clickable item work only once.
 */
AFRAME.registerComponent('onetime-click', {
	init: function () {
		this.el.addEventListener('click', function () {
			// remove the "clickable" class name
			this.className = "";
      // refresh the list of objects we are tracking
			var raycasterEl = AFRAME.scenes[0].querySelector('[raycaster]');
			raycasterEl.components.raycaster.refreshObjects()
		});
	}
});

/**
 * The cursor changes color when over a clickable object.
 * The animation is handled in the entity definition.
 */
AFRAME.registerComponent('collider-check', {
  dependencies: ['raycaster'],
  init: function () {
    this.el.addEventListener('raycaster-intersection', function () {
      this.setAttribute('material', 'color', "darkgreen");
    });
    this.el.addEventListener('raycaster-intersection-cleared', function () {
      this.setAttribute('material', 'color', "darkred");
    });
  }
});