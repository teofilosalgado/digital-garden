import { visit, SKIP } from "unist-util-visit";

export default function remarkSpeechBubble() {
    return function (tree) {
        visit(tree, "listItem", (node) => {
            if (
                (node?.children?.at(0)?.type !== "paragraph")
                || (node?.children?.at(0)?.children.at(0)?.type !== "text")
                || (!node?.children?.at(0)?.children?.at(0)?.value)
            ) {
                return [SKIP];
            }
            const currentTextValue = node?.children?.at(0)?.children?.at(0)?.value;

            const dataTaskMatch = currentTextValue.match(/\[(?<dataTask>\d)\]/);
            if (dataTaskMatch === null) {
                return [SKIP];
            }
            const dataTask = dataTaskMatch.groups.dataTask;

            node.data = node?.data || {};
            node.data.hProperties = node?.data?.hProperties || {};
            node.data.hProperties.dataTask = node?.data?.hProperties?.dataTask || [];
            node.data.hProperties.dataTask.push(dataTask);

            node.children = [
                {
                    type: 'paragraph',
                    children: currentTextValue.replace(/\[\d\] */g, "").split("\n").map(item => ({
                        type: 'paragraph',
                        children: [
                            {
                                type: 'text',
                                value: item,
                            }
                        ],
                    }))
                }
            ];
            // console.log(node.children.at(0));
        });
    };
}
