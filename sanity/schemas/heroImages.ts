export default {
    name: 'images',
    type: 'document',
    title: 'Hero Images',
    fields: [
        {
            name: 'images',
            type: 'array',
            title: 'Product Image',
            of: [{ type: 'image' }],
        },
    ],
}
