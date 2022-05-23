export const defaultValue = `# This is a Markdown previewer!!

## With different headers.

### by [jvitoralb](https://www.github.com/jvitoralb)!

*Here you can set an inline code* \`"Hello World!"\`

\`\`\`
// this is multi-line code:

const writeYourCode = () => {
    if (true) {
        return console.log("It's true");
    }
}
\`\`\`
You can also make lists:

- Unordered lists
- Unordered lists

1. Ordered List
    - Nested lists item

2. Ordered List
    - Nested item
        - Second nested item

Can quote text:
> Freedom (n.): To ask nothing. To expect nothing. To depend on nothing.

— Ayn Rand

**You can also set up images**

![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)`;

export const keywordsText = `### A Markdown previewer.  
Here are some helpful keywords:

\`#\` For the bigger header.

\`##\` For the subheader.

\`###\` For the smaller one.

If you want a new paragraph, leave an empty line.

Use double-space  
to brake a line.

Write between \` \`\` \` to write in-line code

For a codeblock write \` \`\`\` \` to open and write your code
and then to close use also three backticks.

To make lists:
- Use \`-\` for Unordered
2. Use \`1.\` for Unordered
    - Can use any number before a \`.\`
    - For nested lists use \`-\` right below the first letter of the first word in the item above.

To attach links [Write the word inside brackects](and the URL in parenthesis).

If you want to insert images:  
![Use the same pattern as](for the links) with \`!\`, before the brackets.`;