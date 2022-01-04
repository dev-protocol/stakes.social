export const blueGradient = (align: 'vertical' | 'horizontal' = 'horizontal') => `
    background-image: linear-gradient(${align === 'horizontal' ? 'to right' : 'to bottom'}, #2f80ed, #0062ff);
`

export const blackGradient = (align: 'vertical' | 'horizontal' = 'horizontal') => `
    background-image: linear-gradient(${align === 'horizontal' ? 'to right' : 'to bottom'}, black, white 250%);
`
