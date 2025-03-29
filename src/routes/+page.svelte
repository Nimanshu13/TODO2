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
  
  <div>
      <h1>
         TODO-List
      </h1>
    <div>  
    </div>
   
    <form class="from" on:submit|preventDefault={addTodo}>
      <input
        size="30"
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

      
  <style>
    button {

      margin-left: 1rem;
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