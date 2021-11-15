const express = require("express")
const app = express()

const PORT = process.env.PORT || 3333


let TASKS = [
    {
        id: 1,
        title: "Купить кофе",
        completed: false,
        order: 1,
    },
    {
        id: 2,
        title: "Забрать посылку",
        completed: false,
        order: 2,
    },
    {
        id: 3,
        title: "Втретиться с друзьями",
        completed: false,
        order: 3,
    },
]

app.use(express.json())
app.get("/api", (req, res) => {
    res.json(TASKS)
})

app.post("/api", (req, res) => {
    const task = {
        id: Date.now(),
        title: req.body.title,
        completed: false,
        order: TASKS.length + 30
    }

    TASKS.push(task)
    res.status(201).json(task)
})

app.delete("/api", (req, res) => {
    TASKS = TASKS.filter(task => req.body.id !== task.id)
    res.status(200).json({message: 'Задача была удалена'})
})

app.put('/api', (req, res) => {
    const idx = TASKS.findIndex(t => t.id === req.body.id)
    TASKS[idx].completed = !TASKS[idx].completed
    res.json({message: 'Задача была изменена'})
})

app.put('/api/tasks', (req, res) => {
    const idx = TASKS.findIndex(t => t.id === req.body.id)
    TASKS[idx].title = req.body.title
    res.json({message: 'Задача была изменена'})
})

app.put('/api/order', (req, res) => {
    const idx = TASKS.findIndex(t => t.id === req.body.id)
    TASKS[idx].order = req.body.order
    res.json({message: 'Порядок задачи был изменен'})
})


app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`)
})



