module.exports = function(grunt) {

    grunt.initConfig({
        pkg:grunt.file.readJSON("package.json"),
        copy:{
            imgs:{
                files:[{
                    expand: true,
                    flatten:false,
                    cwd: "src/",
                    src:["*/index.js"],
                    dest:"release/"
                }]
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'//添加banner
            },
            default: {
                files: [{
                    expand: true,
                    flatten: false,
                    cwd: "release/",
                    src:'*/index.js',
                    dest: 'release/',
                    ext: ".min.js"
                }]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.registerTask("default",["copy", "uglify:default"]);
};