/**
 * @jest-environment jsdom
 */

const buttonClick = require('../botton');

beforeEach( () => {
    let fs = require('fs');
    let fileConenets = fs.readFileSync('index.html', 'utf-8');
    document.open();
    document.write(fileConenets);
    document.close();
});

describe('DOM test', () => {
    test('expects p content to change', () => {
        buttonClick();
        expect(document.getElementById('par').innerHTML).toEqual('You Clicked');
    });
    test('h1 should exist', () => {
        expect(document.getElementsByTagName('h1').length).toBe(1);
    });
});