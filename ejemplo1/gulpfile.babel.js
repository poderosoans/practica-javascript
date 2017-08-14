import gulp from 'gulp';
import babel from 'gulp-babel';

//gulp.task();	// Define una tarea
//gulp.src();		// Indica un directorio donde gulp va a buscar archivos para trabajar
//gulp.dest();	// Define un directorio donde galp dejará los archivos procesados (src)
//gulp.watch(); 	// Mira los cambios en un directorio o archivo y realiza una tarea que se le indique

gulp.task('es6', () =>{
	gulp.src('./es6/*.js')
	.pipe(babel())    //pasa los datos de uno a otro
	.pipe(gulp.dest('./es5'))
});

gulp.task('default', ()=>{
	gulp.watch('./es6/*.js',['es6'])
});