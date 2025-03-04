import createError from 'http-errors';
import express, { json, urlencoded, static } from 'express';
import { join } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index';
var app = express();
// view engine setup
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(static(join(__dirname, 'public')));
app.use('/', indexRouter);
// catch 404 and forward to error handler
app.use((_req, _res, next) => next(createError(404)));
// error handler
app.use((err, req, res, _next) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	// render the error page
	res.status(err.status || 500);
	res.render('error');
});
export default app;
