(function($){

	$.fn.roundGallery = function(options){

		var active = null;
		var gallery = this;

		var settings = $.extend({
            width : 500,
            height : 500,
            ratio : 0.2,
            ratioActive : 0.5
        }, options);

		//imposto dimensioni di default del contenitore
		this.css({
			'height' : settings.height,
			'width' : settings.width
		});

		var counter = 0;
		var increment = 360 / this.find('div').length;
		var incrementRefresh = 360 / (this.find('div').length-1);

		//Imposto posizione immagini
		this.find('div').each(function(){
			$(this).css({
				height: settings.ratio * settings.height,
				width: settings.ratio * settings.width,
				top: settings.height / 2 + (settings.height / 2 - (settings.ratio * settings.height)/2) * Math.sin((counter - 90) * Math.PI / 180) - (settings.ratio * settings.height)/2,
				left: settings.width/2 + (settings.width / 2  - (settings.ratio * settings.width)/2) * Math.cos((counter - 90) * Math.PI / 180) - (settings.ratio * settings.width)/2
			});
			counter += increment;
		});

		this.find('div').click(function(){

			active = this;

			//Animazione al click
			counter = 0;

			gallery.find('div').each(function(){
				if(this != active){
					$(this).css({
						height: settings.ratio * settings.height,
						width: settings.ratio * settings.width,
						top: settings.height / 2 + (settings.height / 2 - (settings.ratio * settings.height)/2) * Math.sin((counter - 90) * Math.PI / 180) - (settings.ratio * settings.height)/2,
						left: settings.width/2 + (settings.width / 2  - (settings.ratio * settings.width)/2) * Math.cos((counter - 90) * Math.PI / 180) - (settings.ratio * settings.width)/2
					});

					counter += incrementRefresh;
				} else {
					$(this).css({
						height: settings.ratioActive * settings.height,
						width: settings.ratioActive * settings.width,
						top: settings.height/2 - (settings.ratioActive * settings.height)/2,
						left: settings.width/2 - (settings.ratioActive * settings.width)/2
					});
				}
			});
			
			

		});

		return this;
	}


}(jQuery));