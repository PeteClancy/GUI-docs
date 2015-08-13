/***************************************************************************************************************************************************************
 *
 * Compile HTML files
 *
 **************************************************************************************************************************************************************/


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Dependencies
//--------------------------------------------------------------------------------------------------------------------------------------------------------------


(function(App) {

	var module = {};

	//------------------------------------------------------------------------------------------------------------------------------------------------------------
	// Module init method
	//------------------------------------------------------------------------------------------------------------------------------------------------------------
	module.init = function() {
		App.debugging( 'HTML: Initiating', 'report' );
	};


	//------------------------------------------------------------------------------------------------------------------------------------------------------------
	// Get all html files
	//------------------------------------------------------------------------------------------------------------------------------------------------------------
	module.get = function() {
		App.debugging( 'HTML: Getting all HTML files', 'report' );

		var index = Fs.readFileSync( App.TEMPPATH + 'index.html', 'utf8');

		index = _.template( index )({ //render the index template
			_hasJS: App.selectedModules.js,
			_hasSVG: App.selectedModules.svg,
			blendURL: App.banner.getBlendURL( App.selectedModules.brand ),
			blendURLBOM: App.banner.getBlendURL( 'BOM' ),
			blendURLBSA: App.banner.getBlendURL( 'BSA' ),
			blendURLSTG: App.banner.getBlendURL( 'STG' ),
			blendURLWBC: App.banner.getBlendURL( 'WBC' ),
			GUIRURL: App.GUIRURL + App.selectedModules.brand + '/blender/',
		});

		App.zip.queuing('html', false); //html queue is done
		App.zip.addFile( index, '/index.html' );

	};


	App.html = module;


}(App));