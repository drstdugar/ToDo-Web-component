export const tmpl = `
    <style>
        .task-input {
            width: 50%;
            margin: 25px auto;
            display: flex;
        }

        input {
            margin-right: 10px;
            padding: 7px;
            flex:8;
            font-family: Georgia, 'Times New Roman', Times, serif;
            border-radius: 5px;
            border: 2px solid rgb(9, 158, 138);
            font-size: 15px;
            color: rgb(9, 158, 138);
        }

        input::placeholder {
            color: rgb(9, 158, 138);
        }

        input:focus {
            border: 2px solid rgb(11, 109, 96);
            outline: none;
        }

        button {
            flex:2;            
            padding: 4px 8px;
            cursor: pointer;
            background: rgb(26, 190, 169);
            border: none;
            border-radius: 5px;
            color: aliceblue;
            font-family: Georgia, 'Times New Roman', Times, serif;
            font-size: 15px;
        }

        button:hover {
            background: rgb(9, 158, 138);
        }
    </style>

    <div class="task-input">
        <input type="text" placeholder="Enter Task Here..." id="enter-task">
        <button id="add-task">Add Task</button>
    </div>
`;
