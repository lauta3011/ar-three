AFRAME.registerComponent('a-model', {

    init: function () {
        console.log('########## INIT ############### ', this.el);
    }, 
    update: function () {
        const el = this.el;

        el.addEventListener('click', () => {
            el.setAttribute('color', 'red');
        })
    }
  });