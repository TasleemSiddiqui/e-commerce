import { defineType, defineField } from "sanity";

export default defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Name',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'name',
                maxLength: 200
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'price',
            type: 'number',
            title: 'Price',
            validation: Rule => Rule.required().min(0)
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Description',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'categories',
            type: 'array',
            title: 'Categories',
            of: [{ type: 'reference', to: { type: 'category' } }]
        }),
        defineField({
            name: 'mainImage',
            type: 'image',
            title: 'Main Image',
            options: {
                hotspot: true
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'images',
            type: 'array',
            title: 'Images',
            of: [{ type: 'image' }],
            options: {
               
            }
        }),
        defineField({
            name: 'stock',
            type: 'number',
            title: 'Stock',
            validation: Rule => Rule.required().integer().min(0)
        }),
        defineField({
            name: 'sizes',
            type: 'array',
            title: 'Sizes',
            of: [
                {
                    type: 'string',
                    options: {
                        list: ['S', 'M', 'L', 'XL']
                    }
                }
            ],
            validation: Rule => Rule.required().min(1)
        }),
       
    ]
});
