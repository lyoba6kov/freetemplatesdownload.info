module.exports = function(grunt) {
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),

// LESS
		less: {
			compile: {
				options: {
					compress: true
				},
				files: {
					'css/homepage.css' : 'css/less/homepage.less',
					'css/global.css' : 'css/less/global.less',
					'css/all-templates.css' : 'css/less/all-templates.less',
					'css/sitemap.css' : 'css/less/sitemap.less'
				}
			}
		},

// BANNER
		cssbanner: '/*\n' +
		              ' *  freetemplatesdownload.info v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
		              ' *  Copyright <%= grunt.template.today("yyyy") %> Lubomir Georgiev email: lubomirgeorgievgeorgiev@gmail.com\n' +
					  ' *  Build with all the love in the world!\n' +
		              ' *  Licensed under - Creative Commons Attribution 4.0 International (http://creativecommons.org/licenses/by/4.0/)\n' +
		              ' *  GitHub Repository: https://github.com/LubomirGeorgiev/freetemplatesdownload.info\n' +
		              ' */\n',
		htmlbanner: '<!--\n' +
		              'The original source code of this file is available at\n' +
		              'https://github.com/LubomirGeorgiev/freetemplatesdownload.info\n' +
		              '\n' +
		              'Copyright <%= grunt.template.today("yyyy") %> Lubomir Georgiev email: lubomirgeorgievgeorgiev@gmail.com\n' +
		              'Licensed under - Creative Commons Attribution 4.0 International (http://creativecommons.org/licenses/by/4.0/)\n' +
		              ' -->\n',
		usebanner: {
			cssbanner: {
				options: {
				position: 'top',
				banner: '<%= cssbanner %>'
			},
			files: {
				src: [ 'css/*.css' ]
			}
			},

			htmlbanner: {
				options: {
				position: 'top',
				banner: '<%= htmlbanner %>'
			},
			files: {
				src: [ 'minified/**/*.php', '!minified/_includes/*.php' ] // "!" exclude all files in /_includes
			}
			}
		},

// HTML MINIFY
		htmlmin: {
			htmluglyfy: {
				options: {
		        removeComments: true,
		        collapseWhitespace: true
				},
				files: { // ***IMPORTANT*** 
						//'destination' : 'source'
		        'minified/index.php': 'index.php',
		        'minified/all-templates.php': 'all-templates.php',
		        'minified/sitemap.php': 'sitemap.php',
		        // _includes
		        'minified/_includes/footer.php': '_includes/footer.php',
		        'minified/_includes/google-analytics.php': '_includes/google-analytics.php',
		        'minified/_includes/main-nav.php': '_includes/main-nav.php',
		        'minified/_includes/meta.php': '_includes/meta.php',
		        'minified/_includes/nav-links-content.php': '_includes/nav-links-content.php',
		        //templates
		        'minified/template/businessbox.php': 'template/businessbox.php',
		        'minified/template/freshco.php': 'template/freshco.php',
		        'minified/template/purity.php': 'template/purity.php',
		        'minified/template/urbanprism.php': 'template/urbanprism.php',
		        'minified/template/yourcoolportfolio.php': 'template/yourcoolportfolio.php',
		        'minified/template/yourflatportfolio.php': 'template/yourflatportfolio.php',
				}
			}
		},

		watch: {
		  cssmin: {
		    files: ['css/less/**/*.less'],
		    tasks: ['less', 'usebanner:cssbanner']
		  }
		}
	});

	grunt.loadNpmTasks('grunt-banner');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');

	grunt.registerTask('default', ['watch']);
}