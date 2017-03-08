module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        clean: {
            'dist': 'dist',
        },

        sass: {
            options: {
                update: true
            },
            dev: {
                files: {
                    'dist/bootstrap-helper-margin-padding.css': [
                        'src/bootstrap-helper-margin-padding.sass'
                    ]
                }
            },
            global: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'dist/bootstrap-helper-margin-padding.min.css': [
                        'src/bootstrap-helper-margin-padding.sass'
                    ]
                }
            }
        },

        watch: {
            css: {
                files: ['**/*.{sass,scss}'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                    livereload: true,
                    interrupt: true
                },
            },
            css_dev: {
                files: ['**/*.{sass,scss}'],
                tasks: ['sass:dev'],
                options: {
                    spawn: false,
                    livereload: true,
                    interrupt: true
                },
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');;

    // Default task(s).
    grunt.registerTask('default', ['clean', 'sass']);
    grunt.registerTask('css', ['sass']);
    grunt.registerTask('css_dev', ['sass:dev']);
    grunt.registerTask('watch_css', ['watch:css']);
    grunt.registerTask('watch_css_dev', ['watch:css_dev']);

};