var currentPlayer = 'X';
        var cells = document.querySelectorAll('.cell');

        function makeMove(cell) {
            if (!cell.textContent) {
                cell.textContent = currentPlayer;
                cell.classList.add(currentPlayer);
                checkWinner();
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }

        function checkWinner() {
            var winningCombos = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8],
                [0, 3, 6], [1, 4, 7], [2, 5, 8],
                [0, 4, 8], [2, 4, 6]
            ];

            for (var combo of winningCombos) {
                var [a, b, c] = combo;
                if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
                    alert(`${cells[a].textContent} Wins!`);
                    resetBoard();
                    return;
                }
            }

            if (Array.from(cells).every(cell => cell.textContent !== '')) {
                alert("It's a Draw!");
                resetBoard();
            }
        }

        function resetBoard() {
            cells.forEach(cell => {
                cell.textContent = '';
                cell.classList.remove('X', 'O');
            });
            currentPlayer = 'X';
        }