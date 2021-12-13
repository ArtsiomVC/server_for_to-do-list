import Router from "express"
import TasksController from "../TasksController.js"


const router = new Router()

router.get("/api", TasksController.getAll)
router.post("/api", TasksController.create)
router.delete("/api", TasksController.delete)
router.put('/api', TasksController.changeTask)

export default router
