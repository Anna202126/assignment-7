import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { todosState } from "./state/todos-state";

function App() {
  const todos = useRecoilValue(todosState);

  return (
    <StyledApp>
      <div class="wrapper">
        <header>Todo App</header>
        <div class="inputField">
          <input type="text" placeholder="Add your new todo" />
          <button>
            <i class="fas fa-plus"></i>
          </button>
        </div>
        <ul class="todoList">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            quibusdam doloremque dolorem doloribus magni esse iusto harum
            voluptatem, iure quaerat molestias odio illo excepturi voluptatum a,
            illum dolores suscipit veritatis.
            <span class="icon" onclick="deleteTask(${index})">
              <i class="fas fa-trash"></i>
            </span>
          </li>
        </ul>
        <div class="footer">
          <span>
            You have <span class="pendingTasks"></span> pending tasks
          </span>
          <button>Clear All</button>
        </div>
      </div>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  min-height: calc(100vh - 80px);
  display: grid;
  place-content: center;
  background: linear-gradient(to bottom, #68eacc 0%, #497be8 100%);

  ::selection {
    color: #ffff;
    background: rgb(142, 73, 232);
  }

  .wrapper {
    background: #fff;
    max-width: 400px;
    width: 100%;
    /* margin: 120px auto; */
    padding: 25px;
    border-radius: 5px;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
  }

  .wrapper header {
    font-size: 30px;
    font-weight: 600;
  }

  .wrapper .inputField {
    margin: 20px 0;
    width: 100%;
    display: flex;
    height: 45px;
  }

  .inputField input {
    width: 85%;
    height: 100%;
    outline: none;
    border-radius: 3px;
    border: 1px solid #ccc;
    font-size: 17px;
    padding-left: 15px;
    transition: all 0.3s ease;
  }

  .inputField input:focus {
    border-color: #8e49e8;
  }

  .inputField button {
    width: 50px;
    height: 100%;
    border: none;
    color: #fff;
    margin-left: 5px;
    font-size: 21px;
    outline: none;
    background: #8e49e8;
    cursor: pointer;
    border-radius: 3px;
    opacity: 0.6;
    pointer-events: none;
    transition: all 0.3s ease;
  }

  .inputField button:hover,
  .footer button:hover {
    background: #721ce3;
  }

  .inputField button.active {
    opacity: 1;
    pointer-events: auto;
  }

  .wrapper .todoList {
    max-height: 250px;
    overflow-y: auto;
  }

  .todoList li {
    position: relative;
    list-style: none;
    height: 45px;
    line-height: 45px;
    margin-bottom: 8px;
    background: #f2f2f2;
    border-radius: 3px;
    padding: 0 15px;
    cursor: default;
    overflow: hidden;
  }

  .todoList li .icon {
    position: absolute;
    right: -45px;
    background: #e74c3c;
    width: 45px;
    text-align: center;
    color: #fff;
    border-radius: 0 3px 3px 0;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .todoList li:hover .icon {
    right: 0px;
  }

  .wrapper .footer {
    display: flex;
    width: 100%;
    margin-top: 20px;
    align-items: center;
    justify-content: space-between;
  }

  .footer button {
    padding: 6px 10px;
    border-radius: 3px;
    border: none;
    outline: none;
    color: #fff;
    font-weight: 400;
    font-size: 16px;
    margin-left: 5px;
    background: #8e49e8;
    cursor: pointer;
    user-select: none;
    opacity: 0.6;
    pointer-events: none;
    transition: all 0.3s ease;
  }
  .footer button.active {
    opacity: 1;
    pointer-events: auto;
  }
`;

export default App;
