const express = require('express');
const app = express();

// 1. body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// 2. cors
const cors = require('cors');
app.use(cors());

// 3. helmet
const helmet = require('helmet');
app.use(helmet());

// 4. morgan
const morgan = require('morgan');
app.use(morgan('combined'));

// 5. compression
const compression = require('compression');
app.use(compression());

// 6. express-session
const session = require('express-session');
app.use(session({ secret: 'key', resave: false, saveUninitialized: true }));

// 7. passport
const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

// 8. express-validator
const { body, validationResult } = require('express-validator');

// 9. dotenv
require('dotenv').config();

// 10. express-rate-limit
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use(limiter);

// 11. hpp (HTTP Parameter Pollution)
const hpp = require('hpp');
app.use(hpp());

// 12. express-mongo-sanitize
const mongoSanitize = require('express-mongo-sanitize');
app.use(mongoSanitize());

// 13. multer
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// 14. cookie-parser
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// 15. express-jwt
const expressJwt = require('express-jwt');

// 16. bcryptjs
const bcrypt = require('bcryptjs');

// 17. jsonwebtoken
const jwt = require('jsonwebtoken');

// 18. express-fileupload
const fileUpload = require('express-fileupload');
app.use(fileUpload());

// 19. busboy
const busboy = require('busboy');

// 20. multiparty
const multiparty = require('multiparty');

// 21. formidable
const formidable = require('formidable');

// 22. joi
const Joi = require('joi');

// 23. yup
const yup = require('yup');

// 24. celebrate
const { celebrate, Joi: CelebrateJoi } = require('celebrate');

// 25. async-errors
require('express-async-errors');

// 26. express-slow-down
const slowDown = require('express-slow-down');
const speedLimiter = slowDown({ windowMs: 15 * 60 * 1000, delayAfter: 100, delayMs: 500 });
app.use(speedLimiter);

// 27. express-enforces-ssl
const enforceHttps = require('express-enforces-ssl');
app.use(enforceHttps());

// 28. csurf
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

// 29. express-brute
const ExpressBrute = require('express-brute');
const store = new ExpressBrute.MemoryStore();
const bruteforce = new ExpressBrute(store);

// 30. connect-timeout
const timeout = require('connect-timeout');
app.use(timeout('5s'));

app.listen(3000, () => console.log('Server running on port 3000'));
