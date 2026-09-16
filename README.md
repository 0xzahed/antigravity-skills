# Antigravity Skill Vault

A curated collection of **Agent Skills** for **Google Antigravity**.

This vault provides your agent with repeatable workflows, domain expertise, and specialized tools.

It also includes a comprehensive **professional software engineering skills system** covering the full SDLC: requirements, architecture, frontend, backend, API, database, auth, security, testing, review/debug, performance, DevOps/CI-CD, observability, Git, docs, mobile, realtime, payments, search, AI/ML, and product engineering.

---

## 🚀 Overview

This repository contains **475 specialized skills** across software development, operations, security, and business domains. Each skill is a directory-based package that teaches Antigravity's agent how to perform specific tasks.

### What's Included?

The skills fall into three types, all unified into the Antigravity Skill format:

1.  **Domain Skills** (e.g., `k8s-manifest-generator`, `async-python-patterns`): Specialized knowledge packages.
2.  **Specialist Agents** (e.g., `backend-architect`, `security-auditor`): Persona-based instruction sets for complex reasoning.
3.  **Commands & Workflows** (e.g., `full-stack-orchestration-full-stack-feature`, `conductor-implement`): Structured, multi-step procedures.

---

## 📂 Categories

Skills are flattened in the `skills/` directory, but cover these broad categories:

### 💻 Development & Languages
- **Python**: `python-pro`, `fastapi-pro`, `async-python-patterns`, `uv-package-manager`
- **JavaScript/TypeScript**: `typescript-pro`, `react-modernization`, `nextjs-app-router-patterns`
- **Systems**: `rust-pro`, `golang-pro`, `memory-safety-patterns`
- **Mobile**: `frontend-mobile-development-component-scaffold`, `react-native-architecture`

### ☁️ Infrastructure & Operations
- **Kubernetes**: `kubernetes-architect`, `helm-chart-scaffolding`, `gitops-workflow`
- **Cloud**: `cloud-architect`, `terraform-module-library`, `cost-optimization`
- **CI/CD**: `cicd-automation-workflow-automate`, `github-actions-templates`, `gitlab-ci-patterns`

### 🔒 Security & Quality
- **Security**: `security-auditor`, `sast-configuration`, `security-scanning-security-hardening`
- **Code Quality**: `code-review-ai-ai-review`, `code-refactoring-refactor-clean`, `codebase-cleanup-tech-debt`
- **Testing**: `unit-testing-test-generate`, `tdd-workflows-tdd-cycle`, `e2e-testing-patterns`

### 🔄 Workflows & Architecture
- **Conductor**: `conductor-implement`, `context-driven-development` (Context-Driven Development)
- **Architecture**: `c4-architecture-c4-architecture`, `microservices-patterns`, `api-design-principles`
- **Orchestration**: `full-stack-orchestration-full-stack-feature`, `incident-response-incident-response`

### 📊 Data & AI
- **Data Engineering**: `data-engineer`, `spark-optimization`, `dbt-transformation-patterns`
- **AI/ML**: `ml-pipeline-workflow`, `prompt-engineering-patterns`, `rag-implementation`

---

## 🎯 Install Strategically (Token Efficient)

Antigravity loads metadata (name + description) from every installed skill at session start. More skills means more token usage and a higher chance of irrelevant auto-activation. Prefer targeted installs via search, tags, or bundles. `install --all` is advanced and not recommended for most projects.

## 🧭 Catalog & Discovery

This repo ships a generated catalog for discovery:

- `CATALOG.md` (human-readable index)
- `catalog.json` (machine-readable index used by the CLI)
- `bundles.json` (curated bundles)
- `aliases.json` (short names that map to long skill IDs)

Regenerate after adding/editing skills:

```bash
npm run build:catalog
```

## 🛠️ How to Use

When a conversation starts, Antigravity loads the **metadata** (name & description) from all skills.
ANTIGRAVITY automatically activates a skill when your request matches its description.

**Examples:**

*   *"Help me design a REST API for a user service"* → Activates `api-design-principles` and `backend-architect`.
*   *"Scaffold a new FastAPI project"* → Activates `python-development-python-scaffold`.
*   *"Review this PR for security issues"* → Activates `security-scanning-security-hardening` or `security-auditor`.
*   *"Start a new feature track for login"* → Activates `conductor-new-track`.

---

You can install skills in **two scopes**:

-   **Workspace scope** (project-specific): `<workspace-root>/.agent/skills/`
-   **Global scope** (available in all projects): `~/.gemini/antigravity/skills/`

### Using `agy plugin install` (Native AGY CLI) — experimental

> **Experimental.** The plugin manifest below has not yet been verified end-to-end against a
> released `agy` CLI. If `agy plugin install` does not pick it up, use the `npx` or manual
> instructions below, which are the supported paths. Reports are welcome in the issue tracker.

You can install this repository directly as a native Antigravity plugin:

```bash
agy plugin install https://github.com/0xzahed/antigravity-skills
```

This registers the `antigravity-skills-manager` plugin and enables `/skills-manager` (or `/skills`) slash commands inside Antigravity:

- **List available catalog skills:**
  ```bash
  /skills-manager list
  ```
- **Search skills by keyword:**
  ```bash
  /skills-manager search <term>
  # Example:
  /skills-manager search flutter
  ```
- **Install a skill to `~/.gemini/antigravity/skills/`:**
  ```bash
  /skills-manager install <skill_id>
  # Example:
  /skills-manager install flutter-expert
  ```
- **List locally installed skills:**
  ```bash
  /skills-manager installed
  ```

*(Note: `/skills` is also available as a short command alias.)*

### Using `npx` (Recommended)

You can easily install skills directly from the repository without cloning it manually.

**1. Search skills (recommended first):**

```bash
npx @0xzahed/antigravity-skills search <query>
# Example:
npx @0xzahed/antigravity-skills search kubernetes
```

**2. List available skills:**

```bash
npx @0xzahed/antigravity-skills list
```

**3. Install a specific skill to your current project:**

```bash
npx @0xzahed/antigravity-skills install <skill-name>
# Example:
npx @0xzahed/antigravity-skills install bash-pro
```

**4. Install by tag or bundle (targeted sets):**

```bash
# By tag
npx @0xzahed/antigravity-skills install --tag kubernetes

# By bundle
npx @0xzahed/antigravity-skills install --bundle core-dev
```

Available bundles: `core-dev`, `security-core`, `k8s-core`, `data-core`, `ops-core`, `full-stack-engineer`, `security-engineer`, `nextjs-engineer`, `django-engineer`, `devops-engineer`.

**5. Install a skill globally:**

```bash
npx @0xzahed/antigravity-skills install <skill-name> --global
# Example:
npx @0xzahed/antigravity-skills install bash-pro --global
```

**6. Check installed skills:**

```bash
# List local specific skills
npx @0xzahed/antigravity-skills installed

# List globally installed skills
npx @0xzahed/antigravity-skills installed --global
```

**7. Update installed skills:**

```bash
# Update a specific skill
npx @0xzahed/antigravity-skills update <skill-name>

# Update ALL installed skills
npx @0xzahed/antigravity-skills update

# Update global skills
npx @0xzahed/antigravity-skills update --global
```

**8. Doctor / stats:**

```bash
npx @0xzahed/antigravity-skills doctor
npx @0xzahed/antigravity-skills stats
```

**9. Install ALL skills (advanced, not recommended):**

```bash
# To your current workspace
npx @0xzahed/antigravity-skills install --all

# Globally
npx @0xzahed/antigravity-skills install --all --global
```

> **Note:** Installing all skills increases token usage and can trigger unrelated skills. Prefer targeted installs.

Aliases are supported via `aliases.json` (for long skill names).

Example:

```bash
npx @0xzahed/antigravity-skills install full-stack-feature
```

### Manual Installation

If you prefer to clone the repository:

**Option A — Install to a workspace**

```bash
mkdir -p .agent/skills
cp -R /path/to/antigravity-skills/skills/<skill-name> .agent/skills/
```

**Option B — Install globally**

```bash
mkdir -p ~/.gemini/antigravity/skills
cp -R /path/to/antigravity-skills/skills/<skill-name> ~/.gemini/antigravity/skills/
```

> **Note:** After copying skills, restart your agent session so Antigravity re-detects them.

---

## 🧑‍💻 Professional Software Engineering Skills

The vault ships a complete engineering skills system (475 skills total), including these specialist roles and auditors:

- **Orchestrators & Planning**: `full-stack-engineer-orchestrator`, `product-engineering`
- **Requirements**: `requirements-analysis`, `requirements-validation`, `acceptance-criteria`, `user-story-analysis`, `edge-case-analysis`, `ambiguity-detection`
- **Architecture & Principles**: `software-architecture`, `system-design`, `architecture-review`, `modular-monolith`, `microservices`, `service-boundaries`, `clean-architecture`, `hexagonal-architecture`, `domain-driven-design`, `cqrs`, `event-driven-architecture`, `distributed-systems`, `solid-principles`, `design-patterns`, `code-smells`
- **Frontend**: `react-development`, `nextjs-development` (+ `nextjs-server-components`, `nextjs-server-actions`, `nextjs-middleware`, `nextjs-authentication`, `nextjs-performance`), `vue-development`, `angular-development`, `component-architecture`, `state-management`, `forms-validation`, `ssr-and-hydration`, `ssg-patterns`, `frontend-performance`, `frontend-security`
- **Backend & API**: `express-development`, `nestjs-development`, `django-engineering`, `fastapi-development`, `spring-boot-development`, `backend-controllers`, `backend-services`, `backend-dtos`, `backend-validation`, `backend-error-handling`, `backend-logging`, `background-jobs`, `queues-and-workers`, `rate-limiting`, `backend-caching`, `idempotency`, `api-contracts`, `api-versioning`, `api-error-handling`, `api-pagination`, `graphql-engineering`
- **Database**: `database-schema-design`, `query-optimization`, `database-migrations-management`, `database-indexing`, `database-connection-pooling`, `database-replication`, `database-backup-restore`, `database-security`
- **Auth & Security**: `authentication-architecture`, `jwt-engineering`, `oauth2-engineering`, `openid-connect`, `session-management`, `mfa-engineering`, `rbac-engineering`, `abac-engineering`, `full-stack-security-engineer`, `business-logic-security`, `secret-management`, `container-security`, `supply-chain-security`
- **Testing, Review & Debug**: `unit-testing`, `integration-testing`, `e2e-testing-framework`, `load-testing`, `contract-testing`, `mutation-testing`, `jest-engineering`, `vitest-engineering`, `playwright-engineering`, `pytest-engineering`, `senior-code-reviewer`, `systematic-debugger`
- **DevOps/CI-CD/Observability**: `devops-engineer`, `docker-engineering`, `kubernetes-engineering`, `nginx-engineering`, `tls-engineering`, `cicd-engineer`, `github-actions-engineering`, `gitlab-ci-engineering`, `release-management`, `blue-green-deployment`, `canary-deployment`, `logging-engineering`, `metrics-engineering`, `tracing-engineering`, `opentelemetry-engineering`, `alerting-engineering`, `incident-response`
- **Docs & Git**: `readme-engineering`, `architecture-documentation`, `openapi-engineering`, `adr-engineering`, `changelog-engineering`, `git-workflow`, `commit-quality`, `branch-strategy`, `merge-conflict-resolution`, `git-history-analysis`
- **Mobile, Realtime, Payments**: `mobile-architecture`, `offline-first-development`, `mobile-authentication`, `push-notifications`, `deep-linking`, `websocket-engineering`, `sse-engineering`, `payment-engineering`, `webhook-engineering`, `search-engineering`
- **AI/ML**: `llm-integration`, `rag-engineering`
- **Auditors**: `api-contract-auditor`, `database-performance-auditor`, `database-security-auditor`, `performance-auditor` (each ships a `references/` folder with ready-made checklists)

### Caretaker skills (read-only audits)

Auditor skills operate in **read-only audit mode by default**: they do not modify code unless you explicitly ask for fixes. Ask for a report and, when ready, request remediation in a follow-up.

### Recommended bundles for new projects

```bash
npx @0xzahed/antigravity-skills install --bundle full-stack-engineer
npx @0xzahed/antigravity-skills install --bundle security-engineer
npx @0xzahed/antigravity-skills install --bundle nextjs-engineer
```

---

## ➕ Adding New Skills

1.  Create a folder: `skills/<skill-name>/`
2.  Add `SKILL.md` (required)
3.  (Optional) Add helpers: `scripts/`, `references/`, `assets/`

### Authoring Guidelines

- Keep `SKILL.md` concise; move long examples to `resources/` or `examples/`.
- Use narrow descriptions (for example: "Use when you need to ...") and include "Do not use" to reduce over-activation.
- Add a "Safety" section for skills that propose terminal or infrastructure changes.
- Regenerate catalog files with `npm run build:catalog`, then run the local gate: `npm test`, `STRICT=1 npm run validate:skills`, and `npm run check:catalog` (CI runs all three).
- CI runs strict validation using `validation-baseline.json` for existing gaps; new skills must include the required sections, and any backticked `resources/`/`references/`/`assets/`/`scripts/` file referenced in `SKILL.md` must exist.
- The baseline is intentionally empty. Refreshing it (`node scripts/validate-skills.js --write-baseline --yes`) grandfathers — and thus silences — current soft violations, so avoid it unless you truly need to; without `--yes` the command only previews what it would grandfather.

### SKILL.md Template

```markdown
---
name: <skill-name>
description: <one sentence describing when to use this skill>
---

# <Skill Title>

## Use this skill when
- ...

## Do not use this skill when
- ...

## Instructions
1. ...
2. ...
```

---

## 🔐 Security

See [SECURITY.md](SECURITY.md) for safety expectations when writing skills that touch terminals or infrastructure.

---

## 📜 License

MIT License. See [LICENSE](LICENSE) file for details.

© 0xzahed.
