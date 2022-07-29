const area = d => Math.PI * ((d/2) ** 2)

const costPerArea = c => d => c / area (d)

const ratios = [
	[11.99, 10],
	[13.99, 12],
	[16.99, 14],
	[18.99, 16],
	[28.99, 18],
]

console.log (ratios.map (([c, d]) => costPerArea (c) (d)))
