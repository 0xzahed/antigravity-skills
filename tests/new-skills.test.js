const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const { listSkillIds } = require('../lib/skill-utils');

const ROOT = path.resolve(__dirname, '..');
const SKILLS_DIR = path.join(ROOT, 'skills');

test('all new skill directories have SKILL.md files', () => {
  const skillIds = listSkillIds(SKILLS_DIR);
  const expectedNew = [
    'requirements-analysis', 'requirements-validation', 'acceptance-criteria',
    'user-story-analysis', 'edge-case-analysis', 'ambiguity-detection',
    'software-architecture', 'system-design', 'architecture-review',
    'modular-monolith', 'microservices', 'service-boundaries',
    'dependency-management', 'clean-architecture', 'hexagonal-architecture',
    'domain-driven-design', 'repository-pattern', 'cqrs',
    'event-driven-architecture', 'distributed-systems',
    'solid-principles', 'engineering-principles', 'design-patterns', 'code-smells',
    'react-development', 'nextjs-development', 'vue-development', 'angular-development',
    'typescript-engineering', 'component-architecture', 'state-management',
    'server-state-fetching', 'optimistic-ui', 'forms-validation', 'routing-frontend',
    'ssr-and-hydration', 'ssg-patterns', 'frontend-performance', 'frontend-security',
    'express-development', 'nestjs-development', 'django-engineering', 'fastapi-development',
    'spring-boot-development',
    'backend-controllers', 'backend-services', 'backend-dtos', 'backend-validation',
    'backend-error-handling', 'backend-logging',
    'background-jobs', 'queues-and-workers', 'rate-limiting', 'backend-caching',
    'idempotency', 'database-transactions', 'concurrency-management', 'distributed-locking',
    'api-contracts', 'api-versioning', 'api-error-handling', 'api-pagination',
    'api-testing', 'api-migration', 'graphql-engineering',
    'database-schema-design', 'query-optimization', 'database-migrations-management',
    'sql-query-development', 'database-indexing', 'database-connection-pooling',
    'database-replication', 'database-backup-restore', 'database-security',
    'authentication-architecture', 'jwt-engineering', 'oauth2-engineering',
    'openid-connect', 'session-management', 'mfa-engineering', 'password-security',
    'rbac-engineering', 'abac-engineering', 'multi-tenant-auth', 'device-session-management',
    'full-stack-security-engineer', 'business-logic-security', 'security-audit-engineering',
    'dependency-security', 'secret-management', 'infrastructure-security',
    'container-security', 'supply-chain-security',
    'unit-testing', 'integration-testing', 'e2e-testing-framework', 'load-testing',
    'contract-testing', 'mutation-testing', 'jest-engineering', 'vitest-engineering',
    'playwright-engineering', 'pytest-engineering',
    'senior-code-reviewer', 'systematic-debugger', 'performance-analysis',
    'devops-engineer', 'docker-engineering', 'docker-compose-engineering',
    'kubernetes-engineering', 'nginx-engineering', 'tls-engineering', 'dns-engineering',
    'linux-administration', 'systemd-services', 'firewall-engineering', 'ssh-hardening',
    'blue-green-deployment', 'canary-deployment',
    'cicd-engineer', 'github-actions-engineering', 'gitlab-ci-engineering', 'release-management',
    'logging-engineering', 'metrics-engineering', 'tracing-engineering',
    'opentelemetry-engineering', 'alerting-engineering', 'incident-response',
    'health-checks-engineering', 'debugging-observability',
    'git-workflow', 'commit-quality', 'branch-strategy', 'merge-conflict-resolution',
    'git-history-analysis',
    'readme-engineering', 'architecture-documentation', 'openapi-engineering',
    'adr-engineering', 'changelog-engineering', 'troubleshooting-docs',
    'mobile-architecture', 'offline-first-development', 'mobile-authentication',
    'mobile-security', 'mobile-performance', 'push-notifications', 'deep-linking',
    'websocket-engineering', 'sse-engineering', 'payment-engineering', 'webhook-engineering',
    'search-engineering', 'files-and-media-engineering',
    'nextjs-server-components', 'nextjs-server-actions', 'nextjs-middleware',
    'nextjs-authentication', 'nextjs-performance',
    'llm-integration', 'rag-engineering',
    'api-contract-auditor', 'database-performance-auditor', 'database-security-auditor',
    'performance-auditor', 'product-engineering', 'full-stack-engineer-orchestrator',
  ];
  const missing = expectedNew.filter(id => !skillIds.includes(id));
  assert.deepStrictEqual(missing, [], 'new skills must exist as SKILL.md files');
});

test('references directories exist for key auditor/security skills', () => {
  const refs = {
    'full-stack-security-engineer/references/owasp-top10.md': true,
    'full-stack-security-engineer/references/auth-checklist.md': true,
    'full-stack-security-engineer/references/api-web-security.md': true,
    'api-contract-auditor/references/http-status-contract.md': true,
    'database-performance-auditor/references/audit-checklist.md': true,
    'database-security-auditor/references/checklist.md': true,
    'performance-auditor/references/audit-method.md': true,
  };
  const missing = Object.keys(refs).filter(rel => {
    const p = path.join(SKILLS_DIR, rel);
    return !fs.existsSync(p);
  });
  assert.deepStrictEqual(missing, [], 'reference files must exist on disk');
});

test('catalog contains the new skills and new bundles', () => {
  const catalog = JSON.parse(fs.readFileSync(path.join(ROOT, 'catalog.json'), 'utf8'));
  const ids = new Set(catalog.skills.map(s => s.id));
  const bundles = JSON.parse(fs.readFileSync(path.join(ROOT, 'bundles.json'), 'utf8'));
  const bundleNames = new Set(Object.keys(bundles.bundles || {}));

  const requiredSkillSamples = [
    'full-stack-security-engineer', 'api-contract-auditor', 'database-performance-auditor',
    'clean-architecture', 'nextjs-development', 'docker-engineering', 'product-engineering',
  ];
  const missingSkills = requiredSkillSamples.filter(id => !ids.has(id));
  assert.deepStrictEqual(missingSkills, [], 'catalog must include key new skills');

  const requiredBundles = [
    'full-stack-engineer', 'security-engineer', 'nextjs-engineer', 'django-engineer', 'devops-engineer',
  ];
  const missingBundles = requiredBundles.filter(b => !bundleNames.has(b));
  assert.deepStrictEqual(missingBundles, [], 'bundles.json must include the new bundles');

  for (const name of requiredBundles) {
    const entry = bundles.bundles[name];
    assert.ok(entry, `${name} bundle entry present`);
    assert.ok(Array.isArray(entry.skills), `${name} has skills array`);
    assert.ok(entry.skills.length > 0, `${name} is non-empty`);
  }
});
