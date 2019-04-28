export const selectOptions = [
    { value: 'trending', label: 'Trending' },
    { value: 'newest', label: 'Newest' },
    { value: 'oldest', label: 'Oldest' }
]

export const selectCustomStyles = {
    option: (provided, state) => ({
        ...provided,
        borderBottom: '1px dotted pink',
        color: state.isSelected ? 'white' : 'blue',
        padding: 20,
    }),
    control: (provided) => ({
        ...provided,
        minWidth: 200,
        width: '75vw'
    })
}