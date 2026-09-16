---
name: container-security
description: Secure container images and runtimes. Use when hardening Docker/K8s workloads.
metadata:
  tags: container, security
---

# Container Security

## Use this skill when
- Building minimal, non-root container images
- Scanning images for CVEs
- Hardening the runtime (capabilities, seccomp, read-only FS)

## Do not use this skill when
- General application vulnerabilities
- CI/CD pipeline security (use its own skill)

## Instructions
1. Base images on minimal, maintained distroless/alpine layers.
2. Never run as root: unprivileged UID, drop capabilities.
3. Multi-stage builds to keep images slim and secret-free.
4. Scan images in CI and gate on critical severities.
5. Set read-only root filesystem where possible.
6. Limit network and resources: no privileged, no hostPID/hostPath.
7. Pin image digests for reproducibility.
8. Apply seccomp/apparmor profiles.

## Checklist
- No root user
- No secrets baked into images
- Images scanned in CI

## Output Format
- Image | base | scans | runtime profile | fixes

## Common Mistakes
- Running as root by default
- Baking secrets at build time
- Unpinned mutable tags
