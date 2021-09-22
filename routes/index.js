import { Router } from 'express';
var router = Router();
/* GET home page. */
router.get('/', (_req, res, _next) => res.render('index', { title: 'Express' }));
router.get('/event/amogus/sussy', (_req,res) => res.render('finalpuzzle'));
router.get('/event', (_req, res) => res.render('secondpuzzle'));
router.get('/brainfuck', (_req, res) => res.render('brainfuck'));
export default router;
