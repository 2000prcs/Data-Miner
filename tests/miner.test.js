process.env.TEST = true;

const { miner, logCompanies } = require('../index');


// Testing STDOUT
describe('Miner CLI', () => {
  test('Should print out result on console', (done) => {
    const mockConsole = console.log = jest.fn();
    logCompanies(['Awesome Company', 'Great Company', 'Amazing Company']);
    expect(mockConsole).toBeCalledWith(`Company Names:\nAwesome Company, Great Company, Amazing Company\n\nNumber of Companies: 3`)
    mockConsole.mockClear();
    logCompanies([]);
    expect(mockConsole).toBeCalledWith('No Companies Found with Your Query');
    mockConsole.mockReset();
    done();
  });
});



// Testing error handling
describe('Miner CLI with wrong file', () => {
  test('Should handle the case of wrong file path', (done) => {
    const mockConsole = console.log = jest.fn();
    expect(miner('Wrong Path', 'locate', 'CA')).toEqual();
    expect(mockConsole).toBeCalledWith('Error Occured: Wrong File Path');
    mockConsole.mockReset();
    done();
  });
});