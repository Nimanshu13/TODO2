<script>
    import Todo from './component.svelte';
  
    let lastId = 0;
    const createTodo = (text, done = false) => ({id: ++lastId, text, done});
  
    let todoText = '';
  
    let todos = [
   
    ];
  
    $: uncompletedCount = todos.filter(t => !t.done).length;
  
    $: status = `${uncompletedCount} of ${todos.length} remaining`;
  
    function addTodo() {
          todos.push(createTodo(todoText));
          todos = todos; 
      todoText = ''; 
    }
  
    const archiveCompleted = () => (todos = todos.filter(t => !t.done));

    const deleteTodo = todoId => (todos = todos.filter(t => t.id !== todoId));
  
    function toggleDone(todo) {
      const {id} = todo;
      todos = todos.map(t => (t.id === id ? {...t, done: !t.done} : t));
    }
  </script>
    <main > 
      <div class="main">
  <div >
      <h1>
         TODO-List
      </h1>
    <div>  
    </div>
   
    <form class="from" on:submit|preventDefault={addTodo}>
      <input
        size="50"
        placeholder="Add the task "
        bind:value={todoText} />
    
      <button disabled={!todoText}>Add</button>
    </form>
    <ul>
      {#each todos as todo}
        <Todo
          {todo}
          on:delete={() => deleteTodo(todo.id)}
          on:toggleDone={() => toggleDone(todo)} />
      {/each}
    </ul>
  </div>
</div>
   </main>
  <style>

   .main{
       background-color: rgb(131, 146, 221); 
      height: 100vh; 
      justify-content: center;
      align-items: center;
      color: black;
      font-family: Arial, sans-serif;
     }

    button {

      margin-left: 0 rem;
    }
      
      h1 {
      margin-top: 0;
	  text-align: center;
      }
      
    ul {
      list-style: none;
      margin-left: 0;
      padding-left: 0;
	  text-align: center;

    }
	form{
		text-align: center;
    
	}
    
   
  </style>