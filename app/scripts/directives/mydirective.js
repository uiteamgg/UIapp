'use strict';

angular.module('yoAngularProjectApp')
  .directive('myDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the myDirective directive');
      }
    };
  })

  .directive('draggable', function() {
    return function(scope, element) {
        // this gives us the native JS object
        var el = element[0];



      /*  console.log("element 0 is:");
        console.log(element.index());
        console.log(el);*/


        el.draggable = true;

        el.addEventListener(
            'dragstart',
            function(e) {

                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('Text', this.id);


                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('Text', this.id);

                this.classList.add('drag');
                return false;
            },
            false
        );

        el.addEventListener(
            'dragend',
            function(e) {

            	console.log("Inside DRAG- dragend----");


                this.classList.remove('drag');
                return false;
            },
            false
        );
    }
})

  .directive('droppable', function() {
    return {
        scope: {
            drop: '&' // parent
        },
        link: function(scope, element) {
            // again we need the native object
            var el = element[0];

            el.addEventListener(

			    'dragover',
			    function(e) {
			        e.dataTransfer.dropEffect = 'move';
			        // allows us to drop


			        if (e.preventDefault) e.preventDefault();
			        this.classList.add('over');

			        console.log("Inside DROP-dragover----");

			        return false;
			    },
			    false
			);




			el.addEventListener(
			    'dragenter',
			    function(e) {
			        this.classList.add('over');

			        console.log("Inside DROP-dragenter----");

			        return false;
			    },
			    false
			);

			el.addEventListener(
			    'dragleave',
			    function(e) {


			    	console.log("Inside DROP-drag leave event--");

			        this.classList.remove('over');
			        return false;
			    },
			    false
			);

			el.addEventListener(
				'drop',
				function(e) {

					console.log("Inside DROP-drop event--");
					// Stops some browsers from redirecting.
					if (e.stopPropagation) e.stopPropagation();

					this.classList.remove('over');

					var item = document.getElementById(e.dataTransfer.getData('Text'));




					console.log("Item before dropping is:");
					console.log(item);
					console.log("After item--------");
					console.log($('#item0').parent().parent().id);
					//console.log("Class added is:");
					//console.log($(li).class);

					 // console.log("index is:");
					 // console.log(e.dataTransfer.index());

					this.appendChild(item);

					// call the drop passed drop function
					scope.$apply('drop()');

					return false;
					},

		false
	);

    'dragover',
    function(e) {
        e.dataTransfer.dropEffect = 'move';
        // allows us to drop
        if (e.preventDefault) e.preventDefault();
        this.classList.add('over');
        return false;
    },
    false
);




el.addEventListener(
    'dragenter',
    function(e) {
        this.classList.add('over');
        return false;
    },
    false
);

el.addEventListener(
    'dragleave',
    function(e) {
        this.classList.remove('over');
        return false;
    },
    false
);

el.addEventListener(
                'drop',
                function(e) {
                    // Stops some browsers from redirecting.
                    if (e.stopPropagation) e.stopPropagation();

                    this.classList.remove('over');

                    var item = document.getElementById(e.dataTransfer.getData('Text'));
                    this.appendChild(item);

                    // call the drop passed drop function
                    scope.$apply('drop()');

                    return false;
                },

    false
);










        }
    }
});


