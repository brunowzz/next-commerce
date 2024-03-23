export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name of Product',
        },
        {
            name: 'category',
            title: 'Product Category',
            type: 'reference',
            to: [
                {
                    type: 'category',
                },
            ],
        },
        {
            name: 'images',
            type: 'array',
            title: 'Product Image',
            of: [{ type: 'image' }],
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description of product',
        },
        {
            name: 'price_id',
            type: 'string',
            title: 'Price ID',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Product Slug',
            options: {
                source: 'name',
            },
        },
        {
            name: 'price',
            title: 'price',
            type: 'number',
        },
    ],
}
