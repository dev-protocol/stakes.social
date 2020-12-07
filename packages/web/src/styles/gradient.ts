export const blueGradient = (align: 'vertical' | 'horizontal' = 'horizontal') => `
    background-image: linear-gradient(${align === 'horizontal' ? 'to right' : 'to bottom'}, #2f80ed, #1ac9fc);
`

export const blackGradient = (align: 'vertical' | 'horizontal' = 'horizontal') => `
    background-image: linear-gradient(${align === 'horizontal' ? 'to right' : 'to bottom'}, black, white 250%);
`
