module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        config: {
            helper_name: 'bootstrap-helper-margin-padding'
        },

        clean: {
            'dist': 'dist',
            'build': 'build'
        },

        sass: {
            options: {
                update: true
            },
            build_dev: {
                files: {
                    'build/<%= config.public_path %>.css': [
                        'src/<%= config.public_path %>.sass'
                    ],
                    'build/<%= config.public_path %>-responsive.css': [
                        'src/<%= config.public_path %>-responsive.sass'
                    ]
                }
            },
            build: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'build/<%= config.public_path %>.min.css': [
                        'src/<%= config.public_path %>.sass'
                    ],
                    'build/<%= config.public_path %>-responsive.min.css': [
                        'src/<%= config.public_path %>-responsive.sass'
                    ]
                }
            },
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'dist/<%= config.public_path %>.min.css': [
                        'src/<%= config.public_path %>.sass'
                    ],
                    'dist/<%= config.public_path %>-responsive.min.css': [
                        'src/<%= config.public_path %>-responsive.sass'
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
                tasks: ['sass:build_dev'],
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
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['clean:build', 'sass:build']);
    grunt.registerTask('css', ['clean', 'sass']);
    grunt.registerTask('dist', ['clean:dist', 'sass:dist']);
    grunt.registerTask('watch_css', ['watch:css']);
    grunt.registerTask('watch_css_dev', ['watch:css_dev']);

};