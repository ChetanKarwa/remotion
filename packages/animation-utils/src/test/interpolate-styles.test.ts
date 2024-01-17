import {expect, test} from 'vitest';
import {interpolateStyles} from '../transformation-helpers/interpolate-styles';

test('If property is omitted, leave it in from previous keyframe', () => {
	expect(
		interpolateStyles(
			0,
			[0, 1],
			[
				{
					opacity: 1,
				},
				{},
			],
		),
	).toEqual({opacity: 1});
});

test('Handle units', () => {
	expect(
		interpolateStyles(
			0.5,
			[0, 1],
			[
				{
					padding: '20px 40px',
				},
				{
					padding: '40px 80px',
				},
			],
		),
	).toEqual({padding: '30px 60px'});
});

test('Handle units', () => {
	expect(
		interpolateStyles(
			0.5,
			[0, 1],
			[
				{
					backgroundColor: 'blue',
					opacity: 0,
				},
				{
					backgroundColor: 'pink',
					opacity: 1,
				},
			],
		),
	).toEqual({backgroundColor: 'rgba(128, 96, 229, 1)', opacity: 0.5});
});

test('Throw error on incompatible shorthands', () => {
	expect(() =>
		interpolateStyles(
			0.5,
			[0, 1],
			[
				{
					padding: '20px 40px',
				},
				{
					padding: '80px',
				},
			],
		),
	).throws(
		/The start and end values must be of the same type. Start value: 20px 40px, end value: 80px/,
	);
});

test.skip('Should throw an error on non-animateable properties', () => {
	expect(() =>
		interpolateStyles(
			0.5,
			[0, 1],
			[
				{
					textAlign: 'center',
				},
				{
					textAlign: 'left',
				},
			],
		),
	).throws(/some good error/);
});

test.skip('Should be able to interpolate transform strings - edge', () => {
	expect(
		interpolateStyles(
			0,
			[0, 1],
			[
				{
					transform: `scale(0.5)`,
				},
				{
					transform: `scale(1)`,
				},
			],
		),
	).toEqual({transform: `scale(0.5)`});
});

test.skip('Should be able to interpolate transform strings - middle', () => {
	expect(
		interpolateStyles(
			2.5,
			[0, 1, 2],
			[
				{
					transform: `scale(0.5)`,
				},
				{
					transform: `scale(1) translateX(100px) rotate(20deg)`,
				},
				{
					transform: `scale(2) translateX(300px) rotate(60deg)`,
				},
			],
		),
	).toEqual({transform: `scale(2) translateX(300px) rotate(60deg)`});

	expect(
		interpolateStyles(
			0.5,
			[0, 1, 2],
			[
				{
					transform: `scale(0.5)`,
				},
				{
					transform: `scale(1) translateX(100px) rotate(20deg)`,
				},
				{
					transform: `scale(2) translateX(300px) rotate(60deg)`,
				},
			],
		),
	).toEqual({transform: `scale(0.75) translateX(50px) rotate(10deg)`});
});

test('Should throw on units mismatch', () => {
	expect(() =>
		interpolateStyles(
			0.5,
			[0, 1],
			[
				{
					padding: '20px',
				},
				{
					padding: '80%',
				},
			],
		),
	).toThrow(
		/The units of the start and end values must match. Start value: 20px, end value: 80%/,
	);
});

test.skip('Should handle `border`', () => {
	expect(
		interpolateStyles(
			0.5,
			[0, 1],
			[
				{
					border: '1px solid black',
				},
				{
					border: '10px solid red',
				},
			],
		),
	).toBe({
		border: '5.5px solid rgba(128, 0, 0, 1)',
	});

	expect(() =>
		interpolateStyles(
			0.5,
			[0, 1],
			[
				{
					border: '1px solid black',
				},
				{
					border: '10px dotted red',
				},
			],
		),
	).throws(/some/);
});