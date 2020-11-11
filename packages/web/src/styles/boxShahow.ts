export const boxShahow = () => `
    box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.06);
`

export const boxShahowWithOnHover = () => `
    ${boxShahow()}
    :hover {
        transition: ease-in-out 0.2s;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.12);
    }
`
