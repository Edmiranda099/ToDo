package com.todolist.todo_backend.jar.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController //"Essa classe vai receber requisições HTTP e devolver respostas."

public class TaskController {
    
    @GetMapping("/tasks") //Quando alguém fizer um GET para /tasks, execute o método abaixo.
    public String getTasks(){
        return "Minha lista de tarefas";
    }
}
