'use strict';

module.exports = function (grunt) {
	
	//require('time-grunt')(grunt);
	//require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		app: {
			app: 'app',
			dist: 'dist'
		},
		watch: {
            css: {
                files: ['<%= app.app %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass']
            }
		},
		compass: {
			dist: {
				options: {
					config: 'app/config.rb',
					force: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');


	grunt.registerTask('default', [
		'watch'
	]);
}