const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

// Configuración de Morgan
morgan.token('body', (req) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

// Esquema y modelo de Persona
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        unique: true,
    },
    number: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^\d{2,3}-\d{5,}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number! It should be in the format XX-XXXXX or XXX-XXXXX.`
        }
    },
});

const Person = mongoose.model('Person', personSchema);

// Rutas
app.get('/info', async (req, res) => {
    const persons = await Person.find({});
    res.send(`
        <p>Phonebook has info for ${persons.length} people</p>
        <p>${new Date()}</p>
    `);
});

app.get('/api/persons', async (req, res) => {
    const persons = await Person.find({});
    res.json(persons);
});

app.get('/api/persons/:id', async (req, res, next) => {
    try {
        const person = await Person.findById(req.params.id);
        if (person) {
            res.json(person);
        } else {
            res.status(404).end();
        }
    } catch (error) {
        next(error);
    }
});

const { ObjectId } = require('mongodb');

app.delete('/api/persons/:id', async (req, res, next) => {
    try {
        const result = await Person.findByIdAndDelete(new ObjectId(req.params.id));
        if (result) {
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'Person not found' });
        }
    } catch (error) {
        next(error);
    }
});

app.post('/api/persons', async (req, res, next) => {
    const { name, number } = req.body;

    if (!name || !number) {
        return res.status(400).json({ error: 'name or number is missing' });
    }

    const person = new Person({ name, number });

    try {
        const savedPerson = await person.save();
        res.json(savedPerson);
    } catch (error) {
        next(error);
    }
});

app.put('/api/persons/:id', async (req, res, next) => {
    const { name, number } = req.body;
    try {
        const updatedPerson = await Person.findByIdAndUpdate(
            req.params.id,
            { name, number },
            { new: true, runValidators: true, context: 'query' }
        );
        if (updatedPerson) {
            res.json(updatedPerson);
        } else {
            res.status(404).end();
        }
    } catch (error) {
        next(error);
    }
});

// Middleware de manejo de errores
app.use((error, req, res, next) => {
    console.error(error.message);

    if (error.name === 'CastError') {
        return res.status(400).send({ error: 'malformatted id' });
    } else if (error.name === 'ValidationError') {
        return res.status(400).json({ error: error.message });
    } else if (error.name === 'MongoServerError' && error.code === 11000) {
        return res.status(400).json({ error: 'name must be unique' });
    }

    next(error);
});

// Servir el frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
