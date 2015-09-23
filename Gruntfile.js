module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: [
					'./lib/main.js',
					'./lib/directive/**/*.js',
					'./lib/service/**/*.js',
					'./lib/list/**/*.js',
					'./lib/search/**/*.js'
				],
				dest: './build/main.js'
			}
		},
		uglify: {
			options: {
				//头部
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			dist: {
				src: './build/main.js',
				dest: './build/main.min.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['concat', 'uglify']);
};