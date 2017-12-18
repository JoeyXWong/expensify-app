const add = (a,b) => a+b;
const generateGreeting = (name) => `Hello ${name}!`;

test('Should add two numbers', ()=>{
    const result = add(3,4);

    expect(result).toBe(7);
});

test('Should return Hello Joey from calling generateGreeting', () =>{
    expect(generateGreeting('Joey')).toBe('Hello Joey!');
})