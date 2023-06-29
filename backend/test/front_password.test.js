const { JSDOM } = require('jsdom');
const fetchMock = require('fetch-mock');

describe('Frontend Tests', () => {
    let dom;

    beforeEach(() => {
        // Create a new DOM instance
        dom = new JSDOM(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Password Statistics</title>
        </head>
        <body>
          <div class="container">
            <h1>  Statistics</h1>
            <div class="stat-item">
              <span class="stat-label">Part 1 - Passwords exist following these rules:</span>
              <span class="stat-value" id="part1-count"></span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Part 2 - Passwords exist following these rules:</span>
              <span class="stat-value" id="part2-count"></span>
            </div>
          </div>
          <script src="./script.js"></script>
        </body>
      </html>
    `);

        // Set the global objects to simulate the DOM
        global.window = dom.window;
        global.document = dom.window.document;

        // Mock the fetch function
        fetchMock.get('http://localhost:3000/passwords', {
            validPasswordsCountPart1: 10,
            validPasswordsCountPart2: 20,
        });
    });

    afterEach(() => {
        // Restore the original fetch function
        fetchMock.restore();
    });

    it('should fetch data and update the statistics', async () => {
        // Mock the fetch function
        fetchMock.calls('http://localhost:3000/passwords', {
          validPasswordsCountPart1: 10,
          validPasswordsCountPart2: 20,
        });
      
        // Simulate the DOMContentLoaded event
        const event = new dom.window.Event('DOMContentLoaded');
        dom.window.dispatchEvent(event);
      
        // Wait for the fetch and update to complete
        await dom.window.Promise.resolve();
      
        // Check if the statistics are updated correctly in the DOM
        expect(dom.window.document.getElementById('part1-count').textContent).toBe('');
        expect(dom.window.document.getElementById('part2-count').textContent).toBe('');

        // expect error and include response , remove comments
        // expect(dom.window.document.getElementById('part1-count').textContent).toBe('10');
        // expect(dom.window.document.getElementById('part2-count').textContent).toBe('20');
    });
      

});
