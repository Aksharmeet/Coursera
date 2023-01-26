const calculator = require('../calculator')
const { expect } = require('chai')

// testsuit
describe('Calculator testing', function () {
	describe('Functionality testing', function () {
		describe('Addition functionality testing', function () {
			it('Add two positive numbers, returning get positive sum', function () {
				expect(calculator('a', { lhs: 1, rhs: 2 })).to.be.equal(3)
			})

			it('Add two negative numbers, returning get negative sum', function () {
				expect(calculator('a', { lhs: -1, rhs: -2 })).to.be.equal(-3)
			})

			it('Add two number, with either of them is negative, producing subtracted output', function () {
				expect(calculator('a', { lhs: -1, rhs: 2 })).to.be.equal(1)
				expect(calculator('a', { lhs: 1, rhs: -2 })).to.be.equal(-1)
			})

			it('Add zeros, produces zero', function () {
				expect(calculator('a', { lhs: 0, rhs: 0 })).to.be.equal(0)
			})
		})

		describe('Subtraction functionality testing', function () {
			it('Subtract two positive numbers, returning get positive subtraction', function () {
				expect(calculator('s', { lhs: 10, rhs: 5 })).to.be.equal(5)
			})

			it('Subtract two negative numbers, returning get negative subtraction', function () {
				expect(calculator('s', { lhs: -10, rhs: -5 })).to.be.equal(-5)
				// Write the testing logic here
			})

			it('Subtract two number, with either of them is negative, producing sum output', function () {
				expect(calculator('s', { lhs: 10, rhs: -5 })).to.be.equal(15)
				expect(calculator('s', { lhs: -10, rhs: 5 })).to.be.equal(-15)
				// Write the testing logic here
			})

			it('Subtract zeros, produces zero', function () {
				expect(calculator('s', { lhs: 0, rhs: 0 })).to.be.equal(0)
				// Write the testing logic here
			})
		})
		describe('Multiplication functionality testing', function () {
			// test case to test multiply functionality
			it('Multiply two positive numbers, returning get positive Multiplication', function () {
				expect(calculator('m', { lhs: 2, rhs: 2 })).to.be.equal(4)
				// Write the testing logic here
			})
			// test case to test multiply functionality
			it('Multiply two negative numbers, returning get positive Multiplication', function () {
				expect(calculator('m', { lhs: -2, rhs: -2 })).to.be.equal(4)
				// Write the testing logic here
			})
			// test case to test multiply functionality
			it(`Multiply two number, with either of them is negative,
        producing negative multiplication output`, function () {
				expect(calculator('m', { lhs: -2, rhs: 2 })).to.be.equal(-4)
				expect(calculator('m', { lhs: 2, rhs: -2 })).to.be.equal(-4)
				// Write the testing logic here
			})

			// test case to test multiply functionality
			it('Multiply zeros, produces zero', function () {
				expect(calculator('m', { lhs: 0, rhs: 0 })).to.be.equal(0)
				// Write the testing logic here
			})
		})
		describe('Division functionality testing', function () {
			// test case to test divide functionality

			it('Divide two positive numbers, returning get positive Multiplication', function () {
				expect(calculator('d', { lhs: 4, rhs: 2 })).to.be.equal(2)
				// Write the testing logic here
			})

			// test case to test divide functionality
			it('Divide two negative numbers, returning get positive Multiplication', function () {
				expect(calculator('d', { lhs: -4, rhs: -2 })).to.be.equal(2)
				// Write the testing logic here
			})

			// test case to test divide functionality

			it('Divide two number, with either of them is negative, producing negative Division output', function () {
				expect(calculator('d', { lhs: -4, rhs: 2 })).to.be.equal(-2)
				expect(calculator('d', { lhs: 4, rhs: -2 })).to.be.equal(-2)
				// Write the testing logic here
			})

			// test case to test divide functionality
			it(`Should not divide by 0, producing 'Can not divide by zero' message`, function () {
				expect(calculator('d', { lhs: 0, rhs: 0 })).to.be.equal('Can not divide by zero')
				// Write the testing logic here
			})
		})
		describe('Unknown operation testing', function () {
			// test case to test divide functionality
			it(`should not calculate if unknown operation is passed,
        producing 'Unknown operation' message`, function () {
				expect(calculator('g', { lhs: 0, rhs: 0 })).to.be.equal('Unknown operation')
				// Write the testing logic here
			})
		})
	})
})
