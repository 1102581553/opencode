// packages/opencode/src/tool/invalid.ts  完整替换为：
import z from "zod"
import { Tool } from "./tool"

export const InvalidTool = Tool.define("invalid", {
  description: "Do not use. This is internal error feedback only.",
  parameters: z.object({
    tool: z.string(),
    error: z.string(),
  }),
  async execute(params) {
    return {
      title: "Invalid Tool",
      output: `The arguments provided to the tool "${params.tool}" are invalid: ${params.error}\n\n` +
              `IMMEDIATELY correct the parameters and CALL THE ORIGINAL TOOL AGAIN with valid arguments. ` +
              `Do NOT call 'invalid' yourself. This is your chance to fix and retry (system will allow up to 3 corrections).`,
      metadata: {},
    }
  },
})
