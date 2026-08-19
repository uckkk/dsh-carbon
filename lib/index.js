import { defineTool } from "@deepseek-ai/dsh-tools";

const name = "碳元素";
const inject = ["tools"];

async function apply(ctx, _config) {
  ctx.tools.register(defineTool({
    name: "element_info",
    description: "返回元素 Carbon（碳，C）的原子序数、原子量与类别。",
    parameters: {},
    output: { schema: { type: "object", additionalProperties: false, properties: { output: { type: "json" } } }, render: (_a, v) => [{ type: "text", text: typeof v.output === "string" ? v.output : JSON.stringify(v.output, null, 2) }] },
    execute: async (args) => ((a) => ({ output: { name: "Carbon（碳）", symbol: "C", atomic_number: 6, atomic_mass: 12.011, category: "非金属" } }))(args),
  }));
}

export { apply, inject, name };
