import { defineType, defineField } from "sanity";

export default defineType({
    name: "category",
    title: "Category",
    type: "document",
    fields: [
        defineField({
            name: "categoryName",
            title: "Category Name",
            type: "string",
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'categorySlug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'categoryName',
                maxLength: 200
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: "categoryDescription",
            title: "Category Description  ",
            type: "string",
            validation: Rule => Rule.required()
        }),
    ]
});
