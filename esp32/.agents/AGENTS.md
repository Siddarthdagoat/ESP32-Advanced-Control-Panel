# Workspace Customizations - Context Mode

## Context Mode Mandatory Execution Policy

Default to context-mode for ALL commands. Only use Bash for guaranteed-small-output operations.

### Bash Whitelist (safe to run directly):
- **File mutations**: `mkdir`, `mv`, `cp`, `rm`, `touch`, `chmod`
- **Git writes**: `git add`, `git commit`, `git push`, `git checkout`, `git branch`, `git merge`
- **Navigation**: `cd`, `pwd`, `which`
- **Process control**: `kill`, `pkill`
- **Package management**: `npm install`, `npm publish`, `pip install`
- **Simple output**: `echo`, `printf`

**Everything else → Use `ctx_execute` or `ctx_execute_file`.** Any command that reads, queries, fetches, lists, logs, tests, builds, diffs, inspects, or calls an external service. This includes ALL CLIs (gh, aws, kubectl, docker, terraform, wrangler, fly, heroku, gcloud, etc.).

**When uncertain, use context-mode.** Every KB of unnecessary context reduces the quality and speed of the entire session.

### Critical Rules
1. **Always console.log/print your findings.** stdout is all that enters context. No output = wasted call.
2. **Write analysis code, not just data dumps.** Don't `console.log(JSON.stringify(data))` — analyze first, print findings.
3. **Be specific in output.** Print bug details with IDs, line numbers, exact values — not just counts.
4. **For files you need to EDIT**: Use the normal Read tool. context-mode is for analysis, not editing.
5. **Never use `ctx_index(content: large_data)`.** Use `ctx_index(path: ...)` to read files server-side.
6. **Always use `filename` parameter** on Playwright tools (`browser_snapshot`, `browser_console_messages`, `browser_network_requests`). Without it, the full output enters context.
7. **Don't re-index data already in context.** If an MCP tool returned data in a previous response, it's already loaded — use it directly or save to file first.
