const {
    countValidPasswordsPart1,
    countValidPasswordsPart2,
  } = require('../src/passwordUtils');
  
  describe('Password Validation', () => {
    describe('Part 1', () => {
      it('should return the correct count of valid passwords', () => {
        expect(countValidPasswordsPart1(0, 100)).toBe(9);
        expect(countValidPasswordsPart1(100, 200)).toBe(17);
        // Add more test cases as needed
      });
    });

    
    describe('Part 2', () => {
      it('should return the correct count of valid passwords', () => {
        expect(countValidPasswordsPart2(0, 100)).toBe(9);
        expect(countValidPasswordsPart2(100, 200)).toBe(18);
        // Add more test cases as needed
      });
    });
  });

  describe('Password Validation', () => {
    describe('Part 1', () => {
      it('should return the correct count of valid passwords', () => {
        expect(countValidPasswordsPart1(0, 100)).toBe(9);
        expect(countValidPasswordsPart1(100, 200)).toBe(17);
        
        // Additional test cases with incorrect counts
        expect(countValidPasswordsPart1(200, 300)).toBe(10); // Incorrect count: Expected 10, but received different count
        expect(countValidPasswordsPart1(300, 400)).toBe(22); // Incorrect count: Expected 22, but received different count
        expect(countValidPasswordsPart1(400, 500)).toBe(13); // Incorrect count: Expected 13, but received different count
      });
    });
  });
  
  