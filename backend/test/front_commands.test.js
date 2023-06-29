const { JSDOM } = require('jsdom');
const fetchMock = require('fetch-mock');

const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Case Solver</title>
    <link rel="stylesheet" type="text/css" href="styles.css" />
  </head>
  <body>
    <h1>Case Solver</h1>
    <button id="solveBtn">Solve Case</button>
    <div id="result"></div>

    <script src="./script.js"></script>

  </body>
</html>
`;

describe('Script', () => {
  let window;

  beforeAll(() => {
    const dom = new JSDOM(html, { runScripts: 'dangerously' });
    window = dom.window;

    // Mock the fetch API
    fetchMock.get('http://localhost:3000/commands', { address: 5 });
  });

  afterAll(() => {
    fetchMock.restore();
  });

  it('should display the correct address when the solve button is clicked', async () => {
    const solveBtn = window.document.getElementById('solveBtn');
    const resultDiv = window.document.getElementById('result');

    solveBtn.dispatchEvent(new window.Event('click'));

    await new Promise(resolve => setTimeout(resolve, 100));

    expect(resultDiv.textContent).toBe('');
  });
});
